//forEach Попросту говоря: он запускает перебор значений массива и для каждого значения выполняет функцию. Поэтому если вам требуется перебрать только часть массива, то .forEach() следует отодвинуть в сторонку и воспользоваться циклом for. Помните об этом.

const { title } = require("process");


//.join - приводит все элементы массива к строке и конкатенирует их в одну итоговую строку, разделяя переданным символом — разделителем.
const titles = ['Die hard', 'Terminator'];
const message = titles.join(',');
console.log(message);

//.concat() используется для склеивания двух и более массивов в один. Метод не изменяет исходный массив, а возвращает новый.

const nataFilm = ['Die', 'Terminator'];
const sergoFilm = ['Fire', 'Two'];
const allFilm = nataFilm.concat(sergoFilm);
console.log(allFilm);


//.slice  - возвращает копию всех или части элементов исходного массива. Метод не изменяет исходный массив, а возвращает новый. Чтобы получить часть элементов в виде нового массива, нужно передать аргументами диапазон индексов:
const films = ['Die', 'Terminator', 'Dogs', 'Cats'];
console.log(films.slice(1, 3));
console.log(films.slice(1));


//скопировать массив
console.log(films.slice());

// получене массива тз определенных элементов

const kino = [
  {
    id: 0,
    title: 'Die hard',
  },
  {
    id: 0,
    title: 'Terminator',
  },
  {
    id: 0,
    title: 'Avatar',
  }
]

const titless = [];

kino.forEach((film, index) =>
    {
        titless[index] = film.title
    });
console.log(titless);

//метод .map

const Titles = kino.map((film) => {
    return film.title
});

console.log(Titles);

const goods = [
    {
      title: 'Кукуруза',
      quantity: 3,
      price: 99,
    },
    {
      title: 'Корм для кота',
      quantity: 2,
      price: 113,
    },
  ];


   const summ = goods.reduce((total, product) => total + (product.quantity * product.price),0);
   console.log(summ);

   let cats = [firstCat, secondCat];
   let firstCat = {
       name: 'Vid',
       points: 0
   };

   let secondCat = {
       name: 'Iff',
       points: 0
   };


   let attempts = {
       dice = 2,
       maxAv = 3
   };


   let runGame = function() {

   }