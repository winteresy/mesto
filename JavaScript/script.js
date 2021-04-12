const popupProf = document.querySelector('.popup_profile');
const popupPic = document.querySelector('.popup_picture');
const popupPhoto = document.querySelector('.popup_photo');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseProf = document.querySelector('.popup__close-icon_profile');
const buttonClosePic = document.querySelector('.popup__close-icon_picture');
const buttonClosePhoto = document.querySelector('.popup__close-icon_photo');
const buttonSave = document.querySelector('.popup__submit-button');
const formElementProf = document.querySelector('.popup__input_profile');
const formElementPic = document.querySelector('.popup__input_picture');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__caption');
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_profession');
const placeInput = document.querySelector('.popup__field_type_place-name');
const urlInput = document.querySelector('.popup__field_type_picture');
const popupName = document.querySelector('.popup__photo-name');
const popupPicture = document.querySelector('.popup__photo');
const buttonAdd = document.querySelector('.profile__add-button');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const template = document.querySelector('.template').content.querySelector('.element');
const cardlist = document.querySelector('.elements__grid');


function insertCardItem(item) {
  const card = template.cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');
  cardImage.src = item.link;
  cardTitle.textContent = item.name;

  cardlist.prepend(card);

  const cardButtonLike = document.querySelector('.element__like');
  cardButtonLike.addEventListener('click', () => {
    cardButtonLike.classList.toggle('element__like_active');
  });

  const cardButtonDelete = card.querySelector('.element__delete');
  cardButtonDelete.addEventListener('click', () => {
    card.remove()
  });
};



initialCards.forEach(item => {
  const element = createCard(item);
  cardlist.append(element);
});

function createCard(item) {
  const listItem = template.cloneNode(true);
  const cardImage = listItem.querySelector('.element__image');
  const cardTitle = listItem.querySelector('.element__title');
  cardImage.src = item.link;
  cardTitle.textContent = item.name;

  const cardDelete = listItem.querySelector('.element__delete');
  cardDelete.addEventListener('click', () => listItem.remove());

  const cardLike = listItem.querySelector('.element__like');
  cardLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  });

  const imgClickHandler = (evt) => {
    popupPicture.src = item.link;
    popupName.textContent = item.name;
    openPopupPhoto();
  };

  cardImage.addEventListener('click', imgClickHandler);
  return listItem;
}

const formSubmitHandlerAdd = e => {
  e.preventDefault();
  const item= {name: placeInput.value, link: urlInput.value};
  const element = createCard(item);
  cardlist.prepend(element);
  closePopupPic();
}

function openPopup() {
  popupProf.classList.add('popup_opened');
  nameInput.value = profileName.textContent
  jobInput.value = profileInfo.textContent
}

function closePopup() {
  popupProf.classList.remove('popup_opened');
}

function openPopupPic() {
  popupPic.classList.add('popup_opened');
}

function closePopupPic() {
  popupPic.classList.remove('popup_opened');
}

function openPopupPhoto() {
  popupPhoto.classList.add('popup_opened');
}
function closePopupPhoto() {
  popupPhoto.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileInfo.textContent = jobInput.value
    closePopup();
}


buttonEdit.addEventListener('click', openPopup);
buttonAdd.addEventListener('click', openPopupPic);
buttonCloseProf.addEventListener('click', closePopup);
buttonClosePic.addEventListener('click', closePopupPic);
buttonClosePhoto.addEventListener('click', closePopupPhoto);
formElementProf.addEventListener('submit', formSubmitHandler);
formElementPic.addEventListener('submit', formSubmitHandlerAdd);
