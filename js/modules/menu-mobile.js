import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector('[data-menu="button"]');
    this.menuList = document.querySelector('[data-menu="list"]');
    this.activClass = 'active';
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activClass);
    this.menuButton.classList.add(this.activClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activClass);
      this.menuButton.classList.remove(this.activClass);
    });
  }

  addmenuMobileEvents() {
    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addmenuMobileEvents();
    }
    return this;
  }
}
