const openModal = document.getElementById("btn-open-modal");
const backdrop = document.getElementById("backdrop");
const closeModal = document.getElementById("modal-close-btn");

openModal.addEventListener("click", onOpenModal);
closeModal.addEventListener("click", onCloseModal);
backdrop.addEventListener("click", onBackdropClick)

function onOpenModal() {
  window.addEventListener("keydown", onEscapePress);
  backdrop.classList.add("active");
}

function onCloseModal() {
      window.removeEventListener("keydown", onEscapePress);
  backdrop.classList.remove("active");
}

function onEscapePress(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    onCloseModal();
  }
}

function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onCloseModal()
    }
}
