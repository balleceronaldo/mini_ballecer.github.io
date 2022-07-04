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

document.addEventListener("click", function(event){
  if(event.target.closest(".burger-menu") || document.body.clientWidth > 500) return//do nothing
  document.querySelector('.sidebar').style.display='none'; /* to close when clicked outside navbar area */
})

