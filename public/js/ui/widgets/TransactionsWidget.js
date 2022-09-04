/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error("Невалидное значение для TransactionsWidget");
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const transactionsPanel = document.querySelectorAll('.transactions-panel > button');
    transactionsPanel.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.className.includes('btn-success')) {
          App.getModal('newIncome').open();
        }
        if(e.target.className.includes('btn-danger')) {
          App.getModal('newExpense').open();
        }
      });
    });
  }
}
