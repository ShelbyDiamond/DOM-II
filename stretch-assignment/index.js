const rocket1 = document.querySelector("#block--blue");

rocket1.addEventListener("click", event => {
  rocket1.classList.add("#block--red");
});

rocket1.addEventListener("click", event => {
  rocket1.classList.remove(".block block--blue");
});
