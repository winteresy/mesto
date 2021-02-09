const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = popup.querySelector('.popup__close-icon');
const buttonSave = document.querySelector('.popup__save');
const formElement = document.querySelector('.popup__input');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__caption');
const nameInput = document.querySelector('.popup__field_name');
const jobInput = document.querySelector('.popup__field_profession');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent
  jobInput.value = profileInfo.textContent
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileInfo.textContent = jobInput.value
    popup.classList.remove('popup_opened');
}


buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
buttonSave.addEventListener('click', closePopup);
