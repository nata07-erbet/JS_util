var assortmentData = [
  {
    inStock: true,
    isHit: false,
  },
  {
    inStock: false,
    isHit: false,
  },
  {
    inStock: true,
    isHit: true,
  },
  {
    inStock: true,
    isHit: false,
  },
  {
    inStock: false,
    isHit: false,
  },
];

/* Техническое задание
  
  Мяу! На сайте магазина мороженого надо отображать актуальное состояние товаров: «в наличии», «нет в наличии», «хит».
  
  Данные по продуктам хранятся в массиве с объектами assortmentData, каждый объект соответствует одному товару и содержит свойства:
  
  - inStock. Если значение true — мороженое в наличии, если false — товара в наличии нет.
  - isHit. Если значение true — мороженое самое популярное среди покупателей.
  
  Каждому состоянию товара соответствует специальный класс:
  
  Товар в наличии — good--available.
  Недоступный товар — good--unavailable.
  Хит продаж — good--hit.
  
  Оформи код в виде функции updateCards, которая принимает на вход массив с данными. Вызови её, передав assortmentData.
  
  */

var updateCards = (elements) => {
  // 1. найдем все элеметы коллекции - лишки которые описыват товар в разметке
  var goods = document.querySelectorAll('.good'); //это псевдомассив  c лишками - на них будем навешивать классы
  // goods - навешиваем классыe,   elements -проверяем условия

  //  цикл который проходит по каждому элементу elements[i] передаваемого маасива и проверяет условия и взависимости от этого навешивает класс
  for (var i = 0; i < elements[i].length; i++) {
    // проверка присутсвия
    if (elements[i].inStock) {
      goods[i].classList.add('good--available');
    } else {
      goods[i].classList.add('good--unavailable');
    }

    // проверим на хит
    if (elements[i].isHit) {
      goods[i].classList.add('good--hit');
    }
  }
};

updateCards(assortmentData);

