// Your code goes here

// --------------- Changes the fun bus in the Nav to saying Princess Trolling: ---------------
const funBus = document.querySelector(".logo-heading");

funBus.addEventListener("click", event => {
  funBus.textContent = `Shelby's Princess Website`;
});

// ------------------ Changes all h2 tags to troll if you click on them: ---------------
const h2Tag = document.querySelectorAll(".container h2");
h2Tag.forEach(h2 => {
  h2.addEventListener("click", event => {
    h2.textContent = `Princess Trolling`;
  });
});
console.log(h2Tag);
//
//--------------- NAV BAR: ---------------
let hide = document.querySelector(".btn");
hide.addEventListener("mouseenter", function() {
  this.style.visibility = "hidden";
});
