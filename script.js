const input = document.getElementById("input")
const content = document.getElementById("content");
const container = document.getElementById("container");
const audio = document.getElementById("audio");
const myH1 = document.getElementById("myH1")

function sign(){
  container.style.display = "none"
  content.style.display = "block"
  audio.play();
  myH1.textContent = `Hello, ${input.value}`
}