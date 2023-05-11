//STEP 1

let userName = prompt('Enter your Name:');
let result = userName.length;
alert(`Your name has ${result} characters.`)


//STEP 2 check

let name2 = prompt('Enter your name: ');
let result2 = name2.toString();
alert(`Your name is ${result2} .`);


//STEP 3
 
let fName = prompt('Enter your first name: ');
let lName = prompt('Enter your last name: ');
let result3 = fName.concat(lName);
alert (`Your name is: ${result3}`);

//STEP 4

let story = "The quick brown fox jumps over the lazy dog";
alert(story.indexOf('fox'));


//STEP 5

let story2 = "The quick brown fox jumps over the lazy fox";
alert(story2.lastIndexOf('fox'));

//STEP 6

let story3 = "The quick brown fox jumped over the lazy dog";
let fullName = prompt('Enter your full name: ');

alert(story3.replace('the lazy dog',`${fullName}`))

//STEP 7

let story4 = "The quick brown fox jumps over the lazy dog";
let searchWord = prompt('Enter the word to search:');
alert(story4.search(`${searchWord}`));

//STEP 8

let old_string = "The quick brown fox jumps over the lazy dog";
let new_string = old_string.slice(31,43);
alert(new_string.toUpperCase());

//STEP 9

let story5 = "   THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG         ";
alert(story5.trim().toLowerCase());

//STEP 10


let story6 = "the quick brown fox jumps over the lazy dog";
word = story6.split(' ')
for (let i=0; i<word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)

}

let result10 = word.join(' ');
alert(result10)