import "../styles/style.css";

const copyright = document.getElementById("copyright");
const menuToggel = document.getElementById("menu-toggle");
const mainMenuContainer = document.getElementById("main-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const closePopupIcon = document.getElementById("close-popup-icon");
const popup = document.getElementById("popup");
const popupContent = popup?.querySelector(".popup__content");
const ticketButtons = document.querySelectorAll(".button-popup");

copyright.textContent = new Date().getFullYear();

function syncMenuState() {
  const isOpen = mainMenuContainer.classList.contains("active");
  document.body.style.overflow = isOpen ? "hidden" : "";
  menuIcon.classList.toggle("hidden", isOpen);
  closeIcon.classList.toggle("hidden", !isOpen);
}

menuToggel.addEventListener("click", () => {
  mainMenuContainer.classList.toggle("active");
  syncMenuState();
});

mainMenuContainer.addEventListener("click", (event) => {
  const link = event.target.closest("a");

  if (link) {
    mainMenuContainer.classList.remove("active");
    syncMenuState();
  }
});

function openPopup() {
  popup.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closePopup() {
  popup.classList.add("hidden");
  syncMenuState();
}

ticketButtons.forEach((button) => {
  button.addEventListener("click", openPopup);
});

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopup();
  }
});

closePopupIcon.addEventListener("click", closePopup);

popupContent.addEventListener("click", (event) => {
  event.stopPropagation();
});
