const PubSub = require('../helpers/pub_sub.js')
const ResultView = function(){

};

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');

  resultElement.textContent = ` It is ${result} that ${number.value} is a Prime Number.`
}

ResultView.prototype.bindEvents = function(){

  PubSub.subscribe('PrimeChecker:result-calculated', (event)=>{
    const primeChecker = event.detail;
    // const inputtedNumber = event.detail;
    console.log('payload received in resultview', primeChecker);
    this.displayResult(primeChecker);
  });

};




module.exports = ResultView;
