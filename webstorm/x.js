

//https://www.youtube.com/watch?v=tcoiPHktCwQ
// https://github.com/bradtraversy/javascript_cardio/blob/master/session3/index_start.js

//#region session 1

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
let reverseString_str = 'hello'
//console.log('%c reverseString('+ reverseString_str +'):','color: red; font-style: italic;', reverseString(reverseString_str));
function reverseString(str) {
    // lange manier met onnodige vaiable
    /*
    const strArray = str.split('')
    strArray.reverse()
    return strArray.join()
*/
    //------------------------------------------------------------------
    // korte manier
    /*
    return str.split('').reverse().join('')
*/
    //------------------------------------------------------------------
    // zonder reverse  For-loop  :  i = str.length - 1
    /*
    let reverseString = '';
    for(let i = str.length - 1; i >= 0 ; i--){
        reverseString = reverseString + str[i]
    }
   return reverseString
*/
    //------------------------------------------------------------------
    // zonder reverse  For-loop  :  i = 0
    /*
    let reverseString = '';
    for(let i = 0; i <= str.length - 1; i++){
        reverseString = str[i] + reverseString
    }
    return reverseString
*/
    //------------------------------------------------------------------
    // zonder reverse   For-loop  :   let char of str)
     /*
       let reverseString = '';
       for(let char of str){
           reverseString = char + reverseString
       }
       return reverseString
*/
    //------------------------------------------------------------------
    // zonder reverse str.split('').forEach
    /*
    let reverStr = ''
    str.split('').forEach(function(char) {   //    str.split('').forEach(char => {
        reverStr = char + reverStr
    })
    return reverStr
*/
    //------------------------------------------------------------------
    // met reduce
    /*
        return str.split('').reduce(function (revString, char){
        return char + revString;
    },'')
    */
    // met reduce
    return str.split('').reduce((revString, char) => char + revString, ' : <- dit is het omgekeerd woord')

}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
let Palindrome_str = 'hallo'
//console.log('%c isPalindrome(' + Palindrome_str + '):','color: red; font-style: italic;', isPalindrome(Palindrome_str));
function isPalindrome(str) {
    // simpel manier
    let revString = str.split('').reverse().join('');
    return revString === str

}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
let reverseInt_int = 521
//console.log('%c reverseInt('+reverseInt_int +'):','color: red; font-style: italic;', reverseInt(reverseInt_int));
function reverseInt(int) {
    // zonder rekening te houden met negatieve getallen
    //return parseInt(int.toString().split('').reverse().join(''))
    // met  rekening te houden met negatieve getallen
    return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int)
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
let capitalizeLetters_string = 'i love javascript'
//console.log('%c capitalizeLetters('+ capitalizeLetters_string +'):','color: red; font-style: italic;', capitalizeLetters(capitalizeLetters_string));
function capitalizeLetters(str) {
    //For-loop   met substring
    /*
   const strArr = str.toLowerCase().split(' ');
   for (let i = 0 ; i < strArr.length; i++){
       strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
   }
   return strArr.join(' ');
 */
    //------------------------------------------------------------------

    //var Array  met  charAt en concat
    /*
    let strArrayUpper = []
    str.toLowerCase().split(' ').forEach(word => {
        strArrayUpper.push(word.charAt(0).toUpperCase().concat( word.slice(1,)))
    })
    return strArrayUpper.join(' ')
    */
    //------------------------------------------------------------------
    // met Map()
    /*
    return str.toLowerCase().split(' ').map(function (word){
         return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
   */
    // met Map()
    //return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    //------------------------------------------------------------------
    // met replace(/\b[a-z]/gi
    /*
    return str.replace(/\b[a-z]/gi, function (char ){
        return char.toUpperCase()
    });*/

    // met replace(/\b[a-z]/gi
    return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
let maxCharacter_string = 'javascript'
//console.log('%c maxCharacter('+ maxCharacter_string+'):','color: red; font-style: italic;', maxCharacter(maxCharacter_string));
function maxCharacter(str) {
    // for-loop en if/else-statment,     includes ,  puch
    /*
    let arrayStr = []
    let hoogsteLetter = ''
    for (let i = 0; i < str.length; i++){

        if (arrayStr.includes(str[i])){
            hoogsteLetter = str[i]
        }
        else {
            arrayStr.push(str[i])
        }
    }
    return hoogsteLetter */
    //------------------------------------------------------------------
    // if(charMap[char]){  charMap[char]++  ,  for (let char in charMap){

    const charMap = {}
    let maxNum = 0
    let maxChar = ''
    str.split('').forEach(char => {
        if(charMap[char]){
            charMap[char]++
        }
        else {
            charMap[char] = 1
        }
    });
    for (let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char]
            maxChar = char
        }
    }
    return maxChar

}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz",
// for multiples of 5 print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".
//console.log('%c fizzBuzz():','color: red; font-style: italic;',); fizzBuzz();
function fizzBuzz() {
    // for loop
    for (let i = 1; i <= 100; i++){
        if(i % 15 === 0){
            console.log('FizzBuzz')
        }
        else if(i % 3 === 0){ console.log('Fizz')}
        else if(i % 5 === 0){ console.log('Buzz')}
        else {console.log(i)}
    }

    // while loop
    /*
    let tellenVan = 1
    let tellenTot = 100
    while (tellenVan < tellenTot + 1){
        if(tellenVan % 15 === 0){   // of (tellenVan % 3 === 0 && tellenVan % 5 === 0 )
            console.log('FizzBuzz')
        }
        else if(tellenVan % 3 === 0){
            console.log('Fizz')
        }
        else if(tellenVan % 5 === 0 ){
            console.log('Buzz')
        }
        else {
            console.log(tellenVan)

        }
        tellenVan++
    }
     */
}

//#endregion


//#region session 2
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
let langsteWoord = '';
let arrayLangeWorden = []
let longestWord_sen = "Hi, my name is Brad"
console.log(' %c longestWord(' + longestWord_sen +' )','color: red' , longestWord(`${longestWord_sen}`));
function longestWord(sen) {
    // CHALLENGE 1 - Return a single longest word
   /*
    sen.split(' ').forEach(word => {
        if(langsteWoord === undefined){ langsteWoord = word}
        if(word.length > langsteWoord.length){
            langsteWoord = word
        }
    })
    return langsteWoord
*/
    //-------------------------------------------

    // met sort a,b  => return a.length - b.length
    /*
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    const sorted = wordArr.sort((a,b) => {
      return a.length - b.length
    })
    return sorted[sorted.length -1]
    */
    //-------------------------------------------


    // CHALLENGE 2 - Return an array and include multiple words if they have the same length
    /*
    sen.split(' ').forEach(word => {
        if (langsteWoord === undefined){
            langsteWoord = word
        }
        if(langsteWoord.length < word.length){
            langsteWoord = word
        }
    })
    sen.split(' ').forEach(word => {
        if(langsteWoord.length === word.length){
            arrayLangeWorden.push(word)
        }
    })
    return arrayLangeWorden
*/
    //-------------------------------------------


    //-------------------------------------------
    /*
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    const sorted = wordArr.sort((a,b) => {
        return a.length - b.length
    })
    const langsteWoord = sorted[sorted.length -1]
    sorted.forEach(word =>{
        if(langsteWoord.length === word.length){
            arrayLangeWorden.push(word)
        }
    })
    return arrayLangeWorden
     */

    //_______________________________________________

    // CHALLENGE 3 - Only return an array if multiple words, otherwise return a string
/*
  sen.split(' ').forEach(word => {
      if (langsteWoord === undefined){
          langsteWoord = word
      }
      if(langsteWoord.length < word.length){
          langsteWoord = word
      }
  })
  sen.split(' ').forEach(word => {
      if(langsteWoord.length === word.length){
          arrayLangeWorden.push(word)
      }
  })
  return arrayLangeWorden.length  !== 1 ? arrayLangeWorden : langsteWoord
*/
    //_______________________________________________


}
// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

let chunkArray_arr =  [1, 2, 3, 4, 5, 6, 7]
let chunkArray_len = 3
let newArray = [];
let supArray = []
console.log(' %c chunkArray([' + chunkArray_arr + '], '+chunkArray_len +' )','color: red' , chunkArray(`${chunkArray_arr}, ${chunkArray_len}`));
function chunkArray(arr, len) {

   for(let i = 0; i < len; i++){
       supArray.push(arr[i])
   }
   return supArray




}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}




//#endregion
// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes() {}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy() {}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() {}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() {}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}
//#region session 3



//#endregion

// leg de box-model uit
/*
elementen op de pagina zijn verdeeld een boxen
in rechthoeken om percies te zijn
ookal is het element zo gestyled dat het rond is

box-model is een tamplate van hoe deze elementen plaats innemen op de website


box-model is opgedeeld in  content , padding , border , margin

content is onze content vb tekst in een p (paragraaf)
dan heb je de padding  in de plaats tussen de content en de border
dan een border is optioneeel
dan de margen  is de ruimte rond het element  dus hoever elementen van alkaar af staan

* */

// verschil tussen flex en grind
/*
********** flex
flex word vooral gebruikt om rijen of kolomen te maken dus is slechts een dimensie  (1D)
je kan wel flex-wrap er op zetten waardaar de elementen naar de volgende rij / kolom gaat

********** grid
grind word gebruikt om 2 dimetentonale (2D) layout te maken
je kan zijen en kolommen maken en zeggen waar een element moet staan in de grind

* */






