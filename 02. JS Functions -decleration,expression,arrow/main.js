// // SUAL-1. Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. Misalçün function-a gələn _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
// ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri prompt vasitəsi ilə qəbul edib function-a göndərin)
// function power(base, exponent) {
//     return Math.pow(base, exponent);
// }

// const Number1 = Number (prompt("Birinci ədədini daxil edin:"));
// const Number2 = Number (prompt("İkinci ədədini daxil edin:"));

// const netice = power(Number1, Number2);
// alert(`${Number1} ədədinin ${Number2} qüvvətinə yüksəlməsi: ${netice}`)

// SUAL_2.Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin - - - - - -  - - - - - - - - - - - - - - - - - - - - - - 
// hal-hazırda  olduğu mövqeni, 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın 
// elementlərini bir yerdən başqa yerə hərəkət etdirin.
// Məsələn:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// Expected Output:
// [20, 30, 10, 40, 50]


// function move(arr, fromIndex, toIndex) {
//     const [element] = arr.splice(fromIndex, 1);
//     arr.splice(toIndex, 0, element);
//     return arr;
// }
// console.log(move([10, 20, 30, 40, 50], 0, 2))


// SUAL_3.Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.- - - - - -  - - - - - - -- - - - - -- - - - -- - - - - - - - - - - -
// Məsələn:
// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))
// console.log(deleteRepeate([1, 2, 3, 4, 5]))
// console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]))

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

// function deleteRepeate(arr) {
//     return Array.from(new Set(arr));
// }
// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5])); 
// console.log(deleteRepeate([1, 2, 3, 4, 5])); 
// console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5])); 


// SUAL_4.Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın._ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _

// sentenceCapitalization("a short sentence")
// Expected Output:
// "A Short Sentence"
// 1-ci usulla)))))))))))))))))))))))))))))))))))))))))))))))))))))))
// function sentenceCapitalization(sentence){
//     let result="";
// let newword = true;
// //     for (let i = 0; i < sentence.length; i++) {
// //      
// //       if (sentence[i] == " " && newword === true){
// //         result +=sentence[i].toUpperCase();    
//          newword = false;  
// //     }   }else{
// //         result +=sentence[i];

// //       }
// //     if (sentence[i] == " ")  {
// //       newword =true;
// //       }
// //     return result;
// // }
    //    console.log(sentenceCapitalization("short sentence"));

// 2-ci usulla)))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// function sentenceCapitalization(sentence) {
//     return sentence
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1));
// }

// const result = sentenceCapitalization("a short sentence");
// console.log(result); 

// SUAL_//5. Daxil edilən iki arrayi birləşdirən funksiya yazın._ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ _  _ _ _ _ _ _  _
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// Expected Output:
// [1,2,3,4,5,6,7,8,9]

// function concatArray(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9]));




// // SUAL-6. Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın._ _ _ _ _ _ _ _ __ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _-
// function sozleriSay(cumle) {
//     const sozler = cumle.trim().split(/\s+/);
//     return sozler.length;
// }

// const cumle = prompt("Cümləni daxil edin:");
// const say = sozleriSay(cumle);
// console.log(`Cümlədə ${say} söz var.`);

// SUAL_8 .log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]

// !1-ci usulla bele yazmisam))))))))


// function clearDuplicate(arr) {
//     return Array.from(new Set(arr));
// }
// console.log(clearDuplicate([1, 2, 1, 2, 3]));
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); 



// !2-ci usulla  bele yazmisam)))))))))))))))))))
// const clearDuplicate =(arr)=> {
//     const result ={};
//     for (let i = 0; i < arr.length; i++) {
//   let isDublicate = false;
//   for (let j = 0; j < result.length; j++) {
//     if (arr[i] === result[j])
//     let isDublicate=true;
// break;
    
//   }
//   if(!isDublicate){
//     result.push(arr[i]);
//   }
        
//     }
//     return result;
// }


// SUAL-10. const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries- - - - - - - - - - - - - -- - - - - -- - - - - - --
// countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın
// output: ["FIN", "DEN", "SWE", "NOR", "ICE"];

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

// const result = countries.map(country => country.slice(0, 3).toUpperCase());

// console.log(result); 



// 11.
//  Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'Example: 
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN

// function convert(str) {
//     let result = "";
// if(str[i] ===  str[i].toLowerCase())
//         result += str[i].toUpperCase
//     }else{
//         result += str[i].toLowerCase
//     }
// }





// 12. - - - - - - -- - -  - - - --  --  ----- -- -  --  - - - --  -- -- - - - - - - -- - - - - - - - -  -- - - - -- - - - -- 

// Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true

// function isEqual( arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
// if( arr1[1] !== arr2[2]) {
//     return false;
// }       
//     }
//     return true;
// }