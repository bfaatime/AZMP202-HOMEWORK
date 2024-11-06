let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];
  
//   1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

// let filteredArr = arr.filter(item => item.name.toLowerCase().startsWith('t'));
// console.log(filteredArr);




// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

// let count = 0;
// arr.forEach(item => {
//   if (item.name.toLowerCase().startsWith('t') && item.name.toLowerCase().endsWith('t')) {
//     count++;
//   }
// });
// console.log(count);




//  3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"lerinin cemini tapin

// let sum = 0;
// arr.forEach(item => {
//   if (item.name.toLowerCase().startsWith('t') && item.name.toLowerCase().endsWith('t')) {
//     sum += item.key;
//   }
// });
// console.log(sum);



// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// arr.forEach(item => {
//     if (item.name.toLowerCase().endsWith('e')) {
//       item.name = "SuperDev";
//     }
//   });
//   console.log(arr);




//   5) "name"-i en uzun olan obyekti tapin

// let longestNameObj = arr.reduce((longest, current) => {
//     return current.name.length > longest.name.length ? current : longest;
//   }, arr[0]);
//   console.log(longestNameObj);



//   6) "name"-i en uzun olan obyektin key'ni tapin

// let longestNameKey = arr.reduce((longest, current) => {
//     return current.name.length > longest.name.length ? current : longest;
//   }, arr[0]).key;
//   console.log(longestNameKey);




//   7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// let longestNameIndex = arr.reduce((longestIndex, current, index, array) => {
//     if (current.name.length > array[longestIndex].name.length) {
//       return index;
//     }
//     return longestIndex;
//   }, 0);
//   let indexSquare = longestNameIndex ** 2;
//   console.log(indexSquare);


//   8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

// let filteredArr = arr.filter(item => item.name.length === 4);
// console.log(filteredArr);



// 9)  en boyuk "key"i olan obyektin "name"-i ni tapin

// let largestKeyName = arr.reduce((largest, current) => {
//     return current.key > largest.key ? current : largest;
//   }, arr[0]).name;
  
//   console.log(largestKeyName);


//   10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.

// let filteredArr = arr.filter(item => (item.name.match(/l/g) || []).length === 2);
// console.log(filteredArr);





// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// let filteredArr = arr.filter(item => (item.name.match(/t/g) || []).length >= 2);

// console.log(filteredArr);



// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

// let filteredArr = arr.filter(item => item.key > 10 && item.name.startsWith('l'));

// console.log(filteredArr);

