const hunterApiKey = "449f34bcf6bae51fcb6794bb907d3d7d9089f476";

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { action: "scrapeProfile" }, async (result) => {
    if (!result) {
      document.getElementById("loader").style.display = "none";
      document.getElementById("message").innerText = "No data found";
      return;
    }

    const { fullName, designation, organization } = result;

    try {
      let domain = "";

      // Get domain for email
      if (organization) {
        let orgResponse = await fetch(
          `https://api.hunter.io/v2/domain-search?company=${encodeURIComponent(organization)}&api_key=${hunterApiKey}`
        );
        let orgData = await orgResponse.json();
        domain = orgData?.data?.domain || "";
      }

      // Get organization email
      if (fullName && domain) {
        let nameParts = fullName.split(" ");
        let firstName = nameParts[0];
        let lastName = nameParts.slice(1).join(" ");

        let emailResponse = await fetch(
          `https://api.hunter.io/v2/email-finder?domain=${domain}&first_name=${firstName}&last_name=${lastName}&api_key=${hunterApiKey}`
        );
        let emailData = await emailResponse.json();
        document.getElementById("email").innerText = emailData?.data?.email || "No data found";
      } else {
        document.getElementById("email").innerText = "No data found";
      }

      document.getElementById("fullName").innerText = fullName || "No data found";
      document.getElementById("organization").innerText = organization || "No data found";
      document.getElementById("designation").innerText = designation || "No data found";

    } catch (err) {
      console.error(err);
      document.getElementById("message").innerText = "Error fetching data";
    } finally {
      document.getElementById("loader").style.display = "none";
      document.querySelectorAll(".data").forEach(el => el.style.display = "block");
    }
  });
});
