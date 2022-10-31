// коллекция кнопок на клавиатуру
let buttons = document.querySelectorAll('.key');

//пустой див куда мы будем добавлять кнопки
let display = document.querySelector('.display');

//кнопка очистки
let buttonClear = document.querySelector('.clear');

// обработчик при клике - для каждого элемента коллекции
for (let button of buttons) {
  button.onclick = function () {
    // значение дисплея =  кнопка
    display.textContent  += button.textContent;
  };
}

//обработчик на кнопку для очистки формы
buttonClear.onclick = function () {
  display.textContent = '';
};
