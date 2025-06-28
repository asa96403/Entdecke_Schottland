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
  if (n > slides.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}

function vorschlagEinsenden() {
  if (document.getElementById("stadt").value == "") {
    alert("Sie müssen eine Stadt eingeben!");
    return;
  }
  if (document.getElementById("beschreibung").value == "") {
    alert("Sie müssen eine Beschreibung eingeben!");
    return;
  }
  let post = "<article class='vorschlagFlex'> <div class='vorschlagHeader'> "
  post += "<h3>" + document.getElementById("stadt").value + "</h3> <p>";
  post += (document.getElementById("name").value == "") ? "" : ("Vorschlag von " + document.getElementById("name").value);
  post += (document.getElementById("datum").value == "") ? "" : (" am " + document.getElementById("datum").value);
  post += "</p> </div>"  + document.getElementById("beschreibung").value  + "</article>";
  document.getElementById("nutzervorschlaege").innerHTML += post;
}