const setupSearchbarAction = () => {
  const searchbar = document.querySelector('#search-Bar');
  searchbar.addEventListener('focus', () => {
    const searchBarContainer = document.querySelector('#searchBarContainer');
  
    searchBarContainer.classList.add('sb-border');
  });
  
  searchbar.addEventListener('blur', () => {
    const searchBarContainer = document.querySelector('#searchBarContainer');
  
    searchBarContainer.classList.remove('sb-border');
  });
}

export default setupSearchbarAction;
