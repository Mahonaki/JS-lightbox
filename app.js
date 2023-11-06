// select lightbox_btn,lightbox_overlay,close_btn
// listen for click events on lightbox_btn and close_btn
// when user clicks lightbox_btn add .open-modal to lightbox_overlay
// when user clicks close_btn remove .open-modal from lightbox_overlay

const lightboxBtn = document.querySelector('.lightbox_btn');
const lightboxOverlay = document.querySelector('.lightbox_overlay');
const closeBtn = document.querySelector('.close_btn');

lightboxBtn.addEventListener('click', function() {
    lightboxOverlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', function() {
    lightboxOverlay.classList.remove('open-modal');
});

