// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// Java progress circular bar 
let JavaProgress = document.querySelector(".Java"),
  JavaValue = document.querySelector(".Java-progress");

let JavaStartValue = 0,
  JavaEndValue = 70,
  Javaspeed = 30;

let progressJava = setInterval(() => {
  JavaStartValue++;

  JavaValue.textContent = `${JavaStartValue}%`;
  JavaProgress.style.background = `conic-gradient(#20c997 ${
    JavaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (JavaStartValue == JavaEndValue) {
    clearInterval(progressJava);
  }
}, Javaspeed);

// C progress circular bar 
let CProgress = document.querySelector(".C"),
  CValue = document.querySelector(".C-progress");

let CStartValue = 0,
  CEndValue = 65,
  rjsspeed = 30;

let progressC = setInterval(() => {
  CStartValue++;

  CValue.textContent = `${CStartValue}%`;
  CProgress.style.background = `conic-gradient(#3f396d ${
    CStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (CStartValue == CEndValue) {
    clearInterval(progressC);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// sticky navbar 
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

 // Dark mode
document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  const themeText = themeToggle.querySelector('span');
  
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.classList.add('dark-active');
    themeIcon.classList.remove('bi-moon-fill');
    themeIcon.classList.add('bi-sun-fill');
  }
  
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
      themeToggle.classList.add('dark-active');
      themeIcon.classList.remove('bi-moon-fill');
      themeIcon.classList.add('bi-sun-fill');
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.classList.remove('dark-active');
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-fill');
      themeText.textContent = 'Dark Mode';

    }
  });
});
