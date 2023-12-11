const open_button = document.getElementById("open-button");

open_button.addEventListener(
  "click", async () => {
    const url = await getCurrentTabUrl();

    if (isNotWhatsApp(url)) {
      alertUser();
      return;
    }

    const phone = document.querySelector("input").value;

    openWhatsappChat(phone);
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

const alertUser = () => {
  let alert_message = document.getElementById("alert");
  alert_message.style.display='block';
};

const openWhatsappChat = phone => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let message = {
      action: "openWhatsappChat",
      phone: phone
    };
    chrome.tabs.sendMessage(tabs[0].id, message);
  });

};

const close_alert_button = document.getElementById("close-alert");
close_alert_button.addEventListener("click", () => {
  let alert_message = document.getElementById("alert");
  alert_message.style.display='none';
});
