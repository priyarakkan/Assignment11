//STEP 1

var daysInMonth = (year, month) => new Date(year, month, 0).getDate();
console.log(daysInMonth(2020, 12));

//STEP 2

var monthName = function(dt){
mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
     return mlist[dt.getMonth()];
};
console.log(monthName(new Date("10/11/2024")));

//STEP 3

let Weekend = (d = new Date()) => d.getDay() % 6 === 0;

console.log(Weekend());

//STEP 4

let date = new Date();
 let yesterday =date.setDate(date.getDate() - 1);
console.log(date.getDay())
var dayName = function(dts){
    dlist = [ "Sunday", "Monday", "Tuesday", "wednesday", "thursday", "Friday", "Satureday" ];
      return dlist[dts.getDay()];
    };
    console.log(dayName(new Date))
    


//STEP 5

let currentDate = new Date();
var dayName = function(dts){
    dlist = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satureday" ];
      return dlist[dts.getDay()];
    };
    console.log(dayName(new Date).charAt(0));
