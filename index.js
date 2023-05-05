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
    link: './images/ryadovoy.svg',
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
    link: './images/efreytor.svg',
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
    link: './images/mlSerjant.svg',
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
    link: './images/serjant.svg',
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
    link: './images/stSerjant.svg',
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
    link: './images/starshina.svg',
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
    link: './images/praporshick.svg',
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
    link: './images/stPraporshick.svg',
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
    link: './images/mlLetenant.svg',
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
    link: './images/letenant.svg',
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
    link: './images/stLetenant.svg',
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
    link: './images/captain.svg',
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
    link: './images/mayor.svg',
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
    link: './images/podpolkovnick.svg',
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
    link: './images/polkovnick.svg',
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
    link: './images/generalMajor.svg',
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
    link: './images/generalLetenant.svg',
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
    link: './images/generalPolkovnick.svg',
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
    link: './images/generalOfArmy.svg',
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
    link: './images/marshallRF.svg',
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