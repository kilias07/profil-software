export function waitForElement(selector: string): Promise<NodeList> {
  const element = document.querySelectorAll(selector);
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(element);
    }
    const observer = new MutationObserver(() => {
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
