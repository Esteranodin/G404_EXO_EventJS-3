const div = document.querySelector("main > div");

div.addEventListener("click", handleClickOnDiv);

function handleClickOnDiv(event) {
  if (event.target.classList.contains("border-black")) {
    event.target.classList.remove("border-black");
    event.target.classList.add("border-red");
  } else {
    event.target.classList.add("border-black");
    event.target.classList.remove("border-red");
  }
}