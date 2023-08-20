const showOnScroll = (selector: string, showClass: string) => {
  const items = document.querySelectorAll(selector);
  const itemObserver = new IntersectionObserver(items => {
    items.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.add(showClass);
      };
    });
  });

  items.forEach(item => itemObserver.observe(item));
}

export default showOnScroll;