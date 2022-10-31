const { pid } = require("process");

    //foo  для сщздания любого элемента
    var makeElement = (tagName, className, text) => {
        var element = document.createElement(tagName);
        element.classList.add(className);
    
        if (text) {
        element.textContent = text;
        }
        return element;
    };
    
    //foo - создвет ОДНУ карточку и возвращает ее
    var createCard = (good) => {
        //создадим лишку
        var listItem = makeElement('li', 'good');

        //проверим на свойство присутсвия
        var isAvalible = 'good--available';
        if(!good.isAvalible) {
        isAvalible = 'good--unavailable';
        }

        //добавим класс карточке
        listItem.classList.add(isAvalible);

        var title = makeElement('h2','good__description', good.text);
        listItem.appendChild(title);

        var picture = makeElement('img', 'good__image');
        picture.src = good.imgUrl;
        picture.alt = good.text;
        listItem.appendChild(picture);

        var price = makeElement('p','good__price', `${good.price} + ₽1/1кг`);
        listItem.appendChild(price);


    //foo - добавляет готовые карточки в список
    var renderCards = (goods) => {
    // 1.ищем спимок куда будем добавлять элементы
    var cardList = document.querySelector('.goods');


    //цикл добавления свойств из исходного массива данных в шаблон карточки
    for (var i = 0; i < goods.length; i++) {
        //будем передавать в foo createCard каждый элемент массива. Этот мвссив - аргумент foo  renderCard
        var cardItem = createCard(goods[i]);
        //добавим полученную карточку в конец списка
        cardList.appendChild(cardItem);
    }
    };

    renderCards(cardsData);
