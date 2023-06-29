// ========== Typing Animation ==========

var typed = new Typed(".typing", {
  Strings: ["Full Stack Developer", "Web Designer", "Web Developer", "Electrical Engineer", "Lifelong Learner"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
})


// ========== Show Sidebar ==========

const navMenu = document.getElementById("sidebar"),
    navToggle = document.getElementById("nav_toggle"),
    navClose = document.getElementById("nav_close");


// ---------- Sidebar Show ----------

// Validate If Constant Exists

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show_sidebar")
    })
}


// ---------- Sidebar Hidden ----------

// Validate If Constant Exists

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show_sidebar")
    })
}


// ========== Form Script ==========

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;

  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// ========== Scroll Sections Active Link ==========

// get all sections that have an id defined

const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // get current scroll position

  let scrollY = window.pageYOffset;

  // now we loop through sections to get height, top and ID values for each

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    /* if our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    -- To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active_link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active_link");
    }
  });
}