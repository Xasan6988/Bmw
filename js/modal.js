import blockScrolled from './blockScrolled.js';

const {disableScroll, enableScroll} = blockScrolled;

export default function modal() {
  const modalElem = document.querySelector('.modal');
  const moreElems = document.querySelectorAll('.more');

  const openModal = () => {
    modalElem.classList.remove('hidden');
    disableScroll();
  };

  const closeModal = () => {
    modalElem.classList.add('hidden');
    enableScroll();
  };

  moreElems.forEach((item) => {
    item.addEventListener('click', openModal);
  })

  modalElem.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
      closeModal();
    }
  });

}
