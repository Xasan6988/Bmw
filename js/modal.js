document.addEventListener('DOMContentLoaded', () => {
  const moreElems = document.querySelectorAll('.more');
  const modalElem = document.querySelector('.modal');

  const openModal = () => {
    modalElem.classList.remove('hidden');
  };

  const closeModal = () => {
    modalElem.classList.add('hidden');
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
});
