'use strict';
console.log('Hello World');
//gets the element
const mycontainer = document.getElementById('container');

//Proof of Life get in the habit of doing this more
console.log(mycontainer);

//1.Create Element
let section = document.createElement('section');
//2.give it content
let ul = document.createElement('ul');
//3. append to the DOM
mycontainer.appendChild(section);
//Do this its important to do proof of life as you go

// create element
let img = document.createElement('img');
//Content for this part
img.src = 'img/tokyo.jpg';
img.alt = 'picture of tokyo';
// append
section.appendChild(img);
//proof of life

//create article
let article = document.createElement('article');
//give content
let h3 = document.createElement('h3');
//give text content
//append to the dom
section.appendChild(article);

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],
  avg: 6.3,
  getCustomersPerHour: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function(){
    // calculate cookies for all 14 hours
    // write a for loop that uses the length of the hours array
    //in the loop
    let custThisHour = this.getCustomersPerHour();
    let cookiesSoldThisHour = Math.round(custThisHour * this.avg);
    //this.cookiesPerHourArray.push(cookiesSoldThisHour);
    console.log(`I Am in the calcCookiesPerHour method custThisHour: ${custThisHour} cookiesSoldThisHour: , ${cookiesSoldThisHour}`);
  },
  render: function(){
    this.calcCookiesPerHour();
    console.log('this is the render method');
  }
};

seattle.render();
