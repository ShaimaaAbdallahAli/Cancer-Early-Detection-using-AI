document.getElementById("Form").onsubmit = function() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var error_message = document.getElementById("passwordError");

    if (password != confirm_password) {
        error_message.style.display = "block";
        return false;
    } else {
        error_message.style.display = "none";
        return true;
    }
};