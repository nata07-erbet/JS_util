var cardsData = {
  inStock: true,
  imgUrl: 'gllacy/choco.jpg',
  text: 'Сливочно-кофейное с кусочками шоколада',
  price: 310,
  isHit: true,
  specialOffer: 'Двойная порция сиропа бесплатно!',
};

/* Техническое задание
  
  Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.
  
  Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:
  
  - inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
  - imgUrl — ссылка на изображение товара.
  - text — название продукта.
  - price — цена.
  - isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
  - specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.
  
  Вот пример вёрстки одной карточки в каталоге:
  
  <ul class="goods">
    <li class="good">
      <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
      <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
      <p class="good__price">110₽/кг</p>
    </li>
    ...
  </ul>
  
  Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.
  
  Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.
  
  */
// список куда нужно добавить карточки
const goods = document.querySelector('.goods');

//foo  для создания элемента и только!!! (имя тега класс и текст) это унаверсальная foo и можно использовать для создания ЛЮБОГО элемента
var makeElement = (tagName, className, text) => {
  var element = document.createElement(tagName);
  element.classList.add(className);

  if (text) {
    element.textContent = text;
  }
  return element;
};

var createGood = (product) => {
  //создадим пустую лишку
  var good = createGoodElement('li', 'good');

  // дополним ее заголовком
  var title = createGoodElement('h2', 'good__description');
  title.textContent = product.text;
  good.apendChild(title);

  // изображение
  var image = createGoodElement('img', 'good__image');
  image.src = product.imgUrl;
  image.alt = product.text;
  good.apendChild(image);

  //цена
  price = createGoodElement('p', 'good__price');
  price.textContent = product.price;
  good.apendChild(price);

  return good;
};


const renderCards = (products) => {
  for (var i = 0; i < products.length; i++) {
    var card = createGood(products[i]);
    goods.appendChild(card);
  }
  return card;
};
