

function chatinput() {
    var input = document.getElementsByTagName('input');
    var newchat = document.getElementById("newchat");
    // var newp = document.createElement("p");
    newchat.innerHTML += '<div class="left third" > <p data-date="09:51" >' + input[0].value + '</p> </div>';
    input[0].value ='';
}