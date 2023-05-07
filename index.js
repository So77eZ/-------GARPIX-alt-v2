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
    link: './images/1ryadovoy.svg',
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
    link: './images/2efreytor.svg',
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
    link: './images/3mlSerjant.svg',
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
    link: './images/4serjant.svg',
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
    link: './images/5stSerjant.svg',
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
    link: './images/6starshina.svg',
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
    link: './images/7praporshick.svg',
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
    link: './images/8stPraporshick.svg',
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
    link: './images/9mlLetenant.svg',
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
    link: './images/10letenant.svg',
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
    link: './images/11stLetenant.svg',
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
    link: './images/12captain.svg',
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
    link: './images/13mayor.svg',
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
    link: './images/14podpolkovnick.svg',
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
    link: './images/15polkovnick.svg',
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
    link: './images/16generalMajor.svg',
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
    link: './images/17generalLetenant.svg',
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
    link: './images/18generalPolkovnick.svg',
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
    link: './images/19generalOfArmy.svg',
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
    link: './images/20marshallRF.svg',
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