const modalOpen = document.querySelector('.modal-open')
const modalClose = document.querySelector('.modal-close1')
const modalClose2 = document.querySelector('.modal-close2')
const modal = document.querySelector('#modal')
const modalContent = document.querySelector('#dialog-wrapper')

modalOpen.addEventListener('click', (event) => {
    modal.showModal();
    modalContent.scrollTop();
})
modalClose.addEventListener('click', () => {
    modal.close();
})
modalClose2.addEventListener('click', () => {
    modal.close();
})

var lightbox = jQuery('.vehicle-image a').simpleLightbox({ /* options */ });