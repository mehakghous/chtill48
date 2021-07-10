// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// var value = +prompt("enter value of base");
// var raised = +prompt("enter value of power");
// function power(a,b) {
//     var result = Math.pow(a,b);
//     return result;

// }
// alert(power(value,raised));


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

// var year = +prompt("enter year");
// function leapYear(year) {
//     if (year%4 ==0) {
//         alert(year + " is a leap year");

//     }else{
//         alert(year + " is not a leap year")
//     }

// }
// leapYear(year);


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// var a = +prompt("enter length of side a");
// var b = +prompt("enter length of side b");
// var c = +prompt("enter length of side c");
// var s;
// var area;
// function findingS(a,b,c) {
//  s = (a+b+c)/2
// return s;
// 
// }
// function areaOfTriangle(areaofTriangle) {
// area = findingS(a,b,c)*(findingS(a,b,c)-a)*(findingS(a,b,c)-b)*(findingS(a,b,c)-c)
// return area;
// }
// alert(areaOfTriangle(area));


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


// var sub1 = +prompt("enter marks in subject 1");
// var sub2 = +prompt("enter marks in subject 2");
// var sub3 = +prompt("enter marks in subject 3");
// var totalMarks = 300;
// var Percentage;
// function averageMarks(a,b,c) {
// var average = (a+b+c)/3
// return average;

// }
// function percentage(percent){
//     var marksObtained = sub1 + sub2 +sub3
//     Percentage = (marksObtained/totalMarks) *100
//     return Percentage
// }
// function main(params) {
//     alert("the average marks of student is "+ averageMarks(sub1, sub2, sub3));
//     alert("the percentage of  student is "+ percentage (Percentage));
// }
// main();

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// var string = "mehak"
// var input = prompt("input any character")
// function indexOf(String,character) {
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] == input) {
//             return i
//         }

//     }
//     return -1
// }
// alert(indexOf(string,input))


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// var sentence = prompt("enter sentence");
// var vowels = ["a","e","i","o","u"];
// 
// function dltVowels(Sentence) {
// Sentence = Sentence.toLowerCase().split("");
// for (let i = 0; i < Sentence.length; i++) {
// if (vowels.includes(Sentence[i])) {
// Sentence[i] = ""
// } 
// }
// return Sentence.join("");
// }
// alert(dltVowels(sentence));

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// var sent = "Pleases read this application and give me gratuity"
// function vowels(sentence) {
//     var count = 0;
//     sentence = sentence.toLowerCase()
//     for (let i = 0; i < sentence.length; i++) {
//         switch (sentence[i] + sentence[i + 1]) {
//             case "ae":
//             case "io":
//             case "ea":
//             case "ui":
//             case "iu": {
//                 count++
//                 break;
//             }
//             default:
//                 break;
//         }
//     }
//     return count
// }
// alert(vowels(sent))



// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// var distance = prompt("enter the distance between your house to jawan pakistan in 'km'");
// function inFeets(dis) {
//     dis = dis*3280.84 //1 kilo meter is equal to 3280.84feets
//     return dis + " Feets";
// }
// function inMeter(dis) {
//     dis = dis*1000 //1 kilo meter is equal to 1000meter
//     return dis + " meters";

// }
// function inCenti(dis) {
//     dis = dis*100000 //1 kilo meter is equal to 100000centimeter
//     return dis + " centimeters";

// }
// alert(inFeets(distance));
// alert(inMeter(distance));
// alert(inCenti(distance));

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// var hours = +prompt("enter no. of hours you have worked today");
// var forOneHour = 12
// var pay;
// function overTime() {
//     if (hours > 40) {
//         pay = (hours-40)*forOneHour

//     } else {
//        alert("no overtime today!!") 
//     }
//     return pay;
// }
// alert(overTime())


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// var input = +prompt("enter amount to be withdrawn in hundreds");
// function total(amount) {
//     var hundreds = (amount - (amount % 100)) / 100;
//     amount -= hundreds * 100;
//     var fiftys = (amount - (amount % 50)) / 50;
//     amount-=fiftys * 50;
//     var tens = (amount - (amount % 10)) / 10;
//     return [hundreds,fiftys,tens];
// }
// alert(total(input));


// ch 43-48


// 1. Show an alert box on click on a link.
// answer showed in html


// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
// ans in html 

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// function dlt(index) {
//     document.getElementsByClassName("list")[index].style.display = "none";
// }

// method 2
// 
// const data = ["John","Irfan","Imran","Mehak"]
// 
// function render() {
    // var innerHtml = "";
    // for (var i = 0; i < data.length; i++) {
        // innerHtml += `<div>${i}  ${data[i]}   40 <button onClick="dlt(${i})">Delete</button>   </div> `;
    // }
    // document.getElementById("list-container").innerHTML = innerHtml;
// }
// 
// function dlt(i) {
    // data.splice(i,1);
    // render();
// }
// 
// render();
//

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
//  answer in html 


// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
// var int = document.getElementById("counts")
// var number = 0;
// function increase() {
//      number++
//     int.value = number
// }
// function decrease() {
//     number--
//     int.value =number
// }



