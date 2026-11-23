const rail = document.querySelector('.tool-window');
const track = rail.querySelector('.tool-track');
const originalList = track.querySelector('ul');
const copy = originalList.cloneNode(true);
copy.setAttribute('aria-hidden', 'true');
track.append(copy);

const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.querySelector('.tool-toggle');
let paused = false;

function updateRail() {
  const moving = !paused && !motion.matches;
  rail.classList.toggle('rolling', moving);
  copy.style.display = moving ? '' : 'none';
  toggle.hidden = motion.matches;
  toggle.title = paused ? 'Play icon animation' : 'Pause icon animation';
  toggle.setAttribute('aria-label', toggle.title);
  toggle.firstElementChild.className = paused ? 'bi bi-play-fill' : 'bi bi-pause-fill';
}
toggle.addEventListener('click', () => {
  paused = !paused;
  updateRail();
});
motion.addEventListener('change', updateRail);
updateRail();

document.querySelectorAll('.project-preview').forEach(preview => {
  const button = preview.querySelector('button');
  const summary = preview.querySelector('.project-summary');
  function show(open) {
    summary.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    button.firstElementChild.className = open ? 'bi bi-x-lg' : 'bi bi-info-circle';
    if (open) summary.scrollTop = 0;
  }
  preview.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') show(true);
  });
  preview.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') show(false);
  });
  preview.addEventListener('click', () => show(summary.hidden));
  preview.addEventListener('focusout', () => show(false));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') show(false);
  });
});


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
      localStorage.setItem('theme', 'light');

    }
  });
});

document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const fields = new FormData(this);
  const subject = 'Portfolio enquiry from ' + fields.get('name');
  const body = [
    fields.get('message'), '', fields.get('name'), fields.get('email'), fields.get('phone')
  ].filter(value => value !== null).join('\r\n');
  const recipient = document.querySelector('.contact-link[href^="mailto:"]').href;
  window.location.href = recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});
