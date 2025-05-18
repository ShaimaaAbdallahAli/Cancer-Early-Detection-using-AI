

function chatinput() {
    var input = document.getElementsByTagName('input');
    var newchat = document.getElementById("newchat");
    // var newp = document.createElement("p");
    newchat.innerHTML += '<div class="right third" > <p data-date="09:59" class="right">' + input[0].value + '</p> </div>';
    input[0].value ='';
}