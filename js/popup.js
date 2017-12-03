// Popup form variables
var link = document.querySelector(".user-block__login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content .modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

// Popup map variables
var mapOpen = document.querySelector(".js-map-link");
var map = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".modal-content-map .modal-content-close");

//Popup overlay
var overlay = document.querySelector(".modal-overlay");

//Popup form show
link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup.classList.add("modal-content-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

//Popup form close
close.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

//Popup form submit error
form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login" , login.value);
    popup.classList.remove("modal-error");
  }
});

//Map show
mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  map.classList.add("modal-content-map-show");
});

//Map close
mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-overlay-show");
  map.classList.remove("modal-content-map-show");
});

//Close all popups by overlay click
overlay.addEventListener("click", function(event) {
  if (overlay.classList.contains("modal-overlay-show") && (popup.classList.contains("modal-content-show") || map.classList.contains("modal-content-map-show"))) {
    overlay.classList.remove("modal-overlay-show");
    map.classList.remove("modal-content-map-show");
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  }
});

//Close all popups by esc
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show") || map.classList.contains("modal-content-map-show")) {
      overlay.classList.remove("modal-overlay-show");
      map.classList.remove("modal-content-map-show");
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
