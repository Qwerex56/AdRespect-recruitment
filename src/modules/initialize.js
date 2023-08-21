import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import apppendGrid from './msrGrid.js';
import showOnScroll from '../modulesTs/showOnScroll.ts';
import setupSearchbarAction from './searchbarActions.js';

const msr = new Masonry(".msr-grid", {
  itemSelector: ".msr-item",
  columnWidth: ".msr-sizer",
  gutter: ".msr-gutter",
  fitWidth: true,
});

document.addEventListener('DOMContentLoaded', async () => {
  setupSearchbarAction();

  const elems = await apppendGrid();

  msr.appended(elems);

  imagesLoaded(document.querySelector('.msr-grid')).on('progress', () => {
    msr.layout();
  })

  showOnScroll("#ProjektyCard", "show-card");
});

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