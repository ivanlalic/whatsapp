function createWhatsAppLink(){
    url = 'https://api.whatsapp.com/send?phone={tel}&text={message}&source=&data=&app_absent=';
    var tel = document.getElementById('cellphoneNumber').value;
    var message = document.getElementById('messageBox').value;
    url = url.replace('{tel}', tel).replace('{message}', message);
    document.getElementById('sendButton').href = url;
}

function updatelink () {
    createWhatsAppLink()
};

