let btn = document.querySelector('.menu-button');
let menu = document.querySelector('nav');
const images = document.querySelector('.image');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}

images.addEventListener('click', openModal);

function openModal(e){
    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    modalImage.setAttribute('src', src);
    modalImage.setAttribute('alt', alt);

    modal.showModal();
}
closeButton.addEventListener('click', () => {modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
