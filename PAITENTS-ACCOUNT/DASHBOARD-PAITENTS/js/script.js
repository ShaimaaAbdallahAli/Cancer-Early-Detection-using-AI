
var header =  document.getElementsByTagName("header");
var main = document.getElementsByTagName("main");
var logout = document.getElementsByClassName("log-out-pop");
function showlogout() {
    logout[0].style.display="block";
    header[0].style.opacity="0.3";
    main[0].style.opacity="0.3";
}

function unshowlogout() {
    logout[0].style.display="none";
    header[0].style.opacity="1";
    main[0].style.opacity="1";
}

function gotopg() {
   window.location.href = "../../LOGING-IN/LOG-IN/index.html"
}

function profile() { 
    var url ="../PAITENT-PROFILE/index.html"
    window.location  = url 
}
function settings() {
    var url ="../SETTINGS-DOCTOR/settings.html"
    window.location  = url
}
function help() { 
    var url ="../HELP/index.html"
    window.location  = url
}
