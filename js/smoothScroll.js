function smoothScroll() {
	const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

  for (let elem of smothScrollElems) {
    elem.addEventListener('click', function(event) {
			event.preventDefault();
			const id = elem.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
  }
}

export default smoothScroll;
