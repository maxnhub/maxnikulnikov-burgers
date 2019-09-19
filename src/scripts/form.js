const myForm = document.querySelector('#delievery');
const orderButton = document.querySelector('#orderButton');

orderButton.addEventListener('click', event => {
  event.preventDefault();

  if (validateForm(myForm)) {
    const data = {
      name: myForm.elements.name.value,
      phone: myForm.elements.phone.value,
      comment: myForm.elements.delievery.value,
      to: 'test@mail.ru',
    };
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(JSON.stringify(data));
    xhr.addEventListener('load', () => {
      if (xhr.response.statusText <= 200) {
        let title = 'Ответ от сервера';
        let text = 'Данные получены';
        renderPopup(title, text);
      } else {
        let title = 'Ответ от сервера';
        let text = 'Ошибка сервера';
        renderPopup(title, text);
      }
    })
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.delievery)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}
