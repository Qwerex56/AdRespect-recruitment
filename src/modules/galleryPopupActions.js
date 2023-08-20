const gallery = document.querySelector('.msr-grid');
const galleryLen = document.querySelector('.msr-grid').childElementCount - 2 // minus 2 is for grid sizer and grid gutter elements

const galleryPopup = document.querySelector('#gallery-popup');
const galleryNext = galleryPopup.querySelector('#popup-next');
const galleryPrev = galleryPopup.querySelector('#popup-prev');
const galleryClose = galleryPopup.querySelector('#popup-close');
const galleryImg = galleryPopup.querySelector('#popup-image');
const galleryDescription = galleryPopup.querySelector('#image-description');

galleryClose.addEventListener('click', () => {
  galleryPopup.classList.add('hidden');
});

galleryNext.addEventListener('click', () => {
  const activeImgId = parseInt(galleryPopup.dataset.imgId);
  const nextImgId = activeImgId + 1;

  const galleryItem = gallery.querySelectorAll('.msr-item').item(nextImgId);

  if (galleryItem === null) {
    return;
  }

  galleryImg.src = galleryItem.src;
  galleryPopup.dataset.imgId = nextImgId;
  galleryDescription.innerHTML = (nextImgId + 1).toString().concat(' / ').concat(gallery.childElementCount - 2);
});

galleryPrev.addEventListener('click', () => {
  const activeImgId = parseInt(galleryPopup.dataset.imgId);
  const nextImgId = activeImgId - 1;

  const galleryItem = gallery.querySelectorAll('.msr-item').item(nextImgId);

  if (galleryItem === null) {
    return;
  }

  galleryImg.src = galleryItem.src;
  galleryPopup.dataset.imgId = nextImgId;
  galleryDescription.innerHTML = (nextImgId + 1).toString().concat(' / ').concat(gallery.childElementCount - 2);
})
