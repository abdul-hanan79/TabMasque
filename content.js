(function () {
  const origin = window.location.origin;

  chrome.storage.local.get([origin], (result) => {
    const saved = result[origin];
    if (!saved) return;

    const { title, favicon } = saved;


    if (favicon) {
      const links = document.querySelectorAll("link[rel*='icon']");
      links.forEach((link) => link.parentNode.removeChild(link));

      const newLink = document.createElement("link");
      newLink.type = "image/x-icon";
      newLink.rel = "icon";
      newLink.href = favicon;
      document.head.appendChild(newLink);
    }
    if (title) {
      // Initial set
      document.title = title;

      // Observe changes and force our title again
      const observer = new MutationObserver(() => {
        if (document.title !== title) {
          document.title = title;
        }
      });

      const titleEl = document.querySelector("title");
      if (titleEl) {
        observer.observe(titleEl, { childList: true });
      }
    }
  });
})();
