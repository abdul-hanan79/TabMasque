const faviconMap = {
  "gmail.com": "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
  "facebook.com": "https://static.xx.fbcdn.net/rsrc.php/y1/r/ay1hV6OlegS.ico",
  "youtube.com":
    "https://www.youtube.com/s/desktop/d36f30a8/img/logos/favicon_144x144.png",
  "wikipedia.org": "https://www.wikipedia.org/static/favicon/wikipedia.ico",
  "chat.openai.com": "https://chat.openai.com/favicon.ico",
};

document.getElementById("site").addEventListener("change", function () {
  const selectedSite = this.value;
  const faviconInput = document.getElementById("favicon");

  if (selectedSite === "custom") {
    faviconInput.removeAttribute("disabled"); // Enable input
    faviconInput.value = ""; // Clear input
  } else {
    faviconInput.setAttribute("disabled", true); // Disable input
    if (faviconMap[selectedSite]) {
      faviconInput.value = faviconMap[selectedSite];
    } else {
      faviconInput.value = "";
    }
  }
});

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

// Close button logic
document.getElementById("close-btn").addEventListener("click", () => {
  window.close();
});
