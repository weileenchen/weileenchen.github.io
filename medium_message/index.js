let theText = document.querySelector('h1');

let email=document.querySelector(".email");
let tweet=document.querySelector(".tweet");
let text=document.querySelector(".text");

function emailFunc(){
    document.getElementById('myImage').src="./email.jpg";
}

function tweetFunc() {
    document.getElementById('myImage').src="./tweet.jpg";
}

function textFunc() {
    document.getElementById('myImage').src="./text.jpg";
}

/*
function show_image(src) {
    let changeDisplay = document.querySelector("#display");
    var img = document.createElement("img");
    img.src = src;
    document.getElementById("display").appendChild(img);
}
*/