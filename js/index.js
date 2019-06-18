// Your code goes here

// --------------- Changes the fun bus in the Nav to saying Princess Trolling: ---------------
const funBus = document.querySelector(".logo-heading");

funBus.addEventListener("click", event => {
  funBus.textContent = `Shelby's Princess Website`;
});

// ------------------ Changes all h2 tags to troll if you click on them: ---------------
const h2Tag = document.querySelectorAll(".container h2");
h2Tag.forEach(h2 => {
  h2.addEventListener("click", cv => {
    h2Tag.forEach(cv => {
      cv.textContent = `Princess Trolling`;
    });
  });
});
console.log(h2Tag);
//
//--------------- Button: ---------------
let hide = document.querySelectorAll(".btn");
hide.forEach(cv => {
  cv.addEventListener("mouseenter", function() {
    this.style.visibility = "hidden";
  });
});
//--------------- COPY: ---------------
let hahaha = document.querySelectorAll("p");
hahaha.forEach(cv => {
  cv.addEventListener("copy", function() {
    hahaha.forEach(cv => {
      cv.textContent = "HAHAHA SUCKER!";
      cv.style.color = "blue";
    });
  });
});

//----------- Mouseover: -----

let content = document.querySelector(".text-content");
content.addEventListener(
  "mouseover",
  function(event) {
    event.target.style.color = "purple";
    setTimeout(function() {
      event.target.style.color = "";
    }, 1000);
  },
  false
);
