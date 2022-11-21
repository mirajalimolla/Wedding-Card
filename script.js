// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
//   audio.play();

// This is a name chenger
const url = window.location.search;
let search = new URLSearchParams(url);
let url_value = search.get("name");
document.querySelector("#name").innerHTML = url_value;

// Video slider
let video = document.querySelector(".video");
let container = document.querySelector(".container");
function slide(){
    video.classList.add("slider_video");
    container.classList.add("container_hide");
}
