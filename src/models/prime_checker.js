const PubSub = require('../helpers/pub_sub.js')
const PrimeChecker = function(){
};


PrimeChecker.prototype.countNumber = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

PrimeChecker.prototype.bindEvents = function(){

  PubSub.subscribe('FormView:number-submitted', (event)=>{
    const inputtedNumber = event.detail;
    console.log('payload received in primechecker', inputtedNumber);
    const result = this.countNumber(inputtedNumber);
    console.log('result', result);
    PubSub.publish('PrimeChecker:result-calculated', result);
});





}








module.exports = PrimeChecker;
