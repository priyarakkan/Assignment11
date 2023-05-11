//STEP 1

function string1(input1) {
    input1 = input1.toLowerCase().split('');
    output = input1.sort().join('');
    console.log(output)
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


//STEP 3

function string3(input3) {
    let count = input3.match(/[aeiou]/gi).length;
    console.log(count)
    return count;
    
 
}
string2('i love my daughter')

//STEP 4
//Write a JavaScript function that generates a string id (specified length) of random characters.

//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA


//STEP 5
//Write a JavaScript function that accepts a list of country names as input 
//and returns the longest country name as output.

//Sample Data and Output
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output: "United States of America"

function Longest_Country_Name([array]) {
    console.log(array[0])
}


Longest_Country_Name(["Australia", "Germany", "United States of America"])
