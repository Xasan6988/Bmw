const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
  const request = new XMLHttpRequest();
  request.open('POST', server);

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    if (request.status === 200 || request.status === 201) {
      const response = JSON.parse(request.responseText);
      callBack(response.id);
    } else {
      falseCallBack(request.status);
      throw new Error(request.status);
    }
  });

  request.send(data);
};

const formHandler = (form) => {
  const smallElem = document.createElement('small');
  form.append(smallElem);
  let flag = true;
  const btnSubmit = document.querySelector('.button[type="submit"]');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = {};

    for (let elem of form.elements) {
      const {
        name,
        value
      } = elem;
      if (name) {
        if (value.trim()) {
          data[name] = value.trim();
          flag = true;
          elem.style.border = 'none';
        } else {
          elem.style.border = '1px solid red';
          flag = false;
          elem.value = '';
        }
      }
    }

    if (!flag) {
      return smallElem.textContent = 'Заполните все поля';
    }

    sendData(JSON.stringify(data),
      (id) => {
        smallElem.innerHTML = 'Ваша заявка №' + id + '! <br>В ближайшее время с вами свяжемся!';
        smallElem.style.color = 'green';
        btnSubmit.disabled = true;
        setTimeout(() => {
          smallElem.textContent = '';
          btnSubmit.disabled = false;
        }, 5000);
      },
      (err) => {
        smallElem.innerHTML = 'Ошибка: ' + err;
        smallElem.style.color = 'red';
      });

    form.reset();
  })
};

export default function sendForm() {
  const formElems = document.querySelectorAll('.form');

  formElems.forEach(formHandler);
}
