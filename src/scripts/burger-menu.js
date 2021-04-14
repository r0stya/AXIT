export default class BurgerMenu {
  constructor() {
    this.menuBody = document.querySelector('#menu-body')
    this.burgerBtn = document.querySelector('#burger-btn')
  }

  openMenu() {
    this.menuBody.style.transform = 'translateY(0)'
    this.burgerBtn.classList.add('opened', 'fa-times')
    this.burgerBtn.classList.remove('fa-bars')

  }

  closeMenu() {
    this.menuBody.style.transform = 'translateY(-2000px)'
    this.burgerBtn.classList.remove('opened', 'fa-times')
    this.burgerBtn.classList.add('fa-bars')
  }

  onClick() {
    this.burgerBtn.addEventListener('click', () => {
      if (this.burgerBtn.classList.contains('opened')) {
        this.closeMenu()
      } else {
        this.openMenu()
      }
    })
  }

  init() {
    this.onClick();
  }
}