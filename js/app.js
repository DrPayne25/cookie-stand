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





const seattleList = document.getElementById('sales');

const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = []
function Stores(name, min, max, avg,) {
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
  let h3 = document.createElement('h3');
  h3.textContent = this.name;
  seattleList.append(h3);
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
let tokyoStore = new Stores('Tokyo', 3, 24, 1.2);
let dubaiStore = new Stores('Dubai', 11, 38, 3.7);
let parisStore = new Stores('Paris', 20, 38, 2.3);
let limaStore = new Stores('Lima', 2, 16, 4.6);
seattleStore.renderList();
tokyoStore.renderList();
dubaiStore.renderList();
parisStore.renderList();
limaStore.renderList();
// let storeData = ['Seattle', 23, 65, 6.3], ['Tokyo', 3, 24, 1.2], ['Dubai', 11, 38, 3.7], ['Paris', 20, 38, 2.3], ['Lima', 2, 16, 4.6];
// store
// console.log(seattleStore);
// Stores.prototype.render = function () {
//   let tr = document.createElement('tr');
//   let td = document.createElement('td');
//   td.textContent = this.name;
//   tr.appendChild(td);
//   for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++)
//     storeTable.appendChild
// }
// Stores.prototype.sectionRender = function () {

// };




