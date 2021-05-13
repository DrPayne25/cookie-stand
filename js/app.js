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
    this.cookiesPerHourArray.push(cookiesSoldThisHour);
    console.log('I Am in the calcCookiesPerHour method ', 'custThisHour: ', custThisHour, 'cookiesSoldThisHour: ', cookiesSoldThisHour);
  },
  render: function(){
    this.calcCookiesPerHour();
    console.log('this is the render method');
  }
};

seattle.render();
