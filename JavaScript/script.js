let popup = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__edit-button');
let buttonClose = popup.querySelector('.popup__close-icon');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);

const formElement = document.querySelector('.popup__input');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__caption');
let nameInput = document.querySelector('.popup__field_name');
let jobInput = document.querySelector('.popup__field_profession');

function formSubmitHandler (evt) {
    evt.preventDefault();
    addPlaceholder();
    popup.classList.remove('popup_opened');
}
function addPlaceholder() {
  profileName.textContent = nameInput.value
  profileInfo.textContent = jobInput.value
}

formElement.addEventListener('submit', formSubmitHandler);

let likeActive = document.querySelector('.element__like');

function like() {
  likeActive.classList.add('element__like_active');
}

function disLike() {
  likeActive.classList.remove('element__like_active');
}

likeActive.addEventListener('click', like);
