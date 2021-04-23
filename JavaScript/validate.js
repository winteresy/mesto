const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll('form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

const showInputError = (config, formInput, errorMessage, errorClass, inputErrorClass) => {
  const errorElement = document.querySelector(`.${formInput.id}-error`);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = errorMessage;
  formInput.classList.add(config.inputErrorClass);
};
const hideInputError = (config, formInput, errorClass, inputErrorClass) => {
  const errorElement = document.querySelector(`.${formInput.id}-error`);
  errorElement.classList.remove(config.errorClass);
  formInput.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
};
const checkInputValidity = (config, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(config, formInput, formInput.validationMessage);
  } else {
    hideInputError(config, formInput);
  }
};
const setEventListeners = (form, config, formInput) => {
  const inputList = Array.from(form.querySelectorAll(config.formInput));
  const submitButton = form.querySelector(config.submitButton);
  toggleButtonState(config, inputList, submitButton);
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', function () {
      checkInputValidity(config, formInput);
      toggleButtonState(config, inputList, submitButton);
    });
  });
};
const hasInvalidInput = (config, inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
}
const toggleButtonState = (config, inputList, submitButton, inactiveButtonClass) => {
  if (hasInvalidInput(config, inputList)) {
    submitButton.classList.add(config.inactiveButtonClass);
  } else {
    submitButton.classList.remove(config.inactiveButtonClass);
  }
};
enableValidation({
  form: '.popup__input',
  formInput: '.popup__field',
  submitButton: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__input-error_active'
});
