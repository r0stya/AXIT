export default class Scroll {
  constructor() {
    this.scrollLinks = document.querySelectorAll('.scroll-link');
    this.btnToTop = document.querySelector('.scrollToTop');
    this.header = document.querySelector('.header__content');
    this.offset = 300
  }

  scrollToElement() {
    this.scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector(".header").offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      })
    })
  }

  getPageOffset() {
    return window.scrollY;
  }

  visibleBtnToTop() {

    if(this.getPageOffset() > this.offset) {
      this.btnToTop.style.visibility = 'visible'
      this.btnToTop.style.opacity = '1'
    } else {
      this.btnToTop.style.opacity = '0'
      this.btnToTop.style.visibility = 'hidden'
    }
  }

  changeNavMenu() {

    if(this.getPageOffset() > this.offset) {
      this.header.style.paddingTop = '10px'
      this.header.style.paddingBottom = '10px'
    } else {
      this.header.style.paddingTop = '20px'
      this.header.style.paddingBottom = '20px'
    }

  }

  onScroll() {
    window.addEventListener('scroll', () => {
      this.visibleBtnToTop()
      this.changeNavMenu();
    });
  }

  init() {
    this.scrollToElement();
    this.onScroll();
  }
}