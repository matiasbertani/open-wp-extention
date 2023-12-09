chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "openWhatsappChat") {
        let phone = request.phone;
        openWhatsappChat(phone)
    }
});

const openWhatsappChat = phone => {
    const link = document.createElement("a");
    link.setAttribute("href", `whatsapp://send?phone=${phone}`);
    document.body.append(link);
    link.click();
    document.body.removeChild(link);
  };
