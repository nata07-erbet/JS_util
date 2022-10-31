/*<p class="form__item">
      <label for="amount">Количество:</label>
      <br>
      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="10"
      >
    </p> */

// найдем форму
const orderForm = document.querySelector('.form');

//создадим переменную
const pristine = new pristine(orderForm, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  // class of the parent element where error text element is appended
  errorTextParent: 'form__item',
  // type of element to create for the error text
  errorTextTag: 'span',
  // class of the error text element
  errorTextClass: 'form__error',
});

// найдем инпут в форме  по айдишнику, который отвечает за кол-в
const amountOrderForm = orderForm.querySelector('#amount');

// опишем выалидацию в JS  у инпута, вызывая метод addValidator() y pristine;
pristine.addValidator(amountOrderForm);

//добавим проверку при отправке формы - это выражение всегда в конце после всех проверок
orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

// добавим вторй аргумент - Foo для проверки каких либо условий
const validateNickname = (value) => {
  if (value.length < 2 && value.length > 50) {
    console.log('Длина сообщения не может быть меньше 2-х символов');
  } else {
    console.log('Длина сообщения не может быть больше 50-ти символов');
  }
};

// или
validateNickname = (value) => value.length >= 2 && value.length <= 50;

//еще раз перезапишем вызов метода для валидации(корекктность введенной инфы в инпуты)
pristine.addValidator(amountOrderForm, validateNickname);

//перезапишем foo для проверки условий

validateNickname = (value) => value.length <= 2 && value.length >= 50;

// третий агрумент - cообщение об ошибке
pristine.addValidator(amountOrderForm, validateNickname, 'от 2 до 50');

// УСЛОВИЯ для валидации оставшихся полей

// Максимальное количество зависит от размера упаковки:
// S-размер - 10 штук, M-размер - 5 штук в одни руки

// Доставка возможна на следующий день или на выходных
// Самовывоз в этот же день, либо на следующий
/*<form class="form" autocomplete="off">
<h3>Доставка Кексокорма</h3>

<p class="form__item"> - провалидировали
  <label for="nickname">Имя питомца для открытки:</label>
  <br>
  <input
    type="text"
    name="nickname"
    id="nickname"
    placeholder="Кексик"
  >
</p>

<p>
  Размер:
  <label><input type="radio" name="unit" value="s" checked>S</label>
  <label><input type="radio" name="unit" value="m">M</label>
</p>

<p class="form__item">
  <label for="amount">Количество:</label>
  <br>
  <input
    type="number"
    name="amount"
    id="amount"
    placeholder="10"
  >
</p>

<p class="form__item">
  <select name="delivery">
    <option value="Доставка" selected>Доставка</option>
    <option value="Самовывоз">Самовывоз</option>
  </select>
  <select name="date">
    <option value="Сегодня" selected>Сегодня</option>
    <option value="Завтра">Завтра</option>
    <option value="На выходных">На выходных</option>
  </select>
</p>

<p>
  <button>Заказать</button>
</p>
</form> */

// Максимальное количество зависит от размера упаковки:
// S-размер - 10 штук, M-размер - 5 штук в одни руки

//поле  ввода кол-ва
//const amountOrderForm = orderForm.querySelector("#amount");объявили выше

//зададим контстаннту кол-ва соотношение количества и размера

const maxAmount = {
  s: 5,
  m: 10,
};

// foo валидации

const validateAmountBySize = (value) => {
  //поле ввода размера - ищем по а трибуту селектора
  const unitOrderForm = orderForm.querySelector('[name="unit"]:checked');
  return value.length && parseInt(value, 10) <= maxAmount[unitOrderForm.value];
};

// foo вывода сообщения о кол-ве товара
const getAmountErrorMessage = () => {
  const unitOrderForm = orderForm.querySelector('[name="unit"]:checked');
  return ` Не больше ${maxAmount[unitOrderForm.value]} в одни руки`;
};

//foo проверки количества при измененении размера = переключение чек бокса =  обработчик  change
const onUnitChange = () => {
  amountOrderForm.placeholder = maxAmount[this.value];
  pristine.validate(amountOrderForm);
};
