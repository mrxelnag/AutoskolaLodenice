const modalOpen = document.querySelector('.modal-open')
const modalClose = document.querySelector('.modal-close1')
const modalClose2 = document.querySelector('.modal-close2')
const modal = document.querySelector('#modal')
const dialogWrapper = document.querySelector('#dialog-wrapper')

modalOpen.addEventListener('click', (event) => {
    modal.classList.add('dialog-open');
})
modalClose.addEventListener('click', () => {
    modal.classList.remove('dialog-open');  
})
modalClose2.addEventListener('click', () => {
    modal.classList.remove('dialog-open');  
})
var lightbox = jQuery('.vehicle-image a').simpleLightbox({ /* options */ });