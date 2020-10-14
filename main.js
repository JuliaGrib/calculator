

//создаем переменные для связи с кноками в html
  const numberBtn = document.querySelectorAll('.number-class');
  const operationBtn = document.querySelectorAll('.operation-class');
  const clearBtn = document.querySelectorAll('.clear-class');
  const decimalBtn = document.getElementById('decimal-id');
  const resultBtn = document.getElementById('result-id');
  const rootlBtn = document.getElementById('root-id');
  const powerBtn = document.getElementById('power-id');
  


  //нажатие кнопок - функция
const numberPress = () => {
  console.log('Клик по кнопке с номером')
}

//нажатие операции - функция
const operation = () => {
  console.log('Клик по кнопке с операции')
}

//десятичная точка - функция
const decimal = () => {
  console.log('Клик по кнопке Десятичной точки')
}

//Корень из числа - функция
const rootNumber = () => {
  console.log('Клик по кнопке Квадратный корень')
}

//степень числа - функция
const numberPower = () => {
  console.log('Клик по кнопке Возведение в степень')
}

const numberResult = () => {
  console.log('Клик по кнопке =')
}


//цикл для нескольких кнопок
for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener('click', numberPress)
}

for (let i = 0; i < operationBtn.length; i++) {
  operationBtn[i].addEventListener('click', operation)
}

for (let i = 0; i < clearBtn.length; i++) {
  clearBtn[i].addEventListener('click', function(e){
    console.log(e.srcElement.id);
    console.log('Клик по кнопке CE или DEL')
  })
}


decimalBtn.addEventListener('click', decimal)

resultBtn.addEventListener('click', numberResult)

rootlBtn.addEventListener('click', rootNumber)

powerBtn.addEventListener('click', numberPower)











