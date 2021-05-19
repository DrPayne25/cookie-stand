
let cookieTable = document.querySelector('table');
const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = []
function Stores (name, min, max, avg,) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0,
  this.avgCookiesSoldEachHourArray = [];
  allStores.push(this);
  this.render();
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
Stores.prototype.render = function (){
  this.calcCookiesPerHour();
  let tableRow = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  for (let i = 0; i < hoursOpen.length; i++){
    let tableData = document.createElement('td');
    tableData.textContent = this.avgCookiesSoldEachHourArray[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.dailyTotal;
  tableRow.appendChild(tableData);
  cookieTable.appendChild(tableRow)
}

function cookieHeader() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  thead.appendChild(th)

  for (let i = 0; i < hoursOpen.length; i++){
    th = document.createElement('th');
    th.textContent = hoursOpen[i];
    thead.appendChild(th);
    }
    th = document.createElement('th');
    th.textContent = 'Total';
    thead.appendChild(th);
    cookieTable.appendChild(thead);
  };
  
  cookieHeader();

  function cookieFooterRender() {
    let tfoot = document.createElement('tfoot');
    let tr = document.createElement('tr');
    tfoot.appendChild(tr);
    let td = document.createElement('td');
    tfoot.appendChild(td)
  
    for (let i = 0; i < hoursOpen.length; i++){
      td = document.createElement('td');
      td.textContent = hoursOpen[i];
      tfoot.appendChild(td);
      }
    };
cookieFooterRender();

let seattleStore = new Stores('Seattle', 23, 65, 6.3);
let tokyoStore = new Stores('Tokyo', 3, 24, 1.2);
let dubaiStore = new Stores('Dubai', 11, 38, 3.7);
let parisStore = new Stores('Paris', 20, 38, 2.3);
let limaStore = new Stores('Lima', 2, 16, 4.6);


