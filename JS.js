
$(function () {
  var socialicon = $(".social-icon").hide()
  $("button#contact-btn").on("click mouseup", function () {
    socialicon = $(".social-icon").show()
  });
  const button = document.getElementById('contact-btn');
  const notrbtn = document.getElementById("notrbtn");
  function changStyle() {
    let isActive = false;
    setInterval(() => {
      if (isActive) {
        button.style.borderColor = '#007BFF';
        notrbtn.style.backgroundColor = "#ad9913";
        isActive = false;
      } else {
        button.style.borderColor = '#FF5733';
        notrbtn.style.backgroundColor = "#8e9caf";

        isActive = true;
      }
    }, 5000);
  }
  changStyle();
});

// /////////////////طريقة العرض 
const conatinermain = document.querySelectorAll('.conatinermain');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

conatinermain.forEach(post => {
  observer.observe(post);
});



////////////////// form

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function closeForm() {
  document.getElementById('id01').style.display = 'block';
}

/////////////////////طريقة عرض محتوى نبذة عني



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

let listItem = document.getElementById("edcuation");
listItem.addEventListener("click", function () {
  scroll({
    behavior: "smooth"
  })

})



