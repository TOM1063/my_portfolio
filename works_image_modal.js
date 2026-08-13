const workImages = document.querySelectorAll(".work-container img");

const imageModal = document.createElement("div");
imageModal.className = "works-image-modal";
imageModal.setAttribute("role", "dialog");
imageModal.setAttribute("aria-modal", "true");
imageModal.setAttribute("aria-label", "Expanded work image");
imageModal.innerHTML =
  '<button class="works-image-modal-close" type="button" aria-label="Close image">×</button><img alt="">';
document.body.appendChild(imageModal);

const modalImage = imageModal.querySelector("img");
const closeButton = imageModal.querySelector("button");
let previousOverflow = "";

function closeImageModal() {
  imageModal.classList.remove("is-open");
  document.body.style.overflow = previousOverflow;
}

function openImageModal(image) {
  previousOverflow = document.body.style.overflow;
  modalImage.src = image.currentSrc || image.src;
  modalImage.alt = image.alt;
  imageModal.classList.add("is-open");
  document.body.style.overflow = "hidden";
  closeButton.focus();
}

workImages.forEach((image) => {
  image.classList.add("work-image-zoomable");
  image.setAttribute("tabindex", "0");
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", "Expand image");

  image.addEventListener("click", () => openImageModal(image));
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImageModal(image);
    }
  });
});

closeButton.addEventListener("click", closeImageModal);
imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) closeImageModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageModal.classList.contains("is-open")) {
    closeImageModal();
  }
});
