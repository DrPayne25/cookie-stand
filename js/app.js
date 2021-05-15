// 'use strict';
// console.log('Hello World');
// //gets the element
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











const storeTable = document.querySelector('table');
let allstores = [];

const hoursOpen = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function Stores (name, min, max, cookiesSoldEachHour, avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.avgCookiesSoldEachHourArray = cookiesSoldEachHour;
  allstores.push(this);

}
Stores.prototype.render = function (){
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
for(let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++)
  storeTable.appendChild
}
Stores.prototype.sectionRender = function (){

};
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookiesSoldEachHourArray: [],
  avg: 6.3,
  //get a random number of customers per hour
  getCustomersPerHour: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //fill out the avgCookiesSold
  calcCookiesPerHour: function(){
    console.log(this.avgCookiesSoldEachHourArray);
    for (let i = 0; i < hoursOpen.length; i++){
      this.avgCookiesSoldEachHourArray.push(`${hoursOpen[i]}: ${Math.round(this.avg + this.getCustomersPerHour())} cookies`);
    }
    return this.avgCookiesSoldEachHourArray;
  },
  seattleList: function(){
    let ulListSeattle = document.getElementById('seattle_list');
    for (let i = 0; i < seattle.avgCookiesSoldEachHourArray.length; i++){
      let ulListItem = document.createElement('li');
      ulListItem.innerHTML = seattle.avgCookiesSoldEachHourArray[i];
      ulListSeattle.appendChild(ulListItem);
    }
  }
};

seattle.seattleList();

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgCookiesSoldEachHourArray: [],
  avg: 1.2,
  dailyTotal: 0,
  //get a random number of customers per hour
  getCustomersPerHour: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //fill out the avgCookiesSold
  calcCookiesPerHour: function(){
    for (let i = 0; i < hoursOpen.length; i++){
      let hourlyCust = this.getCustomersPerHour();
      let hourlyCookies = Math.ceil(hourlyCust * this.avg);
      this.avgCookiesSoldEachHourArray.push(hourlyCookies);
      this.dailyTotal += hourlyCookies;
    }
  },
  render: function (){
    //for each hour, create an li give it content and append to the list/DOM.
    this.calcCookiesPerHour();
    for (let i = 0; i < hoursOpen.length; i++){
      let tokyoList = document.getElementById('tokyo_list');
      let li = document.createElement('li');
      li.textContent = `${hoursOpen[0]}: ${this.avgCookiesSoldEachHourArray[i]} cookies`;
      tokyoList.appendChild(li);
    }
    //also need to render the daily total
    // console.log('I am in the render method');
    let liTotal = document.createElement('li');
    liTotal.innerHTML = `Total: ${this.dailyTotal} cookies`;
    this.tokyoList.appendChild(liTotal);
  }
};

tokyo.render();

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avgCookiesSoldEachHourArray: [],
  avg: 3.7,
  //get a random number of customers per hour
  getCustomersPerHour: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //fill out the avgCookiesSold
  calcCookiesPerHour: function(){
    for (let i = 0; i < hoursOpen.length; i++){
      let hourlyCust = this.getCustomersPerHour();
      let hourlyCookies = Math.ceil(hourlyCust * this.avg);
      this.avgCookiesSoldEachHourArray.push(hourlyCookies);
      this.dailyTotal += hourlyCookies;
    }
  },
  render: function (){
    //for each hour, create an li give it content and append to the list/DOM.
    this.calcCookiesPerHour();
    for (let i = 0; i < hoursOpen.length; i++){
      let dubaiList = document.getElementById('dubai_list');
      let li = document.createElement('li');
      li.textContent = `${hoursOpen[0]}: ${this.avgCookiesSoldEachHourArray[i]} cookies`;
      dubaiList.appendChild(li);
    }
  }
};
dubai.render();

let lima = {
  name: 'lima',
  min: 2,
  max: 16,
  avgCookiesSoldEachHourArray: [],
  avg: 4.6,
  //get a random number of customers per hour
  getCustomersPerHour: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //fill out the avgCookiesSold
  calcCookiesPerHour: function(){
    for (let i = 0; i < hoursOpen.length; i++){
      this.avgCookiesSoldEachHourArray.push(`${hoursOpen[i]}: ${Math.round(this.avg + this.getCustomersPerHour())} cookies`);
    }
    return this.avgCookiesSoldEachHourArray;
  },
};
// console.log(seattle.calcCookiesPerHour());
// function seattleList() {
//   let ulListSeattle = document.getElementById('seattle_list');
//   for (let i = 0; i < seattle.avgCookiesSoldEachHourArray.length; i++){
//     let ulListItem = document.createElement('li');
//     ulListItem.innerHTML = seattle.avgCookiesSoldEachHourArray[i];
//     ulListSeattle.appendChild(ulListItem);
//   }
// }
// seattleList();

// console.log(tokyo.calcCookiesPerHour());
// function tokyoList() {
//   let ulListTokyo = document.getElementById('tokyo_list');
//   for (let i = 0; i < tokyo.avgCookiesSoldEachHourArray.length; i++){
//     let ulListItem = document.createElement('li');
//     ulListItem.innerHTML = tokyo.avgCookiesSoldEachHourArray[i];
//     ulListTokyo.appendChild(ulListItem);
//   }
// }
// tokyoList();

// console.log(dubai.calcCookiesPerHour());
// function dubaiList() {
//   let ulListDubai = document.getElementById('dubai_list');
//   for (let i = 0; i < dubai.avgCookiesSoldEachHourArray.length; i++){
//     let ulListItem = document.createElement('li');
//     ulListItem.innerHTML = dubai.avgCookiesSoldEachHourArray[i];
//     ulListDubai.appendChild(ulListItem);
//   }
// }
// dubaiList();

// console.log(paris.calcCookiesPerHour());
// let ulListParis = document.getElementById('paris_list');
// for (let i = 0; i < paris.avgCookiesSoldEachHourArray.length; i++){
//   let ulListItem = document.createElement('li');
//   ulListItem.innerHTML = paris.avgCookiesSoldEachHourArray[i];
//   ulListParis.appendChild(ulListItem);
// }
// console.log(lima.calcCookiesPerHour());
// let ulListLima = document.getElementById('lima_list');
// for (let i = 0; i < lima.avgCookiesSoldEachHourArray.length; i++){
//   let ulListItem = document.createElement('li');
//   ulListItem.innerHTML = lima.avgCookiesSoldEachHourArray[i];
//   ulListLima.appendChild(ulListItem);
// }
