
let cookieTable = document.querySelector('table');
let cookieTableFooter = document.querySelector('tfoot');
const storeForm = document.getElementById('store-form');
const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];
function Stores (name, min, max, avg){
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
  cookieTable.appendChild(tableRow);
};

function cookieHeader() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  thead.appendChild(th);

  for (let i = 0; i < hoursOpen.length; i++){
    th = document.createElement('th');
    th.textContent = hoursOpen[i];
    thead.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Total';
  thead.appendChild(th);
  cookieTable.appendChild(thead);
}

cookieHeader();

function handleStoreData(event){
  event.preventDefault();
  let storeName = event.target.name.value;
  let minimumcustomers = +event.target.minimumcustomers.value;
  let maxcustomers = +event.target.maxcustomers.value;
  let avgcookiessold = +event.target.avgcookiessold.value;
  let newStore = new Stores(storeName, minimumcustomers, maxcustomers, avgcookiessold);
  allStores.push(newStore);
  cookieTableFooter.innerHTML = '';
  cookieFooterRender();
  event.target.name.value = '';
  event.target.minimumcustomers.value = '';
  event.target.maxcustomers.value = '';
  event.target.avgcookiessold.value = '';
  event.target.avgcookiessold.value = '';
}

function cookieFooterRender() {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);
  for (let i = 0; i < hoursOpen.length; i++){
    let z = document.createElement('td');
    let columTotal = 0;
    for(let j = 0; j < allStores.length; j++){
      columTotal += allStores[j].avgCookiesSoldEachHourArray[i];
    }
    z.textContent = columTotal;
    tr.appendChild(z);
  }
  let totalTotal = 0;
  for (let i = 0; i < allStores.length; i++){
    totalTotal += allStores[i].dailyTotal;
  }
  let grandTotal = document.createElement('td');
  grandTotal.textContent = totalTotal;
  tr.appendChild(grandTotal);
  cookieTableFooter.appendChild(tr);
}
cookieFooterRender();

let seattleStore = new Stores('Seattle', 23, 65, 6.3);
let tokyoStore = new Stores('Tokyo', 3, 24, 1.2);
let dubaiStore = new Stores('Dubai', 11, 38, 3.7);
let parisStore = new Stores('Paris', 20, 38, 2.3);
let limaStore = new Stores('Lima', 2, 16, 4.6);

cookieFooterRender();


storeForm.addEventListener('submit', handleStoreData);
