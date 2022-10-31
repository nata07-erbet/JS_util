const { constants } = require('buffer');
const { privateDecrypt } = require('crypto');

const live = {
  number: 4,
  title: 'Встроенные объекты и функции',
  date: '2021-06-04T16:00:00.000Z',
};

// если нужен порядок - зоводим другой массив
const order = ['number', 'title', 'date'];

// пройдемся по каждому элементу массива
order.forEach((element) => {
  return live[element];
});

// или метод Object.keys(); -возвращает ключи массива- но не гарантирует порядок  ключей
const keysArray = Object.keys(live);

//  перенести элементы из одгого массива в другой объект
const arr1 = [1, 2, 3];
//функция которая выбергивает элемент из первоначального массива
const getElement = () => {
  const arr2 = {};
  arr1.forEach((element) => {
    arr1.push(element);
  });
  return arr2;
};
getElement();

/* Техническое задание

Мяу! Напиши программу для расчёта стоимости проекта.

Назови функцию getPrice. У неё должно быть два параметра:

- время (в часах), которое нужно потратить на проект;
- булево значение, которое указывает на срочность проекта — true для срочного заказа и false для обычного.

Названия параметров могу быть любыми.

Для каждого проекта есть фиксированная ставка — 1500 рублей в час. Расчёт стоимости проектов выглядит так: время * ставка в час.

Есть несколько нюансов. Если проект срочный, то часы уменьшаются в два раза, а ставка за час повышается в 2.5 раз.

А если время проекта больше 150 часов, ставка в час уменьшается на 250 рублей.

В первую очередь проверяй срочность. Функция должна возвращать стоимость проекта.

*/
const getPrice = (hour, isUgent) => {
  const price = 1500;
  const time = hour;
  if (isUgent) {
    time /= 2;
    price *= 2.5;
  }

  if (time > 150) {
    price -= 250;
  }
  coast = price * time;
  return coast;
};

/* Техническое задание

Мяу! Напиши программу getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.

Функция принимает на вход два параметра:

- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.

Названия параметров могут быть любыми.

Внутри функции надо сравнить два проекта: срочный и обычный.

Обрати внимание, что срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.

Функция getProfitableProject должна возвращать строку:


- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.

*/
const getProfitableProject = (hour, ebit) => {
  const isUgentCoast = getPrice(hour, true) - ebit;
  const noUgentCoast = getPrice(hour, false);

  if (isUgentCoast < noUgentCoast) {
    return `Выгодней срочный проект. Потратишь на него ${coastInUgent}  — если срочный проект окажется дешевле обычного`;
  }
  if (noUgentCoast < isUgentCoast) {
    `Выгодней обычный проект. Потратишь на него ${coastNoUgent} — если обычный проект дешевле`;
  }
};

// последовательность из чисел, которые идут один за другим

const arr = [];
for (let i = 1; i <= 25; i++) {
  arr[i] = arr.push(i);
}

//разберем метод map
/*arr.map((element, index_of_element, array) => callback (){

}) */

const numbers = [1, 2, 3, 4, 5];
// пусть в роли коллбека будет функция, вызываемая для каждого элемента массива
const anyFoo = (item, index, items) => {
  return item + index + items.length;
};
console.log(numbers.map(anyFoo));
console.log('--------');

// метод map -  это функция map,аргументом которой callback
const map = (items, callback) => {
  //функция map создает пустой массив, элементы маасива - возващенне значения от callback которая взаимодействует с каждым элементом исходного массива
  const Items = [];

  //создадим элементы и запишем их в массив
  for (let i = 0; i <= items.length - 1; i++) {
    const Item = callback(items[i], i, items);
    //добавим элемент в массив
    Items.push(Item);
  }
  return Items;
};

//вызовем функцию
console.log(map(numbers, anyFoo));

// родитель
document.parentElement;
//потомок
document.children; // масивоподобная коллекция детей, а значит можем перебрать

/*<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>Document Object Model</h1>
    </body>
</html> */

//структура узла html
const html = document.documentElement; //возвращает кореной элемент
//переберем дочерние элементы
for (let i = 0; i <= html.length - 1; i++) {
  const child = html.children[i];
  console.log(child.children.tagName.toLowCase());

  for (let j = 0; j <= child.length - 1; j++) {
    const innerChild = child[j];
    console.log(innerChild.tagName, toLowCase());
  }
}

//добавление элемента inner.HTML
const catName = 'Keks';
document.querySelector('#root').innerHTML += `<p>Hellow<b>${catName}<b></p>`;

//отключить форму
const formElement = document.querySelector('.form-element');
const formOff = () => {
  // добавляем флормам класс отсутвия
  formElement.classList.add('form-disabled');

  // ищем все филцеты = поля ввода получаем коллекцию = псевдомассив
  const fieldsets = document.querySelectorAll('.fieldset');

  //пройдемся по каждому элементу псевдомассива
  fieldsets.forEach(fieldset, () => {
    fieldset.disabled = true;
  });
};

//создание комментария для фото
const createComment = ({ avatar, name, message }) => {
  // создаем лишку - оболочку для коммента
  const comment = document.createElement('li');

  //вставляем тег изображения
  comment.innerHTML =
    '<img  class ="picture-comment "src="img/htmla-logo.svg" width="130" height="45" alt="HTML Academy">';
  // лишка после этого перезапишеся - в ней уже будет тег img
  // класс
  comment.classList.add('img-class');
  //добавим атрибуты
  comment.querySelector('.picture-comment').src = avatar;
};
