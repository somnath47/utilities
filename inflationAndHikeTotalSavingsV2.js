var years = 60;
var money = 60000;
/* var infRate = 2; */
var avgInfRate = 7.50;
var moneySum = 0;
var avgHike = 30;
var afterYears = 1;
var currentYear = 2019;

/* while(years > 0) {
  for (i=0; i<10; i++) {
    moneySum = moneySum + money;
    console.log("Money: ",money);
  }
  years = years - 10;
  money = money * infRate;
} */

while (years > 0) {
	// Sum Total of Entire 60 years of Salary/Profit
  moneySum = moneySum + money;
  
  // Adding Average Inflession Rate for the next fincial Year
 	money = money + parseInt(((money * avgInfRate)/100));
  console.log("Inflated Money Value: ",convertToInr(money));
  // Calculating Average hike for the next financial Year
  if(money < 100000)
  	avgHike = 50;
  else if (money > 20000 && avgHike > 30)
  	avgHike = avgHike - 7;
  else if(avgHike >= 10 && avgHike >= 20) 
  	avgHike = avgHike - 5
  else if(avgHike >= 10 && avgHike < 20)
  	avgHike = avgHike - 3
 
 	if(money >= 550000) avgHike = 7.50;
  
	 // Adding Hike for the next finacial year
  money = money + parseInt(((money * avgHike)/100)); 
 	years--;
  
  console.log("Year Count: " + afterYears + ", Year: " + currentYear);
 		console.log("Money After getting a hike of - " + avgHike + "% is: ",		convertToInr(money));
  console.log("------------------------------------------------")
  
  afterYears++; currentYear++;
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
