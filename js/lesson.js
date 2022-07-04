window.addEventListener("resize", () => {
  if(document.body.clientWidth > 500){
    document.querySelector('.sidebar').style.display='block'; 
  }
});

window.addEventListener("scroll", () => {
  if(document.body.clientWidth > 500){
    document.querySelector('.sidebar').style.display='block'; 
  }
});

window.addEventListener("resize", () => {
  if(document.body.clientWidth <= 500){
    document.querySelector('.sidebar').style.display='none'; 
  }
});

window.addEventListener("scroll", () => {
  if(document.body.clientWidth <= 500){
    document.querySelector('.sidebar').style.display='none'; 
  }
});

function myFunction2() {
  var x = document.querySelector(".sidebar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const grandparent = document.getElementById("grandpa-id");

grandparent.style.backgroundColor = "#333";


document.addEventListener("click", function(event){
  if(event.target.closest(".burger-menu") || document.body.clientWidth > 500) return//do nothing
  document.querySelector('.sidebar').style.display='none'; /* to close when clicked outside navbar area */
})


const parents = Array.from(document.getElementsByClassName("parent"));

parents.forEach(changeColor);

function changeColor(element) {
  element.style.backgroundColor = "#333"
}

const grandparent2 = 
document.querySelector("#grandpa-id2");

changeColor(grandparent2);

function changeColor(element) {
  element.style.backgroundColor = "#333"
};

const grandparent3 = 
document.querySelector(".grandparent1");

changeColor(grandparent3)

function changeColor(element) {
  element.style.backgroundColor = "#333"
};

const parent3 = 
document.querySelector(".parent2");

changeColor3(parent3)

function changeColor3(element) {
  element.style.backgroundColor = "red"
};

const parent4 = 
document.querySelectorAll(".parent3");

parent4.forEach(changeColor4);

function changeColor4(element) {
element.style.backgroundColor = "navy"
};