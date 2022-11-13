// PALINDROME –A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward 
// Write a program that checks whether a word or a phrase is a palindrome or not. 
// Examples of a palindromes 
// (race car) 
//  examples kayak, reviver, racecar, madam, and refer
let str="reviver"

const palidrome=()=>{
let caseSentive=str.toLowerCase()
let resulst=""
for(let i=caseSentive.length-1; i>=0; i--){
    resulst+=caseSentive[i]
}
return caseSentive===resulst
}
console.log(palidrome());