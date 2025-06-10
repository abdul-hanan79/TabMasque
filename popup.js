const faviconMap = {
  "gmail.com": "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
  "facebook.com": "https://static.xx.fbcdn.net/rsrc.php/y1/r/ay1hV6OlegS.ico",
  "youtube.com": "https://www.youtube.com/s/desktop/d36f30a8/img/logos/favicon_144x144.png",
  "wikipedia.org": "https://www.wikipedia.org/static/favicon/wikipedia.ico",
  "chat.openai.com": "https://chat.openai.com/favicon.ico"
};

document.getElementById("site").addEventListener("change", function () {
  const selectedSite = this.value;
  const faviconInput = document.getElementById("favicon");

  if (faviconMap[selectedSite]) {
    faviconInput.value = faviconMap[selectedSite];
  } else {
    faviconInput.value = "";
  }
});

document.getElementById("apply").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const title = document.getElementById("title").value;
  const favicon = document.getElementById("favicon").value;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (title, favicon) => {
      if (title) document.title = title;
      if (favicon) {
        let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = favicon;
        document.head.appendChild(link);
      }
    },
    args: [title, favicon]
  });
});

// Close button logic
document.getElementById("close-btn").addEventListener("click", () => {
  window.close();
});
