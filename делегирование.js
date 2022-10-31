// Необходимо, чтобы при выборе фильтра его значение отображалось в заголовке списка товаров.

// заголовок
const titleProd = document.querySelector('#selected-category');

//поля выбора всех фильтров на основании атрибута селектора
const inputsProd = document.querySelectorAll('input[type="radio"]'); // коллекция

//inputProd:checked.value =  titleProd.textContent;

//выбор  = обработчик change

//пройдемся по каждому элементу коллекции и навесим обработчик
/*inputsProd.forEach((input) => {
  input.addEventListener('change', (evt) => {
    titleProd.textContent = evt.target.value;
  });
});*/

//КАК ПРАВИЛЬНО

// 1. foo-calback обработчика
/*const onFilterChangeO = (evt) => {
  titleProd.textContent = evt.target.value;
}; */

// 2. навесим обработчик на РОДИТЕЛЬ = форма
const form = document.querySelector('form');

// 3. укажем на каком именно элементе должно сработать  - это все чекбоксы => type = "ratio"
// испотльзуем метод matches() - возвращает элемент с указаным значением css
//inputsProd.matches('input[type="radio"]') -

//перезапишем foo -callback
const onFilterChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    titleProd.textContent = evt.target.value;

    if (evt.target.closest('.discount-100')) {
      titleProd.classList.add('special-category');
    } else {
        titleProd.classList.remove('special-category');
    }
  }
};

// добавим обработчик на форму
form.addEventListener('change', onFilterChange);

//метод CLOSEST - проверяет, соответсвует ли указаннному  селектору сам элемент или его родитель

// добавим паре лишек класс спеццены         <li class="discount-100">
//inputsProd.closest('.discount-100');  - добавим это в наш колл бек - имеено в первую проверку
