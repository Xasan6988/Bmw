document.addEventListener('DOMContentLoaded', () => {

  const featureLinkElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');

  for (let i = 0; i < featureLinkElems.length; i++) {
    featureLinkElems[i].addEventListener('click', () => {
      featureLinkElems[i].classList.toggle('feature__link_active');
      featureSubElems[i].classList.toggle('hidden');
    });
  }
});

