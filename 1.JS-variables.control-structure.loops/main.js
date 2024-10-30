// task -01-

// let number = 123 ("3  rəqəmli bir ədəd daxil edin:"); 
// let yuz = Math.floor(number / 100);
// let on = Math.floor((number % 100) / 10);
// let tek = number % 10;

// if (number >= 100 && number <= 999) {
//     let sum = 0;
//     let product = 1;

//     for (let i = 0; i < 3; i++) {
//         let eded = number % 10; 
//         sum += eded;            
//         product *= eded;        
//         number = Math.floor(number / 10); 
//     }
    
//     // ədədi orta
//     let average = sum / 3;
//     console.log("Rəqəmlərin cəmi: ${sum}`);
//     console.log("Rəqəmlərin hasil: ${product}");
//     console.log("Rəqəmlərin ədədi ortası: ${average}");
// } else {
//     alert("Zəhmət olmasa, 3 rəqəmli bir ədəd daxil edin.");
// }




// task02
// let n = parseInt(prompt("Bir ədəd daxil edin:"));

// console.log(`${n} ədədinin bütün bölənləri:`);

// // Bölənləri tapmaq
// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         console.log(i);
//     }
// }




// tas03
// let n = parseInt(prompt("Bir ədəd daxil edin:"));

// // Bölənlərin sayını saxlamaq üçün dəyişən
// let count = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         count++;
//     }
// }

// console.log(`${n} ədədinin bölənlərinin sayı: ${count}`);


// // task04
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);
// }


// task05
// console.log("i    i^2   i^3");

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}    ${i * i}     ${i * i * i}`);
// }




// task06
// let oddSum = 0;
// let evenSum = 0;

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         evenSum += i; // Cüt ədəd
//     } else {
//         oddSum += i; // Tək ədəd
//     }
// }

// console.log(`0-dan 100-ə qədər cüt ədədlərin cəmi: ${evenSum}`);
// console.log(`0-dan 100-ə qədər tək ədədlərin cəmi: ${oddSum}`);


// task7
// const arr = [4, 2, 7, 9, 3, 12, 46, 32, 19];

// if (arr.length === 0) {
//     console.log(0);
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     // ədədi orta
//     const average = (min + max) / 2;
//     console.log(average);
// }




// task08

// const arr = [4, 2, 7, 9, 3, 12, 46, 32, 19];

// if (arr.length === 0) {
//     console.log("boşdu.");
// } else {
//     let min = arr[0];
//     let max = arr[0]; 

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     console.log("Minimum: ${min}"); 
//     console.log("Maximum: ${max}");
// }


// task09
// let sampleNews = "As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.";

// let bosluq = 0;
// for (let i = 0; i < sampleNews.length; i++) {
//     if (sampleNews[i] === ' ') {
//         bosluq++; //
//     }
// }

// console.log("Boşluq sayı: ${bosluq}");