const faviconMap = {
  "gmail.com": "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
  "facebook.com": "https://static.xx.fbcdn.net/rsrc.php/y1/r/ay1hV6OlegS.ico",
  "youtube.com":
    "https://www.youtube.com/s/desktop/d36f30a8/img/logos/favicon_144x144.png",
  "wikipedia.org": "https://www.wikipedia.org/static/favicon/wikipedia.ico",
  "chat.openai.com": "https://chat.openai.com/favicon.ico",
};

// Function to validate form and enable/disable apply button
function validateForm() {
  const siteSelect = document.getElementById("site");
  const titleInput = document.getElementById("title");
  const applyButton = document.getElementById("apply");
  
  // Check if both required fields are filled
  const isValid = siteSelect.value !== "" && titleInput.value.trim() !== "";
  
  // Enable/disable button based on validation
  applyButton.disabled = !isValid;
}

// Add input event listeners for validation
document.getElementById("site").addEventListener("change", function () {
  const selectedSite = this.value;
  const faviconInput = document.getElementById("favicon");

  if (selectedSite === "custom") {
    faviconInput.removeAttribute("disabled");
    faviconInput.value = "";
  } else {
    faviconInput.setAttribute("disabled", true);
    if (faviconMap[selectedSite]) {
      faviconInput.value = faviconMap[selectedSite];
    } else {
      faviconInput.value = "";
    }
  }
  
  validateForm();
});

// Add input event listener for title field
document.getElementById("title").addEventListener("input", validateForm);

// Initial validation check
validateForm();

document.getElementById("apply").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const title = document.getElementById("title").value;
  const favicon = document.getElementById("favicon").value;

  const pageUrl = new URL(tab.url).origin;

  // Save data to chrome storage
  chrome.storage.local.set({
    [pageUrl]: { title, favicon },
  });

  // Apply title and favicon on current page
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (title, favicon) => {
      if (title) document.title = title;

      if (favicon) {
        // Remove all existing favicon links
        const links = document.querySelectorAll("link[rel*='icon']");
        links.forEach((link) => link.parentNode.removeChild(link));

        // Create a new one
        const newLink = document.createElement("link");
        newLink.type = "image/x-icon";
        newLink.rel = "icon";
        newLink.href = favicon;
        document.head.appendChild(newLink);
      }
    },
    args: [title, favicon],
  });
});

// Reset button logic
document.getElementById("reset").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const pageUrl = new URL(tab.url).origin;

  // Clear stored data for this site
  chrome.storage.local.remove(pageUrl, async () => {
    // Reset the form
    document.getElementById("title").value = "";
    document.getElementById("favicon").value = "";
    document.getElementById("site").value = "";

    // Reset the page title and favicon
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        // Reload the page to restore original title and favicon
        window.location.reload();
      }
    });
  });
});

// Close button logic
document.getElementById("close-btn").addEventListener("click", () => {
  window.close();
});
