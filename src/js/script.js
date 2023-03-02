const buttonTrailer = document.querySelector(".button-trailer");
const modal = document.querySelector(".modal");
const buttonModal = document.querySelector(".button-modal");
const modalVideo = document.querySelector(".modal-video");
const srcModalVideo = modalVideo.src;

function alternarModal () {
    modal.classList.toggle("open");
}

buttonTrailer.addEventListener("click", () => {
    alternarModal();
    modalVideo.setAttribute("src", srcModalVideo);
})

buttonModal.addEventListener("click", () => {
    alternarModal();
    modalVideo.setAttribute("src", "");
})

