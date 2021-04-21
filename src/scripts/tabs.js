export default class Tabs {
  constructor(title = '', text = '', btn = '', nav = '') {
    this.title = title;
    this.text = text;
    this.btn = btn;
    this.nav = nav;
    this.id = `_${Math.random().toString(36).substr(2, 9)}`;
  };

  createTitle() {
    if (!this.title) return;
    const blockTitle = document.createElement('div');
    blockTitle.classList.add('tab-block__title');
    blockTitle.textContent = this.title;
    return blockTitle;
  };

  createText() {
    if (!this.text) return;
    const blockText = document.createElement('p');
    blockText.classList.add('tab-block__text');
    blockText.textContent = this.text;
    return blockText;
  };

  createButton() {
    if (!this.btn) return;
    const blockBtn = document.createElement('button');
    blockBtn.classList.add('tab-block__btn', 'btn');
    blockBtn.textContent = this.btn;
    return blockBtn;
  };

  createBlock() {
    const blockTitle = this.createTitle();
    const blockText = this.createText();
    const blockBtn = this.createButton();
    const block = document.createElement('div');
    block.classList.add('tab-block', 'animate__animated', 'animate__fadeIn')
    block.id = this.id;
    if (blockBtn) {
      block.insertAdjacentElement('afterbegin', blockBtn);
    }
    if (blockText) {
      block.insertAdjacentElement('afterbegin', blockText);
  }
    if (blockTitle) {
      block.insertAdjacentElement('afterbegin', blockTitle);
    }

    return block;
  };

  createNavTab() {
    const btn = document.createElement('button');
    btn.classList.add('tab__link');
    btn.dataset.id = this.id;
    btn.textContent = this.nav;
    return btn;
  };

  onClick() {
    const navBtns = document.querySelectorAll('.tab__link');
    const blocks = document.querySelectorAll('.tab-block');
    navBtns.forEach(item => {
      item.addEventListener('click', () => {
        blocks.forEach(block => {
          block.style.display = 'none'
        });
        document.querySelector(`#${item.dataset.id}`).style.display = '';
        navBtns.forEach(btn => {
          btn.classList.remove('tab__link_active')
        });
        item.classList.add('tab__link_active')
      });
    })
  }

  init() {
    const tabContent = document.querySelector('#tabContent');
    const tabNav = document.querySelector('#tabNav');
    tabContent.insertAdjacentElement('beforeend', this.createBlock());
    tabNav.insertAdjacentElement('beforeend', this.createNavTab());
    const tabBlocks = [...tabContent.children];
    tabBlocks.forEach(item => {
      item.style.display = 'none'
    });
    tabBlocks[0].style.display = '';
    [...tabNav.children][0].classList.add('tab__link_active')
    this.onClick();
  }
}