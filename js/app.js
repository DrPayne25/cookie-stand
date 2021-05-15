'use strict';
console.log('Hello World');

// const mycontainer = document.getElementById('container');

// //Proof of Life get in the habit of doing this more
// console.log(mycontainer);

// //1.Create Element
// let section = document.createElement('section');
// //2.give it content
// let ul = document.createElement('ul');
// //3. append to the DOM
// mycontainer.appendChild(section);
// //Do this its important to do proof of life as you go

// // create element
// let img = document.createElement('img');
// //Content for this part
// img.src = 'img/tokyo.jpg';
// img.alt = 'picture of tokyo';
// // append
// section.appendChild(img);
// //proof of life

// //create article
// let article = document.createElement('article');
// //give content
// let h3 = document.createElement('h3');
// //give text content
// h3.textContent = 'Tokyo';
// //append to the dom
// section.appendChild(article);





const seattleList = document.getElementById('seattle_list');
const tokyoList = document.getElementById('tokyo_list');
const dubaiList = document.getElementById('dubai_list');
const parisList = document.getElementById('paris_list');
const limaList = document.getElementById('lima_list');

const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = []
function Stores(name, min, max, avg, avgCookiesSoldEachHourArray) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0,
  this.avgCookiesSoldEachHourArray = [];
  allStores.push(this);
}
Stores.prototype.getCustomersPerHour = function (){
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
},
Stores.prototype.calcCookiesPerHour = function(){
  for (let i = 0; i < hoursOpen.length; i++) {
    let hourlyCust = this.getCustomersPerHour();
    let hourlyCookies = Math.ceil(hourlyCust * this.avg);
    this.avgCookiesSoldEachHourArray.push(hourlyCookies);
    this.dailyTotal += hourlyCookies;
  }
},
Stores.prototype.renderList = function (){
  this.calcCookiesPerHour();
  for (let i = 0; i < hoursOpen.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hoursOpen[i]}: ${this.avgCookiesSoldEachHourArray[i]} cookies`;
    seattleList.append(li);
  }
  let liTotal = document.createElement('li');
  liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
  seattleList.appendChild(liTotal);
};

let seattleStore = new Stores('Seattle', 23, 65, 6.3);
seattleStore.renderList();
// console.log(seattleStore);
// Stores.prototype.render = function () {
//   let tr = document.createElement('tr');
//   let td = document.createElement('td');
//   td.textContent = this.name;
//   tr.appendChild(td);
//   for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++)
//     storeTable.appendChild
// }
Stores.prototype.sectionRender = function () {

};

// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avgCookiesSoldEachHourArray: [],
//   avg: 6.3,
//   dailyTotal: 0,
//   getCustomersPerHour: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hoursOpen.length; i++) {
//       let hourlyCust = this.getCustomersPerHour();
//       let hourlyCookies = Math.ceil(hourlyCust * this.avg);
//       this.avgCookiesSoldEachHourArray.push(hourlyCookies);
//       this.dailyTotal += hourlyCookies;
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hoursOpen.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hoursOpen[i]}: ${this.avgCookiesSoldEachHourArray[i]} cookies`;
//       seattleList.append(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//     seattleList.appendChild(liTotal);
//   }
// };
// seattle.render();

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgCookiesSoldEachHourArray: [],
  avg: 1.2,
  dailyTotal: 0,
  //get a random number of customers per hour
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //fill out the avgCookiesSold
  calcCookiesPerHour: function () {
    for (let i = 0; i < hoursOpen.length; i++) {
      let hourlyCust = this.getCustomersPerHour();
      let hourlyCookies = Math.ceil(hourlyCust * this.avg);
      this.avgCookiesSoldEachHourArray.push(hourlyCookies);
      this.dailyTotal += hourlyCookies;
    }
  },
  render: function () {
    //for each hour, create an li give it content and append to the list/DOM.
    this.calcCookiesPerHour();
    for (let i = 0; i < hoursOpen.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOpen[i]}: ${this.avgCookiesSoldEachHourArray[i]} cookies`;
      tokyoList.appendChild(li);
    }
    //also need to render the daily total
    // console.log('I am in the render method');
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
    tokyoList.appendChild(liTotal);
  }
};

tokyo.render();

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avgCookiesSoldEachHourArray: [],
  avg: 3.7,
  dailyTotal: 0,
  //get a random number of customers per hour
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //fill out the avgCookiesSold
  calcCookiesPerHour: function () {
    for (let i = 0; i < hoursOpen.length; i++) {
      let hourlyCust = this.getCustomersPerHour();
      let hourlyCookies = Math.ceil(hourlyCust * this.avg);
      this.avgCookiesSoldEachHourArray.push(hourlyCookies);
      this.dailyTotal += hourlyCookies;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hoursOpen.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOpen[i]}: ${this.avgCookiesSoldEachHourArray[i]} cookies`;
      dubaiList.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
    dubaiList.appendChild(liTotal);
  }
};
dubai.render();

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avgCookiesSoldEachHourArray: [],
  avg: 2.3,
  dailyTotal: 0,
  //get a random number of customers per hour
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //fill out the avgCookiesSold
  calcCookiesPerHour: function () {
    for (let i = 0; i < hoursOpen.length; i++) {
      let hourlyCust = this.getCustomersPerHour();
      let hourlyCookies = Math.ceil(hourlyCust * this.avg);
      this.avgCookiesSoldEachHourArray.push(hourlyCookies);
      this.dailyTotal += hourlyCookies;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hoursOpen.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOpen[i]}: ${this.avgCookiesSoldEachHourArray[i]} cookies`;
      parisList.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
    parisList.appendChild(liTotal);
  }
};
paris.render();


let lima = {
  name: 'lima',
  min: 2,
  max: 16,
  avgCookiesSoldEachHourArray: [],
  avg: 4.6,
  dailyTotal: 0,
  //get a random number of customers per hour
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //fill out the avgCookiesSold
  calcCookiesPerHour: function () {
    for (let i = 0; i < hoursOpen.length; i++) {
      let hourlyCust = this.getCustomersPerHour();
      let hourlyCookies = Math.ceil(hourlyCust * this.avg);
      this.avgCookiesSoldEachHourArray.push(hourlyCookies);
      this.dailyTotal += hourlyCookies;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hoursOpen.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOpen[i]}: ${this.avgCookiesSoldEachHourArray[i]} cookies`;
      limaList.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
    limaList.appendChild(liTotal);
  }
};
lima.render();

//gets the element
// const mycontainer = document.getElementById('container2');

// //Proof of Life get in the habit of doing this more
// console.log(mycontainer);

// //1.Create Element
// let section = document.createElement('section');
// //2.give it content
// let ul = document.createElement('ul');
// //3. append to the DOM
// mycontainer.appendChild(section);
// //Do this its important to do proof of life as you go

// // create element
// let img = document.createElement('img');
// //Content for this part
// img.src = 'img/tokyo.jpg';
// img.alt = 'picture of tokyo';
// // append
// section.appendChild(img);
// //proof of life

// //create article
// let article = document.createElement('article');
// //give content
// let h3 = document.createElement('h3');
// //give text content
// h3.textContent = 'Tokyo';
// //append to the dom
// section.appendChild(article);



