// function canNest(arr1, arr2) {
// 	if(!(Array.isArray(arr1) && (Array.isArray(arr1) ))){
// 		return "it must be array"
// 	}
// 	let arr1Sorted = arr1.sort();
// 	let arr2Sorted = arr2.sort();
// 	let minarr1 = arr1Sorted[0];
// 	let minarr2 = arr2Sorted[0];
// 	let maxarr1 = arr1Sorted[arr1.length-1];
// 	let maxarr2 = arr2Sorted[arr2.length-1];
	
// 	if (minarr1>= minarr2 && maxarr1<= maxarr2){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }
// let result = canNest([1,2,3,4], [2,6]);
// console.log(result);

function isMagicArray(a){
    var sum=0;
    for(i=0; i<a.length; i++){
        var num = a[i];
        if(num == 2){
            sum = sum + num;
        }
        var isPrime = true; 
        if(num>2){
            for(j=2; j<= Math.sqrt(num);j++){
                if(num % j === 0){
                   isPrime=false;
                }
            }
            
            if(isPrime){
                sum = sum + num;
             }
        }
       
    }
    if(a[0]=== sum){
        return 1;
    }
    else{
        return 0;
    }
    
}
console.log(isMagicArray([21,3,7,9,1,4,6]));

// function detectWord(word){
//     var hidden = "";
//     for(i=0;i<word.length;i++){
//         var singleChar = word.charAt(i);
//         // 
//         if(singleChar === singleChar.toLowerCase()){
//             hidden+=singleChar;
//         }
//     }
//     return hidden;
// }
// let result = detectWord("AJKDcJKHFaDKJHtASD");
// console.log(result);

// function hiddenWord(givenString){
//     console.log("original string",givenString);
//     let stringArrays = givenString.split("");
//     console.log("after converted to array",stringArrays);

//     let smallLetters = stringArrays.filter(
//         (singleLetter) => singleLetter !== singleLetter.toUpperCase()
//     );
//    smallLetters = smallLetters.join("");
//    return smallLetters;

// }
// console.log(hiddenWord("ADFhADAiAFD"));

 /* Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4] */

// function getOnlyEvens(arr){
//     var even="";
//     if(!(Array.isArray(arr))){
//         return "values need to be array"
//     }
//     else{
//         for(i=0;i<arr.length;i++){
//             if(arr[i]%2 === 0){
//                 even+=arr[i];
//             }
//         }
//         return even; 
//     }
// }
// let arr=[];
// let result=getOnlyEvens([1, 2, 3, 6, 4, 8]);
// arr = [...result];
// console.log(arr);



/* Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32 */
// function reverseCompare(num){
//     var reverseNum = num.toString().split('').reverse().join('');
//     if(num>reverseNum){
//         return "Ok";
//     }
//     else{
//         return "Not ok"
//     }

// }
// let res=reverseCompare(72);
// console.log(res);

/* 
Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1 */
/* function returnFactorial(num){
    if(num<0){
        return "number must be postive"
    }
    let result = 1;
    for(i=2;i<=num;i++){
        result*=i;
    }
    return result;
}
console.log(returnFactorial(5)); */

/* 
A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6 */