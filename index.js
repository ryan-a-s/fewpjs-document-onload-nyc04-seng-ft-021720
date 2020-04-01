// Your code goes here

function changeText() {
    let textArea = document.getElementById("text");
    textArea.textContent = "This is really cool!";
}

document.addEventListener("DOMContentLoaded", function() {
    changeText();
}
);