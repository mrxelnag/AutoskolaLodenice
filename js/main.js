const modalOpen = document.querySelector('.modal-open')
const modalClose = document.querySelector('.modal-close1')
const modalClose2 = document.querySelector('.modal-close2')
const modal = document.querySelector('#modal')
const dialogWrapper = document.querySelector('#dialog-wrapper')

modalOpen.addEventListener('click', (event) => {
    modal.showModal();

    setTimeout(function () {
        $('#dialog-wrapper').removeClass("scroll-snap-start");
    }, 1000);

    modal.scrollTop = 0;
})
modalClose.addEventListener('click', () => {
    modal.close();
    dialogWrapper.classList.add('scroll-snap-start')
})
modalClose2.addEventListener('click', () => {
    modal.close();
    dialogWrapper.classList.add('scroll-snap-start')
})
var lightbox = jQuery('.vehicle-image a').simpleLightbox({ /* options */ });