var loginLink = document.querySelector(".write__us-js");
var popupLogin = document.querySelector(".modal-send");
var popupClose = popupLogin.querySelector(".modal-close");
var formLogin = popupLogin.querySelector("form");

var login = popupLogin.querySelector("[name=name]");
var email= popupLogin.querySelector("[name=email]");
var text = popupLogin.querySelector("[name=msg]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.remove("modal-show");
  popupLogin.classList.remove("modal-error");
});

formLogin.addEventListener("submit", function (evt) {
  if(!login.value || !password.value) {
    evt.preventDefault();
    popupLogin.classList.remove("modal-error");
    popupLogin.offsetWidth = popupLogin.offsetWidth;
    popupLogin.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupLogin.classList.contains("modal-show")) {
      popupLogin.classList.remove("modal-show");
      popupLogin.classList.remove("modal-error");
    }
  }
});
