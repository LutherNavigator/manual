window.addEventListener("load", () => {
  // Open all external links in new tab
  const links = document.getElementsByTagName("a");
  for (const link of links) {
    if (link.host !== window.location.host) {
      link.setAttribute("target", "_blank");
    }
  }

  // Highlight code chunks
  hljs.highlightAll();
});
