const modalOpen = document.querySelector('.modal-open')
const modalClose = document.querySelector('.modal-close')
const modal = document.querySelector('#modal')

modalOpen.addEventListener('click', () => {
    modal.showModal();
})
modalClose.addEventListener('click', () => {
    modal.close();
})
