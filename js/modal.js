const openBtn = document.querySelector('#open-modal-btn')
const backdrop = document.querySelector('#backdrop')
const closeBtn = document.querySelector('#close-modal-btn')

openBtn.addEventListener('click', toggleModal)
closeBtn.addEventListener('click', toggleModal)

function toggleModal() {
    backdrop.classList.toggle('active')

}

// modalForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.dir(event.currentTarget.elements.value);
// })

// modalInput.addEventListener('focus', ()=> {
//     console.log('focus made');
// })

// modalInput.addEventListener('blur', ()=> {
//     console.log('blur made');
// })

// const modalForm = document.querySelector('.modal__form')
// const modalInput= document.querySelector('js-input')