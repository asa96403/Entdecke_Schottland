let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

let slideIndex2 = 1;
showSlides2nd(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2nd(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2nd(slideIndex2 = n);
}

function showSlides2nd(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
} 

function vorschlagEinsenden() {
    let name = document.getElementById("name").value;
    let stadt = document.getElementById("stadt").value;
    let beschreibung = document.getElementById("beschreibung").value;
    let datum = document.getElementById("datum").value;
    document.getElementById("nutzervorschlaege").innerHTML += `
        <div class="articleFlex">
            <h4>${name} - ${stadt}</h4>
            <p>${beschreibung}</p>
            <p><i>Vorgeschlagen am: ${datum}</i></p>
        </div>
    `;
}