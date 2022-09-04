/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarToggle = document.querySelector('a.sidebar-toggle');
    sidebarToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const sidebarMiniApp = document.querySelector('body.sidebar-mini');
      sidebarMiniApp.classList.toggle('sidebar-open');
      sidebarMiniApp.classList.toggle('sidebar-collapse');
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const sidebarMenu = document.querySelectorAll('.sidebar-menu');
    sidebarMenu.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        switch (e.target.closest('li').classList[1]) {
          case 'menu-item_login':
            App.getModal('login').open();
          break;
          case 'menu-item_register':
            App.getModal('register').open();
          break;
          case 'menu-item_logout':
            User.logout((err, resp) => {
              if (resp && resp.success) {
                App.setState('init');
              }
            });
          break;
        }
      });
    });
  }
}