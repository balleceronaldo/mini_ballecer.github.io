function myFunction() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

/* arrow functions window object resize */

window.addEventListener("resize", () => {
  if(document.body.clientWidth > 1160){
    document.getElementById('navLinks').style.display='flex'; 
    burger.classList.remove('active');
    navbar.classList.remove('active'); 
  }
});

window.addEventListener("scroll", () => {
  if(document.body.clientWidth > 1160){
    document.getElementById('navLinks').style.display='flex'; 
    burger.classList.remove('active');
    navbar.classList.remove('active'); 
  }
});

window.addEventListener("resize", () => {
  if(document.body.clientWidth <= 1160){
    document.getElementById('navLinks').style.display='none'; 
    burger.classList.remove('active');
    navbar.classList.remove('active'); 
  }
});

window.addEventListener("scroll", () => {
  if(document.body.clientWidth <= 1160){
    document.getElementById('navLinks').style.display='none'; 
    burger.classList.remove('active');
    navbar.classList.remove('active'); 
  }
});


const navbar = document.getElementById('navBar');
const burger = document.getElementById('burger');

burger.onclick = function(){
  burger.classList.toggle('active');
  navbar.classList.toggle('active'); /* to remove box-shadow in mobile nav*/
}

document.addEventListener("click", function(event){
  if(event.target.closest(".navbar") || document.body.clientWidth > 1160) return
  document.getElementById('navLinks').style.display='none'; /* to close when clicked outside navbar area */
  burger.classList.remove('active'); /* to add shadow in closed nav */
  navbar.classList.remove('active');  /* to add shadow in closed nav */
      
})

// dropdown using arrow functions

document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

  let currentDropdown
  if(isDropdownButton){
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if(dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  })
})


