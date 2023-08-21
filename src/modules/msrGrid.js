import getPixabayImages from '../modulesTs/pixabay.ts';
import showOnScroll from '../modulesTs/showOnScroll.ts';

const appendGrid = async () => {
  const grid = document.querySelector('.msr-grid');
  const gridItems = await getPixabayImages({
    fetchKey: '37737743-bc1e588a483908de3cbc3eb6d',
    searchFor: 'garden',
  });

  const newElems = [];

  gridItems.forEach((imageUrl, arrayImgID) => {
    const gridItem = document.createElement('img');
    
    gridItem.src = imageUrl;
    gridItem.classList.add('msr-item');
    
    gridItem.addEventListener('click', () => {
      const imgID = document.querySelector('.msr-grid').childElementCount + arrayImgID - 21;
      const popup = document.querySelector('#gallery-popup');
      const popupImg = popup.querySelector('#popup-image');
      const imgDesc = popup.querySelector('#image-description');

      popup.classList.remove('hidden');
      popupImg.src = gridItem.src;

      imgDesc.innerHTML = (imgID).toString().concat(' / ').concat((document.querySelector('.msr-grid').childElementCount - 2));
      popup.dataset.imgId = imgID - 1;
    });
    
    grid.append(gridItem);
    newElems.push(gridItem);
  });

  showOnScroll('.msr-item', 'show-msr-item');
  return newElems;
}

export default appendGrid;

