import "@scss/styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    // Customize arrows
    prevArrow: '<i class="fas fa-chevron-left arrow prev-arrow">',
    nextArrow: '<i class="fas fa-chevron-right arrow next-arrow">',
  });

// Global variables  
const sendBtn = document.getElementById("send-btn");
const warningMsg = document.getElementById('warning');

function detectResize() {
  // Equalize slide and effect width
  const slide = document.querySelector('.slick-slide');
  let slideWidth = slide.offsetWidth;
  document.getElementById('slider-effect').style.width = slideWidth + "px";
  document.getElementById('slider-effect').style.height = slideWidth + "px";
}

detectResize();

window.onresize = detectResize;


// Show warning message
sendBtn.onclick = function () {
    let checked_choice = document.querySelector('input[name = "choice"]:checked');
    if (checked_choice === null) {
        warningMsg.style.visibility = "visible";
    } else {
        warningMsg.style.visibility = "hidden";
    }
}

// Add active class to each option
var options = document.querySelectorAll('label');
options.forEach(option => {
    option.addEventListener('click', function () {
        options.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})



