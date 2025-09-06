(() => {
  function scrapeProfile() {

    const fullName = document.querySelector('h1')?.innerText?.trim() || null;

    const expSection = Array.from(document.querySelectorAll("section"))
      .find(sec => sec.innerText.includes("Experience"));

    let designation = null;
    let organization = null;

    if (expSection) {
      const firstExpCard = expSection.querySelector("li");
      if (firstExpCard) {
        designation =
          firstExpCard.querySelector("div > div span[aria-hidden='true']")?.innerText?.trim() ||
          firstExpCard.querySelector("span")?.innerText?.trim();

        const spans = firstExpCard.querySelectorAll("span[aria-hidden='true']");
        if (spans.length > 1) {
          organization = spans[1]?.innerText?.trim();
          if (organization.includes("·")) {
            organization = organization.split("·")[0].trim();
          }
        }
      }
    }

    return { fullName, designation, organization };
  }

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "scrapeProfile") {
      sendResponse(scrapeProfile());
    }
  });
})();
