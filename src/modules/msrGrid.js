import getPixabayImages from './pixabay';
import showOnScroll from './showOnScroll';

const appendGrid = async () => {
  const grid = document.querySelector('.msr-grid');
  const gridItems = await getPixabayImages({
    fetchKey: '37737743-bc1e588a483908de3cbc3eb6d',
    searchFor: 'garden',
  });

  const newElems = [];

  gridItems.forEach((imageUrl) => {
    const gridItem = document.createElement('img');
    
    gridItem.src = imageUrl;
    gridItem.classList.add('msr-item');
    
    grid.append(gridItem);
    newElems.push(gridItem);
  });

  showOnScroll('.msr-item', 'show-msr-item');
  return newElems;
}

export default appendGrid;

