export default function tabs() {
  const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
  const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
  const tabsTitles = document.querySelectorAll('.design__title');

  for (let elem of tabsHandlerElems) {
    elem.addEventListener('click', function () {
      tabsHandlerElems.forEach(item => {
        if (elem === item) {
          item.classList.add('design-list__item_active');
        } else {
          item.classList.remove('design-list__item_active');
        }
      });

      tabsFieldElems.forEach(item => {
        if (item.dataset.tabsField === elem.dataset.tabsHandler) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        };
      });

      tabsTitles.forEach(item => {
        if (item.dataset.title !== elem.dataset.tabsHandler) {
          item.classList.add('hidden');
        } else {
          item.classList.remove('hidden');
        }
      });
    });
  }
}
