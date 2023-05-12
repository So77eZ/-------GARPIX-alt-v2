let currentRank = {};

function init() {
  const randomIndex = Math.floor(Math.random() * (store.length));
  const rank = store[randomIndex];
  currentRank = rank;

  console.log(currentRank);

  document.getElementById('image').src = rank.link;
}
window.onload = init;

function startQuiz() {
  updateQuestion(questionTree)
}

function updateQuestion(question) {
  currentNode = question;
  document.getElementById('question').value = question.label;
  document.getElementById('answer1-label').value = question.answer1;
  document.getElementById('answer2-label').value = question.answer2;
}

function answer() {
  const answerId = document.querySelector('input[name="quiz-radio"]:checked').value;
  const nextQuestion = currentNode[Number(answerId)];

  if (typeof nextQuestion == 'string') {
    let message = 'Вы не угадали звание!';
    if (currentRank.name === nextQuestion) {
      message = `Вы угадали: ${nextQuestion}`;
    }

    document.getElementById("header").innerHTML = message;
    return;
  }

 updateQuestion(nextQuestion);
}

let currentNode = {};

const yesno = {
  answer1: 'Да',
  answer2: 'Нет'
}

const questionTree = {
  label: 'Какой цвет?',
  answer1: 'Зеленый',
  answer2: 'Красный',
  1: {
    label: 'Наличие звезд',
    ...yesno,
    1: {
      label: 'Одна звезда?',
      ...yesno,
      1: {
        label: 'Есть диагональный узор и окантовка?',
        ...yesno,
        1: {
          label: 'Есть венок?',
          ...yesno,
          1: 'Генерал армии',
          2: {
            label: 'Есть герб?',
            ...yesno,
            1: 'Маршал Российской Федерации',
            2: 'Генерал-майор'
          }
        },
        2: {
          label: 'Есть полосы?',
          ...yesno,
          1: {
            label: 'Одна полоса?',
            ...yesno,
            1: 'Младший лейтенант',
            2: 'Майор'
          },
          2: ''
        }
      },
    }
  },
  2: {
    label: 'Есть ли полосы?',
    answer1: 'Да',
    answer2: 'Нет'
  }
};

const store = [{
  name: 'Рядовой',
  link: '../images/1ryadovoy.svg',
  color: 'red',
  stripes: 0,
  stripesType: 'no',
  stripesThick: 'no',
  stars: 0,
  starsType: 'no',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Ефрейтор',
  link: '../images/2efreytor.svg',
  color: 'red',
  stripes: 1,
  stripesType: 'across',
  stripesThick: 'thin',
  stars: 0,
  starsType: 'no',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Младший сержант',
  link: '../images/3mlSerjant.svg',
  color: 'red',
  stripes: 2,
  stripesType: 'across',
  stripesThick: 'thin',
  stars: 0,
  starsType: 'no',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Сержант',
  link: '../images/4serjant.svg',
  color: 'red',
  stripes: 3,
  stripesType: 'across',
  stripesThick: 'thin',
  stars: 0,
  starsType: 'no',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Старший сержант',
  link: '../images/5stSerjant.svg',
  color: 'red',
  stripes: 1,
  stripesType: 'across',
  stripesThick: 'thick',
  stars: 0,
  starsType: 'no',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Старшина',
  link: '../images/6starshina.svg',
  color: 'red',
  stripes: 1,
  stripesType: 'along',
  stripesThick: 'thick',
  stars: 0,
  starsType: 'no',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Прапорщик',
  link: '../images/7praporshick.svg',
  color: 'green',
  stripes: 0,
  stripesType: 'no',
  stripesThick: 'no',
  stars: 2,
  starsType: 'small',
  emblem: false,
  edging: true,
  wreath: false,
  pattern: false
},
{
  name: 'Старший прапорщик',
  link: '../images/8stPraporshick.svg',
  color: 'green',
  stripes: 0,
  stripesType: 'no',
  stripesThick: 'no',
  stars: 3,
  starsType: 'small',
  emblem: false,
  edging: true,
  wreath: false,
  pattern: false
},
{
  name: 'Младший лейтенант',
  link: '../images/9mlLetenant.svg',
  color: 'green',
  stripes: 1,
  stripesType: 'along',
  stripesThick: 'thin',
  stars: 1,
  starsType: 'small',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Лейтенант',
  link: '../images/10letenant.svg',
  color: 'green',
  stripes: 1,
  stripesType: 'along',
  stripesThick: 'thin',
  stars: 2,
  starsType: 'small',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Старший лейтенант',
  link: '../images/11stLetenant.svg',
  color: 'green',
  stripes: 1,
  stripesType: 'along',
  stripesThick: 'thin',
  stars: 3,
  starsType: 'small',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Капитан',
  link: '../images/12captain.svg',
  color: 'green',
  stripes: 1,
  stripesType: 'along',
  stripesThick: 'thin',
  stars: 4,
  starsType: 'small',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Майор',
  link: '../images/13mayor.svg',
  color: 'green',
  stripes: 2,
  stripesType: 'along',
  stripesThick: 'thin',
  stars: 1,
  starsType: 'small',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Подполковник',
  link: '../images/14podpolkovnick.svg',
  color: 'green',
  stripes: 2,
  stripesType: 'along',
  stripesThick: 'thin',
  stars: 2,
  starsType: 'small',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Полковник',
  link: '../images/15polkovnick.svg',
  color: 'green',
  stripes: 2,
  stripesType: 'along',
  stripesThick: 'thin',
  stars: 3,
  starsType: 'small',
  emblem: false,
  edging: false,
  wreath: false,
  pattern: false
},
{
  name: 'Генерал-майор',
  link: '../images/16generalMajor.svg',
  color: 'green',
  stripes: 0,
  stripesType: 'no',
  stripesThick: 'no',
  stars: 1,
  starsType: 'small',
  emblem: false,
  edging: true,
  wreath: false,
  pattern: true
},
{
  name: 'Генерал-лейтенант',
  link: '../images/17generalLetenant.svg',
  color: 'green',
  stripes: 0,
  stripesType: 'no',
  stripesThick: 'no',
  stars: 2,
  starsType: 'small',
  emblem: false,
  edging: true,
  wreath: false,
  pattern: true
},
{
  name: 'Генерал-полковник',
  link: '../images/18generalPolkovnick.svg',
  color: 'green',
  stripes: 0,
  stripesType: 'no',
  stripesThick: 'no',
  stars: 3,
  starsType: 'small',
  emblem: false,
  edging: true,
  wreath: false,
  pattern: true
},
{
  name: 'Генерал армии',
  link: '../images/19generalOfArmy.svg',
  color: 'green',
  stripes: 0,
  stripesType: 'no',
  stripesThick: 'no',
  stars: 1,
  starsType: 'big',
  emblem: false,
  edging: true,
  wreath: false,
  pattern: true
},
{
  name: 'Маршал Российской Федерации',
  link: '../images/20marshallRF.svg',
  color: 'green',
  stripes: 0,
  stripesType: 'no',
  stripesThick: 'no',
  stars: 1,
  starsType: 'big',
  emblem: true,
  edging: true,
  wreath: false,
  pattern: true
},
];