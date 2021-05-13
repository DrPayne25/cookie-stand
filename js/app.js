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
// h3.textContent = ''
// //append to the dom
// section.appendChild(article);













const hoursOpen = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const Stores = [seattle, tokyo, dubai, paris, lima];

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
    for (let i = 0; i < hoursOpen.length; i++){
      this.avgCookiesSoldEachHourArray.push(Math.round(this.avg + this.getCustomersPerHour()));
    }
    return this.avgCookiesSoldEachHourArray;
  },
};
let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgCookiesSoldEachHourArray: [],
  avg: 1.2,
  //get a random number of customers per hour
  getCustomersPerHour: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //fill out the avgCookiesSold
  calcCookiesPerHour: function(){
    for (let i = 0; i < hoursOpen.length; i++){
      this.avgCookiesSoldEachHourArray.push(Math.round(this.avg + this.getCustomersPerHour()));
    }
    return this.avgCookiesSoldEachHourArray;
  },
};
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
      this.avgCookiesSoldEachHourArray.push(Math.round(this.avg + this.getCustomersPerHour()));
    }
    return this.avgCookiesSoldEachHourArray;
  },
};
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avgCookiesSoldEachHourArray: [],
  avg: 2.3,
  //get a random number of customers per hour
  getCustomersPerHour: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //fill out the avgCookiesSold
  calcCookiesPerHour: function(){
    for (let i = 0; i < hoursOpen.length; i++){
      this.avgCookiesSoldEachHourArray.push(Math.round(this.avg + this.getCustomersPerHour()));
    }
    return this.avgCookiesSoldEachHourArray;
  },
};
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
      this.avgCookiesSoldEachHourArray.push(Math.round(this.avg + this.getCustomersPerHour()));
    }
    return this.avgCookiesSoldEachHourArray;
  },
};
