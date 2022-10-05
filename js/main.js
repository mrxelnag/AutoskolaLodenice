const modalOpen = document.querySelector('.modal-open')
const modalClose = document.querySelector('.modal-close1')
const modalClose2 = document.querySelector('.modal-close2')
const modal = document.querySelector('#modal')

modalOpen.addEventListener('click', (event) => {
    modal.showModal();
})
modalClose.addEventListener('click', () => {
    modal.close();
})
modalClose2.addEventListener('click', () => {
    modal.close();
})