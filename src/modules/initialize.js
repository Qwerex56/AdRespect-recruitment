import Masonsry from 'masonry-layout';
import apppendGrid from './msrGrid.js';
import showOnScroll from '../modulesTs/showOnScroll.ts';
import setupSearchbarAction from './searchbarActions.js';

const showMoreBtn = document.querySelector('.show-more-btn');
showMoreBtn.addEventListener('click', async () => {
  const grid = document.querySelector('.msr-grid');
  
  const elems = await apppendGrid();
  
  msr.appended(elems);

  if (grid.childElementCount >= 61) {
    document.querySelector('.gradient').classList.toggle('hidden')
    showMoreBtn.remove();
    return;
  }
});

setupSearchbarAction();

await apppendGrid();

const msr = new Masonsry('.msr-grid', {
  itemSelector: '.msr-item',
  columnWidth: '.msr-sizer',
  gutter: '.msr-gutter',
  fitWidth: true
});

msr.layout();

showOnScroll('#ProjektyCard', 'show-card');