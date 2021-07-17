/*!
* Start Bootstrap - Coming Soon v5.1.0 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function submitRequest() {
    const InputTextBox = document.getElementById("emailid");
    mootrack('identify', InputTextBox.value, 'keysparks');
    const button = document.getElementById('submit-button');
    const thanksDiv = document.getElementById('thanksMessage');
    disableButton = true;
    if (disableButton) {
        button.disabled = "disabled";
        button.innerText = "Subscribed!";
        InputTextBox.value = "";
        thanksDiv.style = "display: block"
    } else { button.disabled = false; thanksDiv.style = "display: none" };
};