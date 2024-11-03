// // SUAL-1. Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. Misalçün function-a gələn _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
// ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri prompt vasitəsi ilə qəbul edib function-a göndərin)
// // function power(base, exponent) {
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

// SUAL_8Write a method that returns a duplicate-free array.- - - - - - - -- - - -- - - - -- - - - - -- - - - - - - - - -  --- - - - - -- - - -- -- -- - -- - - - -
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]


// function clearDuplicate(arr) {
//     return Array.from(new Set(arr));
// }
// console.log(clearDuplicate([1, 2, 1, 2, 3]));
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); 

// SUAL-10. const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries- - - - - - - - - - - - - -- - - - - -- - - - - - --
// countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın
// output: ["FIN", "DEN", "SWE", "NOR", "ICE"];

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

// const result = countries.map(country => country.slice(0, 3).toUpperCase());

// console.log(result); 

