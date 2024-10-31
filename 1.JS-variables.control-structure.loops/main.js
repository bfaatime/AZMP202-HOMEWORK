// extra task
//#  0 - 100 arası yalnız sadə ədədləri console'da çap edin
// for (let number = 1; number <= 100; number++) {
// let isPrime = true;
// if (number === 1) continue;
// for (let j = 2; j < number; j++) {
//    if (number % j === 0 ) {
//     isPrime = False;
//     break;
//    }
// } 
// isPrime && console.log(number);
// }



// # const fruits = ["alma", "banan", "qarpız","portağal  ", "ananas", "nar"]; array daxilindəki ən uzun sözü tapan alqoritm yazın

// const fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"];
// let maxLengthElements = fruits[0];
// for (let i = 1; i < fruits.length; i++) {
//    if(fruits[i].length > maxLengthElements){
//     maxLengthElements = fruits[i]
//    }
// }
 

// # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın.
// const products = [
//     { id: 1, title: "Smartphone", description: "A high-end smartphone with the latest features.", price: 799.99 },
//     { id: 2, title: "Laptop", description: "Powerful laptop with a large screen and fast processor.", price: 1299.99 },
//     { id: 3, title: "Coffee Maker", description: "An automatic coffee maker with a built-in grinder.", price: 99.99 },
//     { id: 4, title: "Headphones", description: "Wireless over-ear headphones with noise-cancellation.", price: 199.99 },
//     { id: 5, title: "Smart TV", description: "55-inch 4K Smart TV with streaming apps built-in.", price: 699.99 },
//   ];
  
//   // Qiymətlərin cəmi
//   const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  
//   // Qiymətlərin ortalaması
//   const averagePrice = totalPrice / products.length;
  
//   console.log("Cəm:", totalPrice.toFixed(2));
//   console.log("Ortalama:", averagePrice.toFixed(2));


// task01
// let number= 327;

// let a = num % 10;
// let b = ((num % 100) - a) / 10;
// let c = (num - (a+ b *10) / 100);
// console.log(a, b, c);
// let multiply = a * b *c;
// let avarage = (a + b + c) / 3;
// console.log("multiply", multiply);
// console.log("avarage", avarage);


// task02
// let n = parseInt(prompt("Bir ədəd daxil edin:"));
// console.log("${n} ədədinin bütün bölənləri:");
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

// TASK_14 Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.
// const number = parseInt(prompt("ədəd daxil edin :"));
// const array = [1, 2, 3, 4, 5]; 
// let found = false;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     console.log(`${number} ədəd array-də var.`);
// } else {
//     console.log(`${number} ədəd array-də yoxdur.`);
// }


// TASK-15
//  const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] }
//   ];
//    tələbələr array-ində tələbələrin ortalaması ən yüksək olanı,
//   ortalaması 90-dan yuxarı olanları tapan proqram yazın


// let yuksekOrtalamaliTelebe = "";
// let yuksekOrtalama = 0;
// const above90Students = [];

// // Tələbələri yoxlayın
// for (let i = 0; i < students.length; i++) {
//     const scores = students[i].scores;
//     let total = 0;

//     // Ortalamayı hesabla
//     for (let j = 0; j < scores.length; j++) {
//         total += scores[j];
//     }
//     const ortalama = total / scores.length;

//     // Ortalaması 90-dan yuxarı olanları toplayın
//     if (average > 90) {
//         above90Students.push(students[i].name);
//     }

//     // Ortalaması ən yüksək olanı tapın
//     if (ortalama > yuksekOrtalama) {
//         yuksekOrtalama = ortalama;
//         yuksekOrtalamaliTelebe = students[i].name;
//     }
// }
// console.log(`Ortalaması ən yüksək olan tələbə: ${yuksekOrtalamaliTelebe}`);
// console.log(`Ortalaması 90-dan yuxarı olan tələbələr: ${above90Students.join(", ")}`);

// TASK-16 16.Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
// racecar - polidromdur
// hello - polidrom deyil

// const testStrings = ["racecar", "hello"];

// for (let str of testStrings) {
    

//     if (cleanedStr === reversedStr) {
//         console.log(`${str} - polidromdur`);
//     } else {
//         console.log(`${str} - polidrom deyil`);
//     }
// }