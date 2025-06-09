const openBtn = document.getElementById('open-modal-btn')
const backdrop = document.getElementById('backdrop')

openBtn.addEventListener('click', openModal);

function openModal() {
 backdrop.classList.add('active');
}



