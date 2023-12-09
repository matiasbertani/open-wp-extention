const open_button = document.getElementById("open-button");

open_button.addEventListener(
  "click", async () => {
    const url = await getCurrentTabUrl();

    if (isNotWhatsApp(url)) {
      // alertUser();
      return;
    }

    const phone = document.querySelector("input").value;

    // openWhatsappChat(phone);
  }
);

const getCurrentTabUrl = async () => {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.url;
};

const isNotWhatsApp = (url) => {
  return !isWhatsApp(url);
};

const isWhatsApp = (url) => {
  return url.includes("web.whatsapp.com");
};
