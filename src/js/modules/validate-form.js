export function validateForm() {
  const forms = document.querySelectorAll('form');

  validateForm = (form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formInputs = form.querySelectorAll('input')

      for (var i = 0; i < formInputs.length; i++) {
        if (formInputs[i].type == "tel") {
          console.log(formInputs[i].value);
          if (!formInputs[i].value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
            formInputs[i].setCustomValidity("Введите верный номер телефона");
          }
        }
      }
    })
  }

  forms.forEach(form => {
    validateForm(form)
  });
}
