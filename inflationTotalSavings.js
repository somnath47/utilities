var years = 70;
var money = 300000;
var infRate = 2;
var moneySum = 0;

while(years > 0) {
  for (i=0; i<10; i++) {
  	moneySum = moneySum + money;
  	console.log("Money: ",money);
  }
  years = years - 10;
  money = money * infRate;
}

function convertToInr(x) {
	x=x.toString();
  var lastThree = x.substring(x.length-3);
  var otherNumbers = x.substring(0,x.length-3);
  if(otherNumbers != '')
      lastThree = ',' + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  
  return res;
}

console.log(convertToInr(moneySum));
