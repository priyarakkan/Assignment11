//STEP 1

function string1(input1) {
    input1 = input1.toLowerCase().split('');
    let  output1 = input1.sort().join('');;
 
    console.log(output1)
    return   
}
string1('daughter')

//STEP 2

function string2(input2) {
    let arrWords = input2.split(' ')
     
for (let i=0; i<arrWords.length; i++) {
    arrWords[i] =  arrWords[i].charAt(0).toUpperCase() +  arrWords[i].slice(1)
    
}
console.log(arrWords.join(' '))
}
string2('i love my daughter')


// //STEP 3

function string3(str) {
    let count = str.match(/[aeiou]/gi).length;
    console.log(count)
    return count;
}
let str = prompt('enter a string:');
let result = string3(str)

//STEP 4
//Write a JavaScript function that generates a string id (specified length) of random characters.

//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
function string4(input4) {
    let id = Math.random(input4);
    console.log(id)

}
let input4 = prompt('enter the string to generate id:')
let output4 = string4(input4)
//STEP 5


function Longest_Country_Name() {
   
}


Longest_Country_Name(["Australia", "Germany", "United States of America"])
