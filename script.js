// This is a name chenger
const url = window.location.search;
let search = new URLSearchParams(url);
let url_value = search.get("n");
document.querySelector("#name").innerHTML = url_value;

// Animation Effects and Video setup
document.querySelector("video").pause();
function showVideo(){
    document.querySelector("#container_all").style.display="none";
    document.querySelector("#viedo_section").style.display="block";
    document.querySelector("video").play();
}
