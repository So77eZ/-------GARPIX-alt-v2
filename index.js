/* jshint esversion: 11 */
let currentRankName = '';

function init() {
  const randomIndex = Math.floor(Math.random()*(store.length));
  const rank = store[randomIndex];

  currentRankName = rank.name;
  document.getElementById('image').src = rank.link;
}
window.onload = init;

function generate() {
  const selectedColour = document.querySelector('input[name="color"]:checked').value;
  const countOfStripes = Number(document.getElementById("stripes").value);
  const countOfStars = Number(document.getElementById("stars").value);
  const starsType = document.querySelector('input[name="star"]:checked').value;
  const stripesType = document.querySelector('input[name="stripe"]:checked').value;
  const stripesThick = document.querySelector('input[name="stripeThick"]:checked').value;
  const emblem = document.getElementById("emblem").checked;
  const edging = document.getElementById("edging").checked;
  const wreath = document.getElementById("wreath").checked;
  const pattern = document.getElementById("pattern").checked;


  const foundRank = store.find((obj)  => {
    return obj.color === selectedColour &&
      obj.stripes === countOfStripes &&
      obj.stars === countOfStars &&
      obj.starsType === starsType &&
      obj.stripesType === stripesType &&
      obj.stripesThick === stripesThick &&
      obj.emblem === emblem &&
      obj.edging === edging&&
      obj.wreath === wreath&&
      obj.pattern === pattern;
  });



  if (currentRankName !== foundRank?.name) {
    alert('не найдено');
  }
  else {
    document.getElementById('label').value = foundRank.name;
    alert('найдено');
  }
}


const store = [
  {
    name: 'Рядовой',
    link: './images/Рядовой.svg',
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
    link: './images/Ефрейтор.svg',
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
    link: './images/Младший сержант.svg',
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
    link: './images/Сержант.svg',
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
    link: './images/Старший сержант.svg',
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
    link: './images/Старшина.svg',
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
    link: './images/Прапорщик.svg',
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
    link: './images/Старший прапорщик.svg',
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
    link: './images/Младший лейтенант.svg',
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
    link: './images/Лейтенант.svg',
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
    link: './images/Старший лейтенант.svg',
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
    link: './images/Капитан.svg',
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
    link: './images/Майор.svg',
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
    link: './images/Подполковник.svg',
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
    link: './images/Полковник.svg',
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
    link: './images/Генерал-майор.svg',
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
    link: './images/Генерал-лейтенант.svg',
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
    link: './images/Генерал-полковник.svg',
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
    link: './images/Генерал армии.svg',
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
    link: './images/Маршал Российской Федерации.svg',
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