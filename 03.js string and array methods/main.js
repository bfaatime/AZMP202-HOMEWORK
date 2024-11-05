                                         // STRING METHODS//

//   # Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World");
//    let upperCaseSentence = sentence.toUpperCase();
//    function convertToUpper(sentence) {
//          alert(upperCaseSentence);
//     }
//      convertToUpper("Hello World"); 

// # Daxil edilən cümlədə ən uzun sozu return edən funksiya yazın

// function findLongestWord(sentence) {
//     let words = sentence.split(" ");
//     let longestWord = words.reduce(function (longest, currentWord) {
//         return currentWord.length > longest.length ? currentWord : longest;
//     }, "");
//     alert(longestWord);
// } 

// # Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.
// function reverseWordOrder(sentence) {
//     let words = sentence.split(" ");
//     let reversedWords = words.reverse();
//     let reversedSentence = reversedWords.join(" ");
//     alert(reversedSentence);
// }

// # findLongestWord("javascript oyrenirik çox maraqlıdır");

// Nəticə: maraqlıdır

// function findLongestWord(sentence) {
//     let words = sentence.split(" ");
//     let longestWord = words.reduce(function(longest, currentWord) {
//         return currentWord.length > longest.length ? currentWord : longest;
//     }, "");
//     alert(longestWord);
// }


// # Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase edilmiş şəkildə qaytaran bir funksiya yazın.
// replaceCharacter("Salam", "a", "o");
// Nəticə: "solom"

// function replaceCharacter(sentence, oldChar, newChar) {
//     let modifiedSentence = sentence.replace(new RegExp(oldChar, 'g'), newChar).toLowerCase();
//     alert(modifiedSentence);
// }




                                         //   ARRAY METHODS//

// 1) const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// #1) 'Meat' əlavə edin, əgər artıq əlavə edilməyibsə
// #2) 'Sugar' əlavə edin, əgər artıq əlavə edilməyibsə
// #3) 'Honey'ni çıxarın, əgər balya qarşı allergiyanız varsa
// #4) 'Tea'ni 'Green Tea' ilə dəyişdirin

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// // 1) 'Meat' əlavə edin, əgər artıq əlavə edilməyibsə
// if (!shoppingCart.includes('Meat')) {
//     shoppingCart.splice(0, 0, 'Meat'); 
// }

// // 2) 'Sugar' əlavə edin, əgər artıq əlavə edilməyibsə
// if (!shoppingCart.includes('Sugar')) {
//     shoppingCart.push('Sugar'); 
// }

// // 3) 'Honey'ni çıxarın, əgər balya qarşı allergiyanız varsa
// const honeyIndex = shoppingCart.indexOf('Honey');
// if (honeyIndex !== -1) {
//     shoppingCart.splice(honeyIndex, 1); 
// }

// // 4) 'Tea'ni 'Green Tea' ilə dəyişdirin
// const teaIndex = shoppingCart.indexOf('Tea');
// if (teaIndex !== -1) {
//     shoppingCart[teaIndex] = 'Green Tea';
// }
// console.log(shoppingCart);




// 2) const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   #Reverse countries array using reverse() method
  
//   #remove "Canada" and "Denmark", and add "Azerbaijan 
//   (splice)

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ];
  
//   countries.reverse();
//   const canadaIndex = countries.indexOf('Canada');
//   const denmarkIndex = countries.indexOf('Denmark');
  
//   if (canadaIndex !== -1 && denmarkIndex !== -1) {
//       countries.splice(canadaIndex, 1);
//       countries.splice(denmarkIndex - 1, 1); 
//       countries.push('Azerbaijan'); 
//   }
//   console.log(countries);


//   3) #Concatenate the following two variables and store it in a fullStack variable.
//   const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//   const backEnd = ['Node','Express', 'MongoDB']
//   console.log(fullStack)
  
//   const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
//   const backEnd = ['Node', 'Express', 'MongoDB'];

// const fullStack = frontEnd.concat(backEnd);

// console.log(fullStack);


// 4) const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon]

// #Slice out the first 3 companies from the array
// #Slice out the last 3 companies from the array
// #Slice out the middle IT company or companies from the array
// #Sort companies array using sort() method
// #Change each company name to uppercase one by one and print them out
// #Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found
// #Filter out companies which have more than one 'o' without the filter method


// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 1
// const firstThree = itCompanies.slice(0, 3);
// console.log("First 3 companies:", firstThree);

// // 2
// const lastThree = itCompanies.slice(-3);
// console.log("Last 3 companies:", lastThree);

// // 3
// const middleIndex = Math.floor(itCompanies.length / 2);
// let middleCompany;
// if (itCompanies.length % 2 === 0) {
//   middleCompany = itCompanies.slice(middleIndex - 1, middleIndex + 1);
// } else {
//   middleCompany = itCompanies.slice(middleIndex, middleIndex + 1); 
// }
// console.log("Middle company/companies:", middleCompany);

// // 4
// const sortedCompanies = [...itCompanies].sort(); 
// console.log("Sorted companies:", sortedCompanies);

// // 5
// itCompanies.forEach(company => {
//   console.log(company.toUpperCase());
// });

// // 6
// const googleIndex = itCompanies.indexOf('Google');
// if (googleIndex !== -1) {
//   console.log('Google exists in the array.');
// } else {
//   console.log('Google does not exist in the array.');
// }

// let res = {}
// for (let i = 0; i < itCompanies.length; i++) {
//     if (itCompanies[i].toLowerCase().includes("o") &&
//         itCompanies.toLowerCase().indexOf("o") !==
//     itCompanies[i].toLowerCase().lastIndexOf) {
//         console.log(itCompanies[i]);
        
//     }
    
// // }
// console.log(res);



// const companiesWithMoreThanOneO = [];
// itCompanies.forEach(company => {
//   const count = company.split('o').length - 1;
//   if (count > 1) {
//     companiesWithMoreThanOneO.push(company);
//   }
// });
// console.log("Companies with more than one 'o':", companiesWithMoreThanOneO);



// 5)  Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

// function char(array1, array2, char) {
//     const Array = array1.concat(array2);
    
//     return Array.join(char);
// }

// const array1 = [1, 2];
// const array2 = [3, 4];
// const char = '*';

// const result = Char(array1, array2, char);
// console.log(result); 