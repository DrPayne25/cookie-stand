
let cookieTable = document.querySelector('table');
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

  function cookieFooter() {
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
cookieFooter();
  // tableRow.appendChild(tableData);

  // Stores.prototype.renderList = function (){
  //   this.calcCookiesPerHour();
  //   let h3 = document.createElement('h3');
  //   h3.textContent = this.name;
  //   seattleList.append(h3);
  //   for (let i = 0; i < hoursOpen.length; i++) {
  //     let li = document.createElement('li');
  //     li.textContent = `${hoursOpen[i]}: ${this.avgCookiesSoldEachHourArray[i]} cookies`;
  //     seattleList.append(li);
  //   }
  //   let liTotal = document.createElement('li');
  //   liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
  //   seattleList.append(liTotal);
  // },
  
  // for (let i = 0; i < storeLocations.length; i++)
  // let thTitle = document.createElement('tr');
  // thScope.textContent = this.name[i]


// function generateTableHead(table){
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = documnet.createElement('th');
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }

let seattleStore = new Stores('Seattle', 23, 65, 6.3);
let tokyoStore = new Stores('Tokyo', 3, 24, 1.2);
let dubaiStore = new Stores('Dubai', 11, 38, 3.7);
let parisStore = new Stores('Paris', 20, 38, 2.3);
let limaStore = new Stores('Lima', 2, 16, 4.6);
seattleStore.renderTable

