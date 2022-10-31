var pictures = [
  'gallery-tomato/tomato-red-large.jpg',
  'gallery-tomato/tomato-yellow-large.jpg',
  'gallery-tomato/tomato-strange-large.jpg',
];

/* Техническое задание
  
  Мяу! Нужно оживить галерею с фотографиями товаров.
  
  В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').
  
  После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же, как и в миниатюре, только большего размера.
  
  Пути к полноразмерным фотографиям находятся в массиве pictures. Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.
  
  */
//кнопки - коллекция миниатюр в разметке
var miniPhotos = document.querySelectorAll('.gallery__picture-preview');

// одно большое изображение
var fullPhoto = document.querySelector('.full-picture');

//обработчик кликов по миниатюре (превью)
var changeImagebyClick = function (minphoto, picture) {
  minphoto.addEventListener('click', function () {
    //меняем изображение большой картинки
    fullPhoto.src = picrure;
  });
};

//создаем цикл. Для каждой итерации будет свое значение пути к изображению
for (let i = 0; i < pictures.length; i++) {
  changeImagebyClick(miniPhotos[i], pictures[i]);
}
