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
  let rating = evaluateRating();
  let post = "<article class='vorschlagFlex'> <div class='vorschlagHeader'> "
  post += "<h3>" + document.getElementById("stadt").value + "  | " + rating + "</h3> <p>";
  post += (document.getElementById("name").value == "") ? "" : ("Vorschlag von " + document.getElementById("name").value);
  post += (document.getElementById("datum").value == "") ? "" : (" am " + document.getElementById("datum").value);
  post += "</p> </div>" + document.getElementById("beschreibung").value + "</article>";
  if (document.getElementById("nutzervorschlaege").innerHTML == "Noch keine Vorschläge") {
    document.getElementById("nutzervorschlaege").innerHTML = post;
  } else {
    document.getElementById("nutzervorschlaege").innerHTML += post;
  }
}

function evaluateRating() {
  let rating;
  if (document.getElementById("1stern").checked) {
    rating = "⭐"
  } else if (document.getElementById("2sterne").checked) {
    rating = "⭐⭐"
  } else if (document.getElementById("3sterne").checked) {
    rating = "⭐⭐⭐"
  } else if (document.getElementById("4sterne").checked) {
    rating = "⭐⭐⭐⭐"
  } else if (document.getElementById("5sterne").checked) {
    rating = "⭐⭐⭐⭐⭐"
  }
  return rating;
}

function changeFontSize(val) {
  let paragraphs = document.getElementsByClassName("changable");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = val + "px";
  }
}


function changeTheme(theme) {
  let background;
  let text;
  let border;
  let tiles;
  switch (theme) {
    case "light":
      background = "#cccbd4ff";
      text = "#000000";
      border = "#000000";
      tiles = "#807f8aff";
      document.documentElement.style.setProperty('--color1', '#111fa1ff');
      document.documentElement.style.setProperty('--color2', '#ffffffff');
      document.documentElement.style.setProperty('--color3', '#807f8aff');
      break;
    case "dark":
      background = "#041644";
      text = "white";
      border = "#ffffffff";
      tiles = "#041644";
      document.documentElement.style.setProperty('--color1', 'cyan');
      document.documentElement.style.setProperty('--color2', 'black');
      document.documentElement.style.setProperty('--color3', '#020522');
      break;
    default:
      break;
  }
  let boxes = document.getElementsByClassName("leftBox");
  let sidebar = document.getElementsByClassName("sidebar");
  let leftFlexBoxes = document.getElementsByClassName("leftBoxFlex");
  let navCats = document.getElementsByClassName("navCat");
  let flexItems = document.getElementsByClassName("flexItem");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = background;
    boxes[i].style.color = text;
  }
  for (let i = 0; i < sidebar.length; i++) {
    sidebar[i].style.backgroundColor = background;
    sidebar[i].style.color = text;
  }
  for (let i = 0; i < leftFlexBoxes.length; i++) {
    leftFlexBoxes[i].style.backgroundColor = background;
    leftFlexBoxes[i].style.color = text;
  }
  for (let i = 0; i < navCats.length; i++) {
    navCats[i].style.borderColor = border;
    navCats[i].style.color = text;
  }
  for (let i = 0; i < flexItems.length; i++) {
    flexItems[i].style.backgroundColor = tiles;
    flexItems[i].style.borderColor = border;
  }
  document.body.style.color = text;
  document.body.style.backgroundColor = background;
}