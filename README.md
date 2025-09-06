# LinkedIn Hunter Extension

A **Chrome Extension** that fetches LinkedIn profile details — **Full Name, Email, Organisation, and Designation** — using the Hunter.io API.

---

## 🚀 Objective

The goal of this extension is to make it easy to retrieve LinkedIn profile information directly from the profile page. When the extension icon is clicked, it displays the fetched data in a popup.

---

## 🚀 Setup Steps

1. Clone the repository
2. Open `popup.js` and replace `YOUR_API_KEY_HERE` with your Hunter.io API key.
3. Go to `chrome://extensions/` in Chrome.
4. Enable **Developer Mode** (top-right).
5. Click **Load Unpacked** and select this project folder.

---

## 🔧 Features

- Scrapes **Full Name, Designation, and Organization** from LinkedIn profile pages.
- Uses **Hunter.io APIs** to fetch professional email addresses.
  - **Domain Search API**: Finds the domain of the organization.
  - **Email Finder API**: Finds the professional email based on the first name, last name, and domain.
- Displays a clear **“No data found”** message when data is unavailable.
- Easy-to-use popup interface with a loader animation while fetching data.

---

## 🔎 How to Test

1. Open a LinkedIn profile (e.g., [Test Profile](https://www.linkedin.com/in/rish2408/)).
2. Click on the extension icon.
3. A popup will display the profile details and email (if available from Hunter.io).

If no data is found, you will see a "No data found" message.

---

## 📝 Author

[Rishabh Srivastava](https://rish2408.github.io/)
