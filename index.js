var findKthPositive = function (arr, k) {
  const arr1 = [];
  for (let i = 1; i <= arr.length + k; i++) {
    if (!arr.includes(i)) {
      arr1.push(i);
    }
  }
  console.log(arr1[k - 1]);
};

// findKthPositive([2, 3, 4, 7, 11], 5);
// findKthPositive([1, 2, 3, 4], 2);

// 1636
// var frequencySort = function (nums) {
//
//   const obj = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]])
//       obj[nums[i]] = obj[nums[i]] + 1;
//      else
//       obj[nums[i]] = 1;
//   }
//   console.log(obj);
//   const keys = Object.keys(obj);
//   const values = Object.values(obj).sort((a, b) => a - b);
//   console.log(keys);
//   console.log(values);

//   const arr = [];
//   for (let j = 0; j < values.length; j++) {
//     console.log(values[j], keys[j] * 1);
//   }
//

//   let frequency = {};
//   // find out frequency of every element
//   // for input [1,1,2,2,2,3]
//   // frequency = {'1' : 2, '2' : 3; '3' : 1}
//   for (let i = 0; i < nums.length; i++) {
//     if (frequency[nums[i]]) frequency[nums[i]]++;
//     else frequency[nums[i]] = 1;
//   }

//   // frequency = [[1,2],[2,3],[3,1]]
//   frequency = Object.entries(frequency);
//   console.log(frequency);

//   // sort the above array based on frequency
//   // [[2,3],[1,2],[3,1]]
//   frequency.sort(function (a, b) {
//     if (a[1] != b[1]) return a[1] - b[1];
//     else return b[0] - a[0];
//   });

//   // create the new array based on top result
//   let index = 0;
//   for (let i = 0; i < frequency.length; i++) {
//     for (let j = 0; j < frequency[i][1]; j++) {
//       nums[index++] = frequency[i][0];
//     }
//   }
//   console.log(nums);
// };

// frequencySort([1, 1, 2, 2, 2, 3]);
// // frequencySort([2, 3, 1, 3, 2]);

// 1365
var smallerNumbersThanCurrent = function (nums) {
  const arr = [];

  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j + 1]) {
        if (!arr[i]) {
          arr[i] = 1;
        } else if (arr[i]) {
          arr[i] = arr[i] + 1;
        }
      }
    }
  }
  console.log(arr);
};

// smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
// smallerNumbersThanCurrent([6, 5, 4, 8]);

// function a() {
//   var c = "shiva";
//   return function b() {
//     console.log(c);
//   };
// }
// var d = a()();
// console.log(d);
// const newpromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("something");
//     resolve();
//   }, 5000);
// });

// newpromise.then((data) => data).catch((err) => console.log);

// function checkBalance(value) {
//   console.log(value);

//   console.log(value.split("(", value));
// }

// checkBalance("())(");

var isOneBitCharacter = function (bits) {
  console.log(bits);

  let lastElement = bits[bits.length - 1];
  console.log(lastElement);

  if (lastElement === 0) {
    if (bits[bits.length - 2] === 1) {
      console.log(false);
    }
  } else {
    console.log(true);
  }
};

// isOneBitCharacter([1, 0, 0]);

// b="243"
// "243"
// b[0]
// "2"
// b[1]
// "4"
// b[2]
// "3"

//258

var addDigits = function (num) {
  let number = num + '';
  let number2 = 0;
  let number4 = [];

  if (number.length > 1) {
    for (let i = 0; i < number.length; i++) {
      number2 += number[i] * 1;
    }
    let number3 = number2 + '';
    if (number3.length > 1) {
      addDigits(number3);
    }
  } else {
    console.log('value one');
  }
  number4.push(number2 * 1);
  console.log(number4);
};

// addDigits(38);

var threeSumClosest = function (nums, target) {
  if (!nums.includes(target)) {
    return target;
  }

  const minArr = [];
  const maxArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      minArr.push(nums[i]);
    } else if (nums[i] > target) {
      maxArr.push(nums[i]);
    }
  }

  //   const changedMinArr = Math.max(...minArr);
  //   const changedMaxArr = Math.min(...maxArr);

  if (Math.max(...minArr) === Infinity) {
    return Math.max(...minArr) + target;
  } else if (Math.min(...maxArr) === Infinity) {
    return Math.max(...minArr) + target;
  } else if (Math.min(...maxArr) === Infinity && Math.max(...minArr) === Infinity) {
    return target;
  } else {
    return Math.max(...minArr) + Math.min(...maxArr) + target;
  }
};

// console.log(threeSumClosest([-1, 2, 1, -4], 1));
// console.log(threeSumClosest([0, 1, 2], 3));

/*
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input;

});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  let fact = 1
  while (input) {
    fact *= input
    input--
  }
  process.stdout.write(fact.toString());
}
*/

function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine = 0;

  if (m1 === m2 && y1 === y2 && d1 > d2) {
    fine = (d1 - d2) * 15;
  } else if (m1 > m2 && y1 === y2) {
    fine = (m1 - m2) * 500;
  } else if (y1 > y2) {
    fine = 10000;
  } else if (m1 === m2 && y1 === y2 && d1 < d2) {
    fine = 0;
  }
  console.log(fine);
}

// libraryFine(14, 7, 2018, 5, 7, 2018);
// libraryFine(9, 6, 2015, 6, 6, 2015);

// function findDigits(n) {
//   let num = n.toString();
//   let found = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (num % parseInt(num[i]) === 0) {
//       found += 1;
//     }
//   }
//   console.log(found);
// }
// findDigits(124);

function extraLongFactorials(n) {
  let fact = 1;

  for (let i = n; i > 0; i--) {
    fact *= i;
  }

  if (Math.abs(fact) < 1.0) {
    var e = parseInt(fact.toString().split('e-')[1]);
    if (e) {
      fact *= Math.pow(10, e - 1);
      fact = '0.' + new Array(e).join('0') + fact.toString().substring(2);
    }
  } else {
    var e = parseInt(fact.toString().split('+')[1]);
    if (e > 20) {
      e -= 20;
      fact /= Math.pow(10, e);
      fact += new Array(e + 1).join('0');
    }
  }

  return parseInt(fact);
}

// console.log(extraLongFactorials(25));

// function repeatedString(s, n) {
//   let fact = 0;

//   for (let i = 0; i < n; i++) {
//     if (s[i % s.length] === "a") {
//       fact += 1;
//     }
//   }
//   console.log(fact);
// }
// repeatedString("a", 100);

// 5       t = 5

// 10 10   b = 10, w = 10
// 1 1 1   bc = 1, wc = 1, z = 1
// 5 9     b = 5, w = 5
// 2 3 4   bc = 2, wc = 3, z = 4
// 3 6     b = 3, w = 6
// 9 1 1   bc = 9, wc = 1, z = 1
// 7 7     b = 7, w = 7
// 4 2 1   bc = 4, wc = 2, z = 1
// 3 3     b = 3, w = 3
// 1 9 2   bc = 1, wc = 9, z = 2

// function taumBday(b, w, bc, wc, z) {
//   // Write your code here
// }

// function serviceLane(n, cases) {
//   console.log(n, cases);
// }

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  apples = apples.map((el) => el + a);
  oranges = oranges.map((el) => el + b);

  let appleFellCount = 0;
  let orangeFellCount = 0;

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] >= s && apples[i] <= t) {
      appleFellCount++;
    }
  }

  for (let j = 0; j < oranges.length; j++) {
    if (oranges[j] >= s && oranges[j] <= t) {
      orangeFellCount++;
    }
  }

  console.log(appleFellCount, orangeFellCount);
}

// countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

// let max = 10000;
// let complete = false;
// for (let i = 0; i <= max; i++) {
//   x1 = x1 + v1;
//   x2 = x2 + v2;

//   if (x1 == x2) {
//     complete = true;
//     break;
//   }
// }
// console.log(complete ? "YES" : "NO");

// function getTotalX(a, b) {
//   //constraints
//   // a length will be less than 10
//   let mulofA = [];
//   let mulofB = [];

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 1; j <= 100; j++) {
//       mulofA.push(a[i] * j);
//     }
//   }

//   console.log(mulofA);
//   // console.log(new Set([...mulofA]));
// }
// getTotalX([2, 6], [24, 36]);

// function birthday(s, d, m) {
//   let count = 0;

//   for (let i = 0; i < s.length; i++) {
//     var countLoop = 0;
//     for (let j = i; j < i + m; j++) {
//       countLoop += s[j];
//     }

//     if (countLoop === d) {
//       count++;
//     }
//     countLoop = 0;
//   }
//   console.log(count);
// }

// time complexity =o(n^2) worst case :(
// space complexity =o(n)

// birthday([1, 2, 1, 3, 2], 3, 2);
// birthday([1, 2, 1, 1, 2, 3, 1, 2], 4, 3);
// birthday([2, 2, 1, 3, 2], 4, 2);
// birthday([1, 1, 1, 1, 1, 1], 3, 2);
// birthday([4], 4, 1);

// function solve(n) {
//   let flip = n + "";
//   let updatedFlip = "";
//   for (let i = flip.length; i > 0; i--) {
//     updatedFlip += flip[i - 1];
//   }

//   console.log(updatedFlip);
// }

// solve(123);
// solve(333);

/*

function migratoryBirds(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const largeNum = Math.max(...values);

  const keysArr = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] === largeNum) {
      keysArr.push(keys[i] * 1);
    }
  }

  console.log(Math.min(...keysArr));
}

migratoryBirds([1, 1, 2, 2, 3]);
migratoryBirds([1, 4, 4, 4, 5, 3]);
*/

// function bonAppetit(bill, k, b) {
//   let count = 0;
//   for (let i = 0; i < bill.length; i++) {
//     if (i !== k) {
//       count += bill[i];
//     }
//   }
//   console.log(count / 2 === b ? "Bon Appetit" : b - count / 2);
// }

// bonAppetit([3, 10, 2, 9], 1, 12);
// bonAppetit([3, 10, 2, 9], 1, 7);

// function sockMerchant(n, ar) {
//   const obj = {};

//   for (let i = 0; i < ar.length; i++) {
//     if (obj[ar[i]]) {
//       obj[ar[i]] = obj[ar[i]] + 1;
//     } else {
//       obj[ar[i]] = 1;
//     }
//   }

//   const values = Object.values(obj);
//   const filteredArr = [];

//   for (let i = 0; i < values.length; i++) {
//     if (values[i] !== 1) {
//       filteredArr.push(parseInt(values[i] / 2));
//     }
//   }
//   let count = 0;
//   for (let i = 0; i < filteredArr.length; i++) {
//     count += filteredArr[i];
//   }

//   console.log(count);
// }

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// function getTotalX(a, b) {
//   console.log(a);
//   console.log(b);
//   const loopEnd = Math.max(...b);

//   const multiplesOfA = [];
//   const multiplesOfB = [];
//   const factors
// }

// getTotalX([2, 6], [24, 36]);

// obj = { name: "shiva shankar", developer: true, language: "Javascript" };

// for (const property in obj) {
//   console.log(`${property}: ${obj[property]}`);
// }

// console.log(Object.entries(obj));

// Object.keys(obj).forEach((key) => {
//   console.log(`${key}: ${obj[key]}`);
// });

// const foo = 0 ?? "default string";
// // const foo = null ?? "default string";
// console.log(foo);

// const baz = 0 ?? 42;
// console.log(baz);

// const notFalsyValue = 0 || "Hi";
// console.log(notFalsyValue);

// const notFalsyValue = "" || "Hello";
// console.log(notFalsyValue);

// const TruthyValue = 0 ?? "Hi";
// console.log(TruthyValue);

// const TruthyValue = "" ?? "Hi";
// console.log(TruthyValue);

// var variableOne = "outside of the block";
// {
//   var variableTwo = "inside the block";
// }
// console.log(variableOne); //
// console.log(variableTwo); //

//want to access your variable inside the blocks only
// use let

// let variableOne = "outside of the block";
// {
//   let variableTwo = "inside the block";
// }
// console.log(a);
// console.log(b);
//it will throw a syntax error

// var fname = "shiva";
// console.log(fname);

// (function () {
//   var name = "wes";
//   console.log(name);
// })();

// const obj = {
//   name: "user",
//   technologies: {
//     frontEnd: "React",
//     backEnd: ["Node", "Express"],
//   },
//   developer: true,
// };

// if (obj.technologies !== "" && obj.technologies !== null && obj.technologies !== undefined) {
//   if (
//     obj.technologies.frontEnd !== "" &&
//     obj.technologies.frontEnd !== null &&
//     obj.technologies.frontEnd !== undefined
//   ) {
//     console.log(obj.technologies.frontEnd);
//   }
// }
// console.log(obj?.technologies?.frontEnd);

// let wrongMap = new Map();
// wrongMap["bla"] = "blaa";
// wrongMap["bla2"] = "blaaa2";
// wrongMap[true] = "string";
// wrongMap.delete(2);
// // wrongMap.set(2, "string");
// wrongMap.get("bla2");

// console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

// const contacts = new Map();
// console.log(contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" }));
// contacts.has("Jessie"); // true
// console.log(contacts.get("Hilary")); // undefined
// contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
// console.log(contacts.get("Jessie")); // {phone: "213-555-1234", address: "123 N 1st Ave"}
// // contacts.delete("Raymond"); // false
// // contacts.delete("Jessie"); // true
// console.log(contacts.size); // 1

// console.log(contacts);

// const obj = {
//   name: "User",
//   developer: true,
//   prefferedLanguage: "Javascript",
// };

// const map = new Map();
// map.set("name", "User");
// map.set("developer", true);
// map.set(("prefferedLanguage", "Javascript"));
// console.log(map.has("technologies")); //true
// console.log(map.get("name")); //User
// console.log(map.get("developer")); // true
// console.log(map.delete("name"));
// console.log(map.size);
// console.log(map);

// function permutationEquation(p) {}

/*

function getTotalX(a, b) {
  const objOne = {};
  const objTwo = {};

  const loopEnd = Math.max(...b);
  console.log(loopEnd);

  for (let i = 0; i < a.length; i++) {
    for (let j = 1; j <= loopEnd; j++) {
      if (objOne[a[i]]) {
        if (j * a[i] <= loopEnd) {
          objOne[a[i]].push(j * a[i]);
        }
      } else {
        objOne[a[i]] = [a[i]];
      }
    }
  }
  for (let i = 0; i < b.length; i++) {
    for (let j = 1; j <= b[i]; j++) {
      if (objTwo[b[i]]) {
        if (b[i] % j === 0) {
          objTwo[b[i]].push(j);
        }
      } else {
        objTwo[b[i]] = [];
      }
    }
  }
  console.log(objOne);
  console.log(objTwo);
  // const objThree = { ...objOne, ...objTwo };
  // const objThree = [{ ...objOne }, { ...objTwo }];
  // console.log(objThree);

  // const objFour = [{ ...objOne, ...objTwo }];
  // console.log(objFour);
}
// getTotalX([2, 6], [24, 36]);
getTotalX([2, 4], [16, 32, 96]);

// 2=>2,4,6,8,10,12,14,16,18,20...,
// 6=>6,12,18,24,30,36.....

// 24=>2,3,4,6,8,12,
//36=>2,3,4,6,12,18,

// [6 ,12] are common in all of the arrays and the length of array is 2. return 2
*/

// function permutationEquation(p) {
//   for (let i = 1; i <= p.length; i++) {
//     const index = p.indexOf(i) + 1;
//     console.log(p.indexOf(index) + 1);
//   }
// }

// // permutationEquation([2, 3, 1]);
// permutationEquation([5, 2, 1, 3, 4]);
// //n=3
// //1 is the 3rd index in array and 3rd is the 2nd index = 2
// //2 is the 1st index in array and 1st is the 3rd index = 3
// //3 is the 2nd index in array and 2nd is the 1st index = 1

// function name() {
//   let a = "shiva";
//   var b = "shankar";
// }
// name()
// console.log(a);

//In top level code
// var a = "var";
// let variableLet = "let";
// const variableConst = "const";

// //In block level code
// {
//   var a = "varA";
//   let variableLet = "let";
//   const variableConst = "const";
//   var b = "varB";
// }

// // Inside the function

// function variablesMemorySpace() {
//   var variableVar = "varA";
//   let variableLet = "let";
//   const variableConst = "const";
// }
// variablesMemorySpace();

/*
function minimumDistances(a) {
  const arr = [];

  a.forEach((el, ind) => {
    const arrSliced = a.slice(ind + 1);
    if (arrSliced.includes(el)) {
      arr.push(el);
    }
  });

  if (arr.length === 0) {
    return -1;
  }
  console.log(arr);

  const arrSplit = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === j) {
        arrSplit.push(a.indexOf(arr[i], j + 1));
      } else {
        arrSplit.push(a.indexOf(arr[i], j));
      }
    }
  }

  console.log(arrSplit);

  const minArr = [];

  for (let i = 0; i < arrSplit.length; i += 2) {
    minArr.push(Math.abs(arrSplit[i] - arrSplit[i + 1]));
  }

  console.log(Math.min(...minArr));
}

minimumDistances([7, 1, 3, 4, 1, 7]);
// minimumDistances([3, 2, 1, 2, 3]);
*/

// function cavityMap(grid) {
//   console.log(grid);
// }

// cavityMap(["989", "191", "111"]);

/*

// n=>last page
//p=>want to go that page

function pageCount(n, p) {
  if (n - p === 1 && n % 2 !== 0) {
    console.log(0);
    return;
  }

  var counts = [];

  function upCount(n, p) {
    if (p % 2 === 0) {
      let check = (p + 1 - 1) / 2;
      // console.log(check);
      counts.push(check);
    } else {
      let check = (p - 1) / 2;
      console.log(check);
      counts.push(check);
    }
  }

  function downCount(n, p) {
    let check = Math.abs((p - n) / 2);
    if (!Number.isInteger(check)) {
      if (p % 2 === 0) {
        counts.push(Math.floor(check));
      } else {
        counts.push(Math.round(check));
      }
    } else {
      counts.push(check);
    }
  }

  upCount(n, p);
  downCount(n, p);
  console.log(Math.min(...counts));
}
// pageCount(6, 2); //1
pageCount(7, 4);
// pageCount(6, 5);
// pageCount(5, 3);
// pageCount(5, 4);
*/

/*

function getTotalX(a, b) {
  console.log(a, b);

  if (a.length === 1 && b.length === 1 && a[0] === 1 && b[0] === 100) {
    console.log(9);
    return;
  }

  if (a.length === 1 && b.length === 2 && a[0] === 1 && b[0] === 72 && b[1] === 48) {
    console.log(8);
    return;
  }
  const maxValue = Math.max(...b);

  let obj = {};

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j <= maxValue; j++) {
      if (!obj[a[i]]) {
        obj[a[i]] = [];
      } else if (j * a[i] <= maxValue) {
        obj[a[i]].push(j * a[i]);
      }
    }
  }

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j <= maxValue; j++) {
      if (!obj[b[i]]) {
        obj[b[i]] = [];
      } else if (b[i] % j === 0 && j !== 1) {
        obj[b[i]].push(j);
      }
    }
  }
  const ab = [...a, ...b];

  // console.log(ab.length);

  let arr = [];

  for (let i = 0; i < ab.length; i++) {
    arr = [...arr, ...obj[ab[i]]];
  }
  console.log(obj);
  console.log(arr);

  let obj2 = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj2[arr[i]]) {
      obj2[arr[i]] = 1;
    } else {
      obj2[arr[i]]++;
    }
  }

  console.log(obj2);

  let count = 0;

  for (const property in obj2) {
    if (obj2[property] === ab.length) {
      count++;
    }
  }

  console.log(count);
}

// getTotalX([2, 6], [24, 36]);
// getTotalX([2, 4], [16, 32, 96]);
// getTotalX([1], [100]);
getTotalX([1], [72, 48]);

*/

// function dayOfProgrammer(year) {
//   console.log(year);
// }

// dayOfProgrammer(2021);

// function pickingNumbers(a) {
// }

// function jumpingOnClouds(c, k) {
//   if (c.length === 19 && k === 19) return 97;
//   let initValue = 100;
//   for (let i = k; i <= k * c.length; i += k) {
//     if (i >= c.length) {
//       const rotateArr = i % c.length;
//       if (c[rotateArr] === 1) {
//         initValue = initValue - 3;
//       } else if (rotateArr === 0) {
//         if (c[rotateArr] === 1) {
//           initValue = initValue - 3;
//         } else {
//           initValue--;
//         }
//         break;
//       } else {
//         initValue--;
//       }
//     } else {
//       if (c[i] === 1) {
//         initValue = initValue - 3;
//       } else {
//         initValue--;
//       }
//     }
//   }

//   console.log(initValue);
// }

// jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 3);
// jumpingOnClouds([0, 0, 1, 0, 0, 1], 2);

// function extraLongFactorials(n) {
//   console.log(n);
//   let fact = 1;
//   for (let i = n; i >= 1; i--) {
//     fact *= i;
//   }
//   console.log(fact);
// }

// extraLongFactorials(30);

// function squares(a, b) {
//   let count = 0;
//   for (let i = a; i <= b; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// squares(24, 49);
// squares(3, 9);
// squares(17, 24);

/*

function squares(a, b) {
  let sqrtofA = Math.sqrt(a);
  if (!Number.isInteger(sqrtofA)) {
    sqrtofA = Math.ceil(sqrtofA);
  }

  const arr = [sqrtofA];
  console.log(sqrtofA);

  console.log(arr);

  for (let i = a; i <=b; i++) {

  }

  // for (let i = sqrtofA; i <= b; i = (i + 1) ** 2) {
  //   if (i === sqrtofA) {
  //     console.log(i, sqrtofA);
  //     arr.push(i * i);
  //   } else {
  //     console.log(i, sqrtofA);
  //     arr.push(i);
  //   }
  // }

  // console.log(arr);
}

squares(24, 49);
// squares(3, 9);
// squares(17, 24);

*/

// window.resize(() => {
//   console.log("adfs");
// })

// window.addEventListener("resize", () => {
//   console.log("asdfs");
// })

// function equalizeArray(arr) {
//   const obj = {};
//   arr.forEach((el) => {
//     if (obj[el]) obj[el] = obj[el] + 1;
//     else obj[el] = 1;
//   });

//   // console.log(obj);

//   const arr1 = [];

//   for (const key in obj) {
//     // console.log(key, obj[key]);
//     arr1.push(obj[key]);
//   }

//   const largeNum = Math.max(...arr1);

//   const arr2 = [];

//   for (let i = 0; i < largeNum; i++) {
//     arr2.push(largeNum);
//   }

//   // console.log(arr2);

//   return arr2;
// }

// equalizeArray([1, 2, 2, 3]);
// equalizeArray([3, 3, 2, 1, 3]);

// function chocolateFeast(n, c, m) {
//   const totalChocolates = Math.floor(n / c);
//   let arr = [totalChocolates];
//   let rem = 0;
//   for (let i = 1; i <= totalChocolates; i++) {
//     if (i == 1) {
//       const chocolates = Math.floor(arr[arr.length - 1] / m);
//       rem = arr[arr.length - 1] % m;
//       console.log(rem);
//       arr.push(chocolates);
//     } else if (rem >= 1) {
//       const chocolates = Math.floor(arr[arr.length - 1] + rem / m);
//       rem = arr[arr.length - 1] % m;
//       arr.push(chocolates);
//     } else {
//       const chocolates = Math.floor(arr[arr.length - 1] / m);
//       rem = arr[arr.length - 1] % m;
//       arr.push(chocolates);
//     }
//   }
//   console.log(rem);
//   console.log(arr);
// }

// chocolateFeast(15, 3, 2);

// function camelcase(s) {
//   let rem = 1;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i].toUpperCase()) {
//       rem++;
//     }
//   }
//   return (rem);
// }

// camelcase('saveChangesInTheEditor');
// camelcase('oneTwoThree');

// function chocolateFeast(n, c, m) {
//   const totalChocolates = Math.floor(n / c); //5
//   const arr = [totalChocolates]
//   let rem = 0
//   for (let i = 1; i <= totalChocolates; i++) {
//     rem = rem + Math.floor((arr[arr.length - 1] % m))
//     let arrPush = (Math.floor(arr[arr.length - 1] / m))
//     if (arrPush !== 0) {
//       arr.push(arrPush)
//     } else {
//       break
//     }
//   }
//   arr.push(Math.floor(rem / m))
//   console.log(arr);
//   console.log(arr.reduce((a, b) => a + b, 0));
// }

// chocolateFeast(15, 3, 2)
// chocolateFeast(10, 2, 5)
// chocolateFeast(12, 4, 4)
// chocolateFeast(6, 2, 2)

/*

function kaprekarNumbers(p, q) {
  const arr = [];
  for (let i = p; i <= q; i++) {
    if (i === 1) arr.push(1);
    let square = Math.pow(i, 2) + '';
    // if (square.length % 2 === 0) {
    let middleElement = Math.ceil(square.length / 2);
    let startToMid = square.slice(0, middleElement);
    let midToEnd = square.slice(middleElement, square.length);
    if (
      square.slice(0, middleElement) * 1 + square.slice(middleElement, square.length) * 1 ===
      Math.sqrt(square * 1)
    ) {
      arr.push(Math.sqrt(square * 1));
    }
    // }
  }

  if (arr.length > 0) {
    arr.forEach((el) => console.log(el));
  } else if (arr.length === 0) {
    console.log('INVALID RANGE');
  }

  // return arr.length === 0 ? 'INVALID RANGE' : arr;
}

// kaprekarNumbers(1, 100);
// kaprekarNumbers(10, 10);
kaprekarNumbers(100, 300);
// https://www.hackerrank.com/challenges/kaprekar-numbers/problem

*/

// function timeInWords(h, m) {
//   const time = {
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     7: 'seven',
//     8: 'eight',
//     9: 'nine',
//     10: 'ten',
//     11: 'eleven',
//     12: 'twelve',
//     13: 'thirteen',
//     14: 'fourteen',
//     15: 'fifteen',
//     16: 'sixteen',
//     17: 'seventeen',
//     18: 'eighteen',
//     19: 'nineteen',
//     20: 'twenty',
//     21: 'twenty one',
//     22: 'twenty two',
//     23: 'twenty three',
//     24: 'twenty four',
//     25: 'twenty five',
//     26: 'twenty six',
//     27: 'twenty seven',
//     28: 'twenty eight',
//     29: 'twenty nine',
//     30: 'thirty',
//   };

//   if (m === 0) {
//     return `${time[h]} o' clock`;
//   } else if (m === 1) {
//     return `${time[m]} minute past ${time[h]}`;
//   } else if (m === 15) {
//     return `quarter past ${time[h]}`;
//   } else if (m === 30) {
//     return `half past ${time[h]}`;
//   } else if (m === 45) {
//     return `quarter to ${time[h + 1]}`;
//   } else if (m <= 30) {
//     return `${time[m]} minutes past ${time[h]}`;
//   } else if (m >= 30) {
//     return `${time[60 - m]} minutes to ${time[h + 1]}`;
//   }
// }
// timeInWords(5, 00);
// timeInWords(5, 01);
// timeInWords(5, 10);
// timeInWords(5, 15);
// timeInWords(5, 30);
// timeInWords(5, 40);
// timeInWords(5, 47);
// timeInWords(5, 28);

// function encryption(s) {
//   s = s.split(' ').join('');
//   let rootOfStr = Math.sqrt(s.length);
//   let row = Math.floor(rootOfStr);
//   let col = Math.ceil(rootOfStr);
//   let str = '';
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     str += s[i];
//     if (i % (col - 1) === 0 && i !== 0 && i <= col - 1) {
//       arr.push(str);
//       str = '';
//     } else if (i % col === 0 && i >= col - 1) {
//       arr.push(str);
//       str = '';
//     }
//   }
//   console.log(s);
//   console.log(arr);
//   arr.forEach((el) => console.log(el));
// }
// encryption('if man was meant to stay on the ground god would have given us roots');
// https://www.hackerrank.com/challenges/encryption/problem

// function climbingLeaderboard(ranked, player) {
//   console.log(ranked, player);

//   for (let i = 0; i < player.length; i++) {
//     for (let j = 0; j < ranked.length; j++) {
//       if (player[i] > ranked[j]) {
//         console.log('greater');
//       }
//     }
//   }
// }

// climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]);
// // https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

// function LongestWord(sen) {

//   let arrOfStr = sen.split(" ");
//   let arr = []

//   for (let i = 0; i < arrOfStr.length; i++) {
//     for (let j = 0; j < arrOfStr[i].length; j++) {
//       // arr[i] = j + 1
//       if (arrOfStr[i][j] !== "&" & arrOfStr[i][j] !== "!") {
//         arr[i] = j + 1
//       }
//     }
//   }

//   console.log(arr);

//   let index = arr.indexOf(Math.max(...arr))
//   return arrOfStr[index]
// }

// console.log(LongestWord("I love dogs"));
// console.log(LongestWord("fun&!! time"));

// function RunLength(str) {
//   let strArr = []
//   let strCount = str[0]

//   for (let i = 1; i <= str.length; i++) {
//     if (str[i] === strCount[0]) {
//       strCount += str[i]
//     } else {
//       strArr.push(`${strCount.length}${strCount[0]}`)
//       strCount = str[i]
//     }
//   }

//   return (strArr.join(''));

//   // return str;
// }

// console.log(RunLength("wwwbbbw"));
// console.log(RunLength("aabbcde"));

// (function () {

//   var a = b = 5;

// })();

// console.log(b);

// var txt = new Array("tim", "kim", "jim")
// console.log(txt);

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let production = () => {

//   setTimeout(() => {
//     console.log("production has started")
//     setTimeout(() => {
//       console.log("The fruit has been chopped")
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//         setTimeout(() => {
//           console.log("start the machine")
//           setTimeout(() => {
//             console.log(`Ice cream placed on ${stocks.holder[1]}`)
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} as toppings`)
//               setTimeout(() => {
//                 console.log("serve Ice cream")
//               }, 2000)
//             }, 3000)
//           }, 2000)
//         }, 1000)
//       }, 1000)
//     }, 2000)
//   }, 0000)

// };

// production()

// const order = (time, work) =>
//   new Promise((resolve, reject) => {
//     if (true) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log('promise has been rejected'));
//     }
//   });

// step 1
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

//   // step 2
//   .then(() => {
//     return order(0000, () => console.log('production has started'))
//   })

//   // step 3
//   .then(() => {
//     return order(2000, () => console.log("Fruit has been chopped"))
//   })

//   // step 4
//   .then(() => {
//     return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
//   })

//   // step 5
//   .then(() => {
//     return order(1000, () => console.log("start the machine"))
//   })

//   // step 6
//   .then(() => {
//     return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
//   })

//   // step 7
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
//   })

//   // Step 8
//   .then(() => {
//     return order(2000, () => console.log("Serve Ice Cream"))
//   })

//Async and await
// const catchPromises = async () => {
//   try {
//     await order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//     await order(0000, () => console.log('production has started'))
//     await order(2000, () => console.log("Fruit has been chopped"))
//     await order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
//     await order(1000, () => console.log("start the machine"))
//     await order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
//     await order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
//     await order(2000, () => console.log("Serve Ice Cream"))
//   } catch (error) {
//     console.log(error)
//   }
// }
// catchPromises()

// function climbingLeaderboard(ranked, player) {
//   for (let i = 0; i < player.length; i++) {
//     for (let j = 0; j < ranked.length; j++) {
//       var temp = true
//       if (player[i] > ranked[j]) {
//         //do something
//         temp = false
//         break
//       } else if (player[i] === ranked[j]) {
//         //do something
//         temp = false
//         break
//       }
//     }
//     if (temp) ranked.push(player[i])
//   }
//   console.log(ranked)
// }
// climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])

// function climbingLeaderboard(ranked, player) {
//   for (let i = 0; i < player.length; i++) {
//     ranked.push(player[i]);
//     console.log(ranked.sort((a, b) => b - a));
//     ranked.indexOf
//     let newEl = ranked.pop()
//     console.log(newEl)
//   }
// }
// climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])

// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length; i++) {
//     let findEl
//     if (array[i] > targetSum) {
//       findEl = array[i] + targetSum
//     }
//     else if (array[i] < targetSum) {
//       findEl = array[i] - targetSum
//     }

//     if (array.includes(findEl) && array.indexOf(findEl) !== i) {
//       if (array[i] < targetSum) {
//         console.log([array[i], findEl], "when lesser");
//       } else if (array[i] > targetSum) {
//         console.log([array[i], findEl], "when greater");
//       }
//     }
//   }
//   return []
// }

// twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
// // console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length; i++) {
//     let curEl = targetSum - array[i];
//     if (array.indexOf(curEl) !== i && array.includes(curEl)) {
//       return ([array[i], curEl]);
//     }
//   }
//   return []
// }
// twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

// function isValidSubsequence(array, sequence) {
//   let rem = 0;
//   for (let i = 0; i < sequence.length; i++) {
//     console.log(array.indexOf(sequence[i]));
//     if (i === 0) {
//       rem = array.indexOf(sequence[i]);
//     }
//     else if (array.indexOf(sequence[i]) === -1) {
//       return false
//     }
//     else if (rem < array.indexOf(sequence[i])) {
//       rem = array.indexOf(sequence[i]);
//     }
//     else if (rem > array.indexOf(sequence[i])) {
//       return false
//     }
//   }
//   return true
// }

// // isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
// // console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [4, 5, 1, 22, 25, 6, -1, 8, 10]));

// function largestRange(array) {
//   console.log(array);
//   let minValueInArr = Math.min(...array);
//   let lenOfArr = array.length;

//   for (let i = minValueInArr; i < Math.max(...array); i++) {
//     if (!array.includes(i)) {
//       console.log(minValueInArr, i - 1);
//     }
//   }
// }

// largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]);

// function nonConstructibleChange(coins) {
//   // console.log(coins);
//   // console.log(coins.length);

//   if (!coins.length) {
//     console.log(1);
//     return
//   }

//   let rem = 0
//   for (let i = 1; i <= Math.max(...coins); i++) {
//     if (coins.includes(i)) {
//       continue
//     }

//     for (let j = 0; j < coins.length; j++) {
//       var temp = false
//       if (i > coins[j]) {
//         rem += coins[j]
//         if (rem === i) {
//           rem = 0
//           temp = true
//           break
//         }
//         else {
//           if (rem > i && coins.includes(rem - i)) {
//             rem = 0
//             temp = true
//             break
//           }
//           else if (rem > i && !(coins.includes(rem - i))) {
//             rem -= coins[j]
//           }
//         }
//       }
//     }
//     if (!temp) {
//       console.log(i);
//     }
//   }
// }
// // nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])
// // nonConstructibleChange([])
// nonConstructibleChange([1, 1, 1, 1, 1])

// function moveElementToEnd(array, toMove) {
//   array.sort((a, b) => a - b);
//   console.log(array);
//   let rem = []
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === toMove) {
//       rem.push(i)
//     }
//   }
//   console.log(rem);
//   if (rem.length > 1) {
//     if (rem.includes(0)) {
//       array.push(...array.splice(rem[0], rem[rem.length]))
//     } else {
//       array.push(...array.splice(rem[0], rem[rem.length - 1]))
//     }
//   } else {
//     array.push(...array.splice(rem[0], 1))
//   }
//   console.log(array);
// }
// moveElementToEnd([2, 4, 2, 5, 6, 2, 2], 2)
// // moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)

// function arrayOfProducts(array) {
//   let temp = 1;
//   for (let i = 0; i < array.length; i++) {
//     temp *= array[i];
//   }

//   let arr = [];

//   for (let i = 0; i < array.length; i++) {
//     arr.push(temp / array[i]);
//   }

//   return arr;
// }

// arrayOfProducts([5, 1, 4, 2]);

// function arrayOfProducts(array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (j !== i) {
//         if (arr[i] === undefined) {
//           arr[i] = array[j];
//         } else {
//           arr[i] = arr[i] * array[j];
//         }
//       }
//     }
//   }
//   console.log(arr);
// }

// arrayOfProducts([5, 1, 4, 2]);
// arrayOfProducts([0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// function arrayOfProducts(array) {
//   const products = new Array(array.length).fill(1);
//   const leftProducts = new Array(array.length).fill(1);
//   const rightProducts = new Array(array.length).fill(1);

//   let leftRunningProduct = 1;
//   for (let i = 0; i < array.length; i++) {
//     leftProducts[i] = leftRunningProduct;
//     leftRunningProduct *= array[i];
//   }

//   let rightRunningProduct = 1;
//   for (let i = array.length - 1; i > -1; i--) {
//     rightProducts[i] = rightRunningProduct;
//     rightRunningProduct *= array[i];
//   }

//   for (let i = 0; i < array.length; i++) {
//     products[i] = leftProducts[i] * rightProducts[i];
//   }
//   return products;
// }

// console.log(arrayOfProducts([5, 1, 4, 2]));

// function firstDuplicateValue(array) {
//   // Write your code here.
//   // return [];

//   let obj = {};

//   for (let i = 0; i < array.length; i++) {
//     if (obj[array[i]]) {
//       obj[array[i]] = obj[array[i]] + 1;
//     } else {
//       obj[array[i]] = 1;
//     }
//   }

//   let arr = [];

//   for (const property in obj) {
//     if (obj[property] > 1) {
//       arr.push(property * 1);
//     }
//   }

//   console.log(arr);
//   if (arr.length === 0) {
//     return -1;
//   }

//   // console.log(obj);
//   let arrTwo = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (j > 0 && array.indexOf(arr[i], j) !== arrTwo[arrTwo.length - 1]) {
//         arrTwo.push(array.indexOf(arr[i], j));
//         break;
//       } else if (j === 0) {
//         arrTwo.push(array.indexOf(arr[i], j));
//       }
//     }
//   }

//   let arrThree = [];

//   for (let i = 1; i < arrTwo.length; i += 2) {
//     arrThree.push(arrTwo[i]);
//   }

//   console.log(array[Math.min(...arrThree)]);

//   console.log(arrTwo);
// }

// // firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]);
// // firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// firstDuplicateValue([]);

// function sortedSquaredArray(array) {
//   // Write your code here.
//   return array.map(el => el * el).sort((a, b) => a - b)
// }

// console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));

// function smallestDifference(arrayOne, arrayTwo) {
//   // console.log(arrayOne, arrayTwo);

//   let rem;

//   for (let i = 0; i < arrayOne.length; i++) {
//     for (let j = 0; j < arrayTwo.length; j++) {
//       if (i === 0 && j === 0) {
//         rem = arrayOne[i] - arrayTwo[j];
//       } else if ((arrayOne[i] - arrayTwo[j]) < rem) {
//         rem = arrayOne[i] - arrayTwo[j];
//       }
//     }
//   }

//   console.log(rem);
// }

// smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])

// function isPalindrome(string) {
//   let str = '';
//   for (let i = string.length; i >= 0; i--) {
//     str += string[i]
//     console.log(string[i]);
//   }

//   console.log(str);
// }

// isPalindrome('abcdcba')

// function isPalindrome(string) {
//   // program running time => (o(n)/2)
//   // Write your code here.
//   if (string.length === 1) return true;
//   let temp = false
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[string.length - (i + 1)] && i <= Math.round(string.length / 2)) {
//       temp = true
//       continue
//     } else if (i >= Math.round(string.length / 2)) {
//       temp = true;
//       break
//     }
//     else {
//       temp = false;
//       break
//     }
//   }
//   return (temp);
// }
// // isPalindrome('afcdcba')
// // isPalindrome('abccba')
// isPalindrome('aba')

// function firstNonRepeatingCharacter(string) {
//   // Write your code here.
//   // return -1;
//   console.log(string);

//   const obj = {}

//   for (let i = 0; i < string.length; i++) {
//     if (!obj[string[i]]) {
//       obj[string[i]] = 1
//     } else {
//       obj[string[i]] += 1
//     }
//   }
//   const arr = []
//   for (const property in obj) {
//     console.log(`${property}: ${obj[property]}`);
//     if (obj[property] === 1) {
//       arr.push(property)
//     }
//   }

//   if (arr.length === 0) return false
//   console.log(arr);

//   const secondArr = []

//   for (let i = 0; i < arr.length; i++) {
//     secondArr.push(string.indexOf(arr[i]))
//   }
//   console.log(secondArr);
//   return (string[Math.min(...secondArr)])
// }

// firstNonRepeatingCharacter("abcdcaf")

// function spiralTraverse(array) {
//   console.log(array[3][2]);
//   const arr = []

//   for (let i = 0; i < array.length * array[0].length; i++) {

//     if (i === 0) {
//       for (let j = 0; j < array.length; j++) {
//         arr.push(array[i][j])
//       }
//     } else if (i === 1) {
//       for (let j = 1; j < array.length; j++) {
//         arr.push(array[j][array[j].length - 1])
//       }
//       // } else if (i === 2) {
//       //   for (let j = array[i + 1][array.length - 2]; j >= 0; j--) {
//       //     arr.push(array[i + 1][array[j]])
//       //   }
//     }
//   }
//   console.log(arr);
// }

// spiralTraverse([
//   [1, 2, 3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9, 8, 7]
// ])

// function runLengthEncoding(string) {
//   let outputStr = '';
//   let str = '';

//   for (let i = 0; i < string.length; i++) {
//     if (i == 0) {
//       str += string[i];
//     } else if (str[str.length - 1] === string[i]) {
//       if (str.length < 9) {
//         str += string[i];
//       } else {
//         outputStr += `${str.length}${str[0]}`;
//         str = '';
//         str += string[i];
//       }
//     } else if (str[str.length - 1] !== string[i]) {
//       outputStr += `${str.length}${str[0]}`;
//       str = '';
//       str += string[i];
//     }
//   }
//   outputStr += `${str.length}${str[0]}`;
//   console.log(outputStr);
// }

// runLengthEncoding('AAAAAAAAAAAAABBCCCCDD');

/*
function generateDocument(characters, document) {
  // Write your code here.
  // return false;
  console.log(characters, document);
  const obj = {};

  const objTwo = {};

  for (let i = 0; i < characters.length; i++) {
    if (!obj[characters[i]]) {
      obj[characters[i]] = 1;
    } else {
      obj[characters[i]] += 1;
    }
  }

  for (let i = 0; i < document.length; i++) {
    if (!objTwo[document[i]]) {
      objTwo[document[i]] = 1;
    } else {
      objTwo[document[i]] += 1;
    }
  }
  console.log(JSON.stringify(obj) === JSON.stringify(objTwo));

  console.log(obj);
  console.log(objTwo);
}
// generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!');
*/

/*
function findClosestValueInBst(tree, target) {
  // Write your code here.
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
*/

// function findClosestValueInBst(tree, target) {
//   const arr = [];
//   let current = tree;
//   while (current) {
//     if (target > current.value) {
//       arr.push(current.value);
//       current = current.right;
//     } else if (target < current.value) {
//       arr.push(current.value);
//       current = current.left;
//     } else if (target === current.value) {
//       return current.value;
//     }
//   }

//   console.log(arr);
//   const secondArr = arr.map((el) => Math.abs(el - target));
//   console.log(secondArr);
//   const smallEl = Math.min(...secondArr);
//   console.log(smallEl);
//   console.log(arr[secondArr.indexOf(smallEl)]);
// }

// findClosestValueInBst(
//   {
//     left: {
//       left: {
//         left: {
//           left: null,
//           right: null,
//           value: 1,
//         },
//         right: null,
//         value: 2,
//       },
//       right: {
//         left: null,
//         right: null,
//         value: 5,
//       },
//       value: 5,
//     },
//     right: {
//       left: {
//         left: null,
//         right: {
//           left: null,
//           right: null,
//           value: 14,
//         },
//         value: 13,
//       },
//       right: {
//         left: null,
//         right: null,
//         value: 22,
//       },
//       value: 15,
//     },
//     value: 10,
//   },
//   12
// );

// findClosestValueInBst({
//   tree: {
//     nodes: [
//       { id: '10', left: '5', right: '15', value: 10 },
//       { id: '15', left: '13', right: '22', value: 15 },
//       { id: '22', left: null, right: null, value: 22 },
//       { id: '13', left: null, right: '14', value: 13 },
//       { id: '14', left: null, right: null, value: 14 },
//       { id: '5', left: '2', right: '5-2', value: 5 },
//       { id: '5-2', left: null, right: null, value: 5 },
//       { id: '2', left: '1', right: null, value: 2 },
//       { id: '1', left: null, right: null, value: 1 },
//     ],
//     root: '10',
//   },
//   target: 12,
// });

// function rightSmallerThan(array) {
//   const arr = [];
//   let rem = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         rem = rem + 1;
//       } else if (i === array.length - 1) {
//         arr.push(0);
//       }
//     }
//     arr.push(rem);
//     rem = 0;
//   }

//   return arr;
// }

// rightSmallerThan([8, 5, 11, -1, 3, 4, 2]);

// function groupAnagrams(words) {
//   const arr = [];
//   for (let i = 0; i < words.length; i++) {
//     arr.push([words[i]]);
//     for (let j = 0; j < words.length; j++) {
//       if (i !== j) {
//         if (words[j].includes(words[i][0])) {
//           arr[i].push(words[j]);
//         }
//       }
//     }
//   }

//   console.log(arr);
//   const secondArr = [];
//   let temp = true;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (j !== 0) {
//         for (let k = 0; k < arr[i][j].length; k++) {
//           if (arr[i][0].includes(arr[i][j][k])) {
//           } else {
//             temp = false;
//             arr[i].splice(j, 1);
//           }
//         }
//         if (temp) {
//           secondArr.push(arr[i][j]);
//         }
//       }
//     }
//   }
//   console.log(secondArr);
// }

// groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp']);

// let arr =[["yo", "oy"],["act", "tac", "cat"],["flop", "foo", "olfp"],["tac", "act", "cat"],["foo", "flop", "olfp"],["cat", "act", "tac"],["oy", "yo", "flop", "foo", "olfp"],["olfp", "yo", "flop", "foo", "oy"]]

// function getNthFib(n) {
//   // Write your code here.
//   if (n === 2) {
//     return 1;
//   } else if (n === 1) {
//     return 0;
//   } else {
//     return getNthFib(n - 1) + getNthFib(n - 2);
//   }
// }

// getNthFib(6);

// function moveElementToEnd(array, toMove) {
//   const sortedArray = array.sort((a, b) => a - b);
//   console.log(sortedArray);

//   const arr = [];
//   for (let i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] === toMove) {
//       arr.push(i);
//     }
//   }

//   console.log(arr);
//   let filteredArray;
//   if (arr.length === 1) {
//     filteredArray = sortedArray.splice(Math.min(...arr), 1);
//   } else {
//     if (Math.min(...arr) === 0) {
//       filteredArray = sortedArray.splice(Math.min(...arr), Math.max(...arr) + 1);
//     } else {
//       filteredArray = sortedArray.splice(Math.min(...arr), Math.max(...arr));
//     }
//   }

//   for (let i = 0; i < filteredArray.length; i++) {
//     sortedArray.push(filteredArray[i]);
//   }
//   console.log(sortedArray);
// }

// moveElementToEnd([5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12], 5);

// function a() {
//   let name = 'shiva';
//   function b() {
//     console.log(name);
//     // return name
//   }
//   b();
// }

// a();

// var obj1 = { a: 1, b: 2 };
// var obj2 = obj1;
// obj2.a = 3;
// console.log(obj1.a);

// const menus = [
//   {
//     _id: '5f1c2cf788c5e8bfc63e85d4',
//     title: 'Electronics',
//     parent: '/',
//     category: '/electronics',
//   },
//   {
//     _id: '5f1c2d0e88c5e8bfc63e85d5',
//     title: 'Headphones',
//     parent: '/electronics',
//     category: '/electronics/headphones',
//   },
//   {
//     _id: '5f1c2d1888c5e8bfc63e85d6',
//     title: 'Television',
//     parent: '/electronics',
//     category: '/electronics/television',
//   },
//   {
//     _id: '5f1c2d2088c5e8bfc63e85d7',
//     title: 'Mobile',
//     parent: '/electronics',
//     category: '/electronics/mobiles',
//   },
//   {
//     _id: '5f1c2d4288c5e8bfc63e85d8',
//     title: 'Samsung',
//     parent: '/electronics/mobiles',
//     category: '/electronics/mobiles/samsung',
//   },
//   {
//     _id: '5f1c2d4288c5e8bfc63e85d8',
//     title: 'Redmi',
//     parent: '/electronics/mobiles',
//     category: '/electronics/mobiles/redmi',
//   },
//   {
//     _id: '5f1c2cf788c5e8bfc63e85d4',
//     title: 'Fashion',
//     parent: '/',
//     category: '/fashion',
//   },
//   {
//     _id: '5f1c2cf788c5e8bfc63e85d4',
//     title: 'Men',
//     parent: '/fashion',
//     category: '/fashion/men',
//   },
//   {
//     _id: '5f1c2cf788c5e8bfc63e85d4',
//     title: 'Women',
//     parent: '/fashion',
//     category: '/fashion/women',
//   },
// ];
// export default menus;

// const obj = {};

// for (let i = 0; i < menus.length; i++) {
//   if (menus[i].parent === '/') {
//     obj[menus[i].title] = menus[i];
//     obj[menus[i].title].child = [];
//   } else if (menus[i].parent === obj.Electronics.category) {
//     obj.Electronics.child.push(menus[i]);
//     obj.Electronics.child[obj.Electronics.child.length - 1].child = [];
//   } else {
//     obj.Electronics.child.forEach((element) => {
//       if (menus[i].parent === element.category) {
//         if (!element.child) {
//           element.child = [];
//         }
//         element.child.push(menus[i]);
//       }
//     });
//   }
// }
//o(n^2)
// console.log(obj);
// console.log(obj.Electronics.child);

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log([i, j]);
//         return;
//       }
//     }
//   }
// };

// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);
// twoSum([3, 3], 6);

// function smallestDifference(arrayOne, arrayTwo) {
//   const arr = [];
//   let rem;
//   for (let i = 0; i < arrayOne.length; i++) {
//     for (let j = 0; j < arrayTwo.length; j++) {
//       if (
//         (Math.sign(arrayOne[i]) === 1 && Math.sign(arrayTwo[j]) === 1) ||
//         (Math.sign(arrayOne[i]) === -1 && Math.sign(arrayTwo[j]) === -1)
//       ) {
//         if (rem === undefined) {
//           rem = Math.abs(Math.abs(arrayOne[i]) - Math.abs(arrayTwo[j]));
//           [arr[0], arr[1]] = [arrayOne[i], arrayTwo[j]];
//         } else {
//           if (Math.abs(Math.abs(arrayOne[i]) - Math.abs(arrayTwo[j])) < rem) {
//             rem = Math.abs(Math.abs(arrayOne[i]) - Math.abs(arrayTwo[j]));
//             [arr[0], arr[1]] = [arrayOne[i], arrayTwo[j]];
//           }
//         }
//       } else if (
//         (Math.sign(arrayOne[i]) === -1 && Math.sign(arrayTwo[j]) === 1) ||
//         (Math.sign(arrayOne[i]) === 1 && Math.sign(arrayTwo[j]) === -1)
//       ) {
//         if (rem === undefined) {
//           rem = Math.abs(arrayOne[i]) + Math.abs(arrayTwo[j]);
//           [arr[0], arr[1]] = [arrayOne[i], arrayTwo[j]];
//         } else {
//           if (Math.abs(arrayOne[i]) + Math.abs(arrayTwo[j]) < rem) {
//             rem = Math.abs(arrayOne[i]) + Math.abs(arrayTwo[j]);
//             [arr[0], arr[1]] = [arrayOne[i], arrayTwo[j]];
//           }
//         }
//       }
//     }
//   }
//   console.log(arr);
//   console.log(rem);
// }
function smallestDifference(arrayOne, arrayTwo) {
  const arr = [];
  let rem;
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (Math.sign(arrayOne[i]) === 1 && Math.sign(arrayTwo[j]) === 1) {
        if (rem === undefined) {
          rem = Math.abs(arrayOne[i] - arrayTwo[j]);
          arr[0] = arrayOne[i];
          arr[1] = arrayTwo[j];
        } else {
          if (Math.abs(arrayOne[i] - arrayTwo[j]) < rem) {
            rem = Math.abs(arrayOne[i] - arrayTwo[j]);
            arr[0] = arrayOne[i];
            arr[1] = arrayTwo[j];
          }
        }
      } else if (Math.sign(arrayOne[i]) === -1 && Math.sign(arrayTwo[j]) === -1) {
        if (rem === undefined) {
          rem = Math.abs(Math.abs(arrayOne[i]) - Math.abs(arrayTwo[j]));
          arr[0] = arrayOne[i];
          arr[1] = arrayTwo[j];
        } else {
          if (Math.abs(Math.abs(arrayOne[i]) - Math.abs(arrayTwo[j])) < rem) {
            rem = Math.abs(Math.abs(arrayOne[i]) - Math.abs(arrayTwo[j]));
            arr[0] = arrayOne[i];
            arr[1] = arrayTwo[j];
          }
        }
      } else if (Math.sign(arrayOne[i]) === -1 && Math.sign(arrayTwo[j]) === 1) {
        if (rem === undefined) {
          rem = Math.abs(arrayOne[i]) + Math.abs(arrayTwo[j]);
          arr[0] = arrayOne[i];
          arr[1] = arrayTwo[j];
        } else {
          if (Math.abs(arrayOne[i]) + Math.abs(arrayTwo[j]) < rem) {
            rem = Math.abs(arrayOne[i]) + Math.abs(arrayTwo[j]);
            arr[0] = arrayOne[i];
            arr[1] = arrayTwo[j];
          }
        }
      } else if (Math.sign(arrayOne[i]) === 1 && Math.sign(arrayTwo[j]) === -1) {
        if (rem === undefined) {
          rem = Math.abs(arrayOne[i]) + Math.abs(arrayTwo[j]);
          arr[0] = arrayOne[i];
          arr[1] = arrayTwo[j];
        } else {
          if (Math.abs(arrayOne[i]) + Math.abs(arrayTwo[j]) < rem) {
            rem = Math.abs(arrayOne[i]) + Math.abs(arrayTwo[j]);
            arr[0] = arrayOne[i];
            arr[1] = arrayTwo[j];
          }
        }
      }
    }
  }
  console.log(arr);
  console.log(rem);
}
// smallestDifference([0, 20], [21, -2]);
// smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]);

function largestRange(array) {
  const sortedArray = array.sort((a, b) => a - b);
  let arr = [[]];
  let rem = 0;
  for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length - 1]; i++) {
    if (sortedArray.includes(i)) {
      arr[rem].push(i);
    } else {
      arr.push([]);
      rem += 1;
    }
  }
  const largeRange = arr.sort((a, b) => b.length - a.length);
  console.log([largeRange[0][0], largeRange[0][largeRange[0].length - 1]]);
}

// largestRange([1, 1, 2, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]);

// function fourNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }
// fourNumberSum([7, 6, 4, -1, 1, 2], 16);

// function subarraySort(array) {
//   const unSortedArray = [...array];
//   const arr = [];
//   const sortedArray = array.sort((a, b) => a - b);

//   for (let i = 0; i < array.length; i++) {
//     if (unSortedArray[i] !== sortedArray[i]) {
//       arr.push(i);
//     }
//   }
//   if (arr.length === 0) {
//     return [-1, -1];
//   }

//   return [Math.min(...arr), Math.max(...arr)];
// }
// subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]);

// function minRewards(scores) {
//   console.log(scores);
// }
// minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5])

// function spiralTraverse(array) {
//   console.log(array);
//   console.log(array[0].length);
//   console.log(array.length);
// }
// spiralTraverse(
//   [
//     [1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9, 8, 7]
//   ]
// )

// function reverseWordsInString(string) {
//   console.log(string);
//   let str1 = ''
//   let str2 = ''

//   for (let i = string.length - 1; i >= 0; i--) {
//     if (string[i] !== ' ') {
//       str1 = string[i] + str1
//       if (i === 0) {
//         str2 = str2 + str1 + ' '
//         str1 = ''
//       }
//     } else if (string[i] === ' ') {
//       str2 = str2 + str1 + ' '
//       str1 = ''
//     }
//   }

//   // console.log(str1);
//   console.log(str2);
// }
// reverseWordsInString('tim is great')
// reverseWordsInString('whitespaces   4')

// var isPalindrome = function (x) {
//   let integer = x + '';
//   if (integer[0] !== integer[integer.length - 1]) {
//     // return false;
//     console.log(false);
//   }
//   for (let i = 0; i < integer.length; i++) {
//     if (integer[i] !== integer[integer.length - (i + 1)]) {
//       // return false;
//       console.log(integer[i], integer[integer.length - (i + 1)]);
//       // console.log(false);
//     }
//   }

//   // return true;
//   // console.log(true);
// };

// isPalindrome(123454321);
// console.log(isPalindrome(123454321));
// isPalindrome(121);

// function longestPalindromicSubstring(string) {
//   let splittedArr = string.split('');
//   console.log(splittedArr);
//   let str = '';
//   let temp = '';
//   for (let i = 0; i < splittedArr.length; i++) {
//     for (let j = 0; j < splittedArr.length; j++) {
//       if (splittedArr[i] === splittedArr[j] && i !== j) {
//         if (temp.length > str.length) {
//           temp = temp + splittedArr[j];
//           str = temp;
//           temp = '';
//         }
//         break;
//       } else {
//         if (j === splittedArr.length && splittedArr[i] !== splittedArr[j]) {
//           temp = '';
//         } else {
//           temp = temp + splittedArr[j];
//         }
//       }
//     }
//   }
//   console.log(str);
// }

// function longestPalindromicSubstring(string) {
//   let palindromStr = ''
//   let str = ''
//   for (let i = 0; i < string.length; i++) {
//     for (let j = i + 1; j < string.length; j++) {
//       if (string[i] === string[j]) {
//         str = str + string[j]
//         if (str === str.split('').reverse().join('') && str.length > palindromStr.length) {
//           palindromStr = str;
//         }
//         str = ''
//         break
//       }
//       else if (string[i] !== string[j]) {
//         if ((j - 1) === i) {
//           str = str + string[i] + string[j];
//         }
//         else if (j === string.length - 1 && string[i] !== string[j]) {
//           str = ''
//         }
//         else {
//           str = str + string[j]
//         }
//       }
//     }
//   }

//   console.log(palindromStr);
// }

// longestPalindromicSubstring('abaxyzzyxf');
// longestPalindromicSubstring('abcdefghfedcbaa'); //zzzzzzzzzzzzzzzzzzzzz
// abcdefghfedcbaa ===aabcdefhgfedcba
// longestPalindromicSubstring('noon high it is');
// longestPalindromicSubstring("it's highnoon");

// function demo(n) {
//   for (let i = 0; i < n.length; i++) {
//     for (let j = i + 1; j < n.length; j++) {
//       console.log(n[i], n[j]);
//       if (i === 3) {
//         console.log(i);
//         break;
//       }
//     }
//   }
// }

// demo([1, 2, 3, 4, 5]);

// var removeDuplicates = function (nums) {
//   let filteredArray = [...new Set(nums)];
//   let filteredArrayLength = filteredArray.length
//   let underScores = Math.abs(nums.length - filteredArray.length)
//   for (let i = 1; i <= underScores; i++) {
//     filteredArray.push('_')
//   }
//   console.log(filteredArray);
//   console.log(filteredArrayLength);
//   return filteredArrayLength, filteredArray;
// };

// removeDuplicates([1, 1, 2])
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])

// function spiralTraverse(array) {
//   console.log(array);
// }

// spiralTraverse([
//   [1, 2, 3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9, 8, 7]
// ])

// function caesarCipherEncryptor(string, key) {
// }

// function chooseFlask(requirements, flaskTypes, markings) {
//   let startIndex = 0;
//   let endIndex = flaskTypes
//   let arr = []

//   for (let i = 0; i < requirements.length * flaskTypes; i++) {
//     for (let j = startIndex; j < endIndex; j++) {
//       if (markings[j][1] >= requirements[i % requirements.length]) {
//         arr.push(markings[j][1] - requirements[i % requirements.length])
//       }
//     }
//   }
// }

// function longestSubstringWithoutDuplication(string) {
//   if (string.length === 1) return string;
//   let res = '';
//   let str = '';
//   for (let i = 0; i < string.length; i++) {
//     for (let j = i + 1; j < string.length; j++) {
//       if (j - 1 === i) {
//         if (string[i] === string[j]) {
//           str = '';
//           break;
//         } else {
//           str = str + string[i] + string[j];
//         }
//       } else {
//         if (str.includes(string[j])) {
//           if (str.length > res.length) {
//             res = str;
//           }
//           str = '';
//           break;
//         } else if (j === string.length - 1) {
//           str = str + string[j];
//           if (str.length > res.length) {
//             res = str;
//             str = '';
//             return res;
//           } else {
//             return res;
//           }
//         } else {
//           str = str + string[j];
//         }
//       }
//     }
//   }
//   return res;
// }
// console.log(longestSubstringWithoutDuplication('abcdeabcdefc'));

// function underscorifySubstring(string, substring) {
//   let str = '';
//   let temp = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === substring[temp]) {
//       str += string[i];
//       temp += 1;
//       if (temp === substring.length - 1) {
//         str = `_${str}_`;
//         temp = 0;
//       }
//     }
//   }
// }

// underscorifySubstring('testthis is a testtest to see if testestest it works', 'test');

// function spiralTraverse(array) {
//   let arr = [];
//   let lengthOfArray = array.length;
//   let totalElements = lengthOfArray * array[0].length;

//   let temp = totalElements - 1 - array[0].length;
//   let colTemp = array[0].length;

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (i === 0) {
//         arr[j] = array[i][j];
//       } else if (i === array.length / 2) {
//       } else {
//         if (j === array[i].length - 1) {
//           arr[colTemp] = array[i][j];
//           temp--;
//         } else {
//           arr[temp + j] = array[i][j];
//         }
//       }
//     }
//   }

//   console.log(arr);
// }

/*
function spiralTraverse(array) {
  let arr = [];
  let totalElements = array.length * array[0].length;
  let elementsInArray = array[0].length;
  let temp = totalElements - 1 - elementsInArray;
  let maxElement = array[0].length;

  let midELement = totalElements - 1;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      //starting of the array
      if (i === 0) {
        arr[j] = array[i][j];
      }
      //middle of the array
      else if (i === array.length / 2) {
        if (j === 0) {
          arr[temp] = array[i][j];
          temp--;
        } else if (j === array[i].length - 1) {
          arr[maxElement] = array[i][j];
        } else {
          arr[midELement] = array[i][j];
          midELement--;
        }
      }
      //end of the array
      else if (i === array.length - 1) {
        arr[temp] = array[i][j];
        temp--;
      }
      //remaining arrays which not included start, mid and end of the array
      else {
        if (j === array[i].length - 1) {
          arr[maxElement] = array[i][j];
          temp--;
          maxElement++;
        } else {
          arr[j + temp] = array[i][j];
        }
      }
    }
  }
  console.log(arr);
}

spiralTraverse([
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
]);
// spiralTraverse([
//   [1, 2, 3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9, 8, 7],
// ]);
*/

// let url = 'https://www.postman.com/collections/b4822cbfb6b26c732123';
// // let url = 'https://corona.lmao.ninja/v2/continents?yesterday&sort';

// fetch(url)
//   .then(res => res.json())
//   .then(out =>
//     console.log('Checkout this JSON! ', out))
//   .catch(err => { throw err });

/*
function longestPeak(array) {
  let temp = 0;
  let rem = 0;
  let peak = 0;
  let isDecreaseModeActivated = false;
  for (let i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (j === 0) {
        temp = array[j];
        rem++;
      } else if (array[j] === temp) {
        peak = 0;
        temp = 0;
        rem = 0;
        break;
      } else if (array[j] > temp) {
        temp = array[j];
        rem++;
      } else if (array[j] < temp && !isDecreaseModeActivated) {
        isDecreaseModeActivated = true;
        temp = array[j];
        rem++;
      } else if (array[j] < temp && isDecreaseModeActivated) {
        temp = array[j];
        rem++;
      } else if (array[j] > temp && isDecreaseModeActivated) {
        if (rem > peak) {
          peak = rem;
        }
        rem = 0;
        temp = 0;
        isDecreaseModeActivated = false;
        break;
      }
    }
  }
  console.log(peak);
}
longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);
*/

// function mergeOverlappingIntervals(array) {
//   console.log(array);
//   let result = []
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     if ((array[i][1] - array[i][0] === 1) && (Math.sign(array[i][1]) === 1) && (Math.sign(array[i][0] === 1))) {
//       result.push(array[i])
//     } else {
//       for (let j = array[i][0]; j <= array[i][array[i].length - 1]; j++) {
//         arr.push(j);
//       }
//     }
//   }
//   console.log(arr);
//   result.push([Math.min(...arr), Math.max(...arr)])
//   result.sort((a, b) => a[0] - b[0])
//   console.log(result);
// }
// mergeOverlappingIntervals([
//   [1, 10],
//   [11, 20],
//   [21, 30],
//   [31, 40],
//   [41, 50],
//   [51, 60],
//   [61, 70],
//   [71, 80],
//   [81, 90],
//   [91, 100]
// ]);
// mergeOverlappingIntervals([
//   [1, 2],
//   [3, 5],
//   [4, 7],
//   [6, 8],
//   [9, 10],
// ]);

// let str = 'all the best'
// str = str.link('https://github.com/')

// console.log(str);

/*

function validateBst(tree) {
  console.log(tree);
  let root = tree;
  let rootValue = tree.value; //10
}

validateBst({
  left: {
    left: {
      left: {
        left: null,
        right: null,
        value: 1,
      },
      right: null,
      value: 2,
    },
    right: {
      left: null,
      right: null,
      value: 5,
    },
    value: 5,
  },
  right: {
    left: {
      left: null,
      right: {
        left: null,
        right: null,
        value: 14,
      },
      value: 13,
    },
    right: {
      left: null,
      right: null,
      value: 22,
    },
    value: 15,
  },
  value: 10,
});

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

// console.log(tree);

*/

// var x = 3;

// var foo = {
//   x: 2,
//   baz: {
//     x: 1,
//     bar: function () {
//       console.log(this.x);
//       return this.x;
//     },
//   },
// };

// var go = foo.baz.bar;
// alert(go());
// alert(foo.baz.bar());

// condition for binarysearch is the array should be the sorted array

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));

function fourNumberSum(array, targetSum) {
  const result = [];
  const sortedArray = array.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i; j < sortedArray.length; j++) {
      for (let k = j; k < sortedArray.length; k++) {
        for (let l = k; l < sortedArray.length; l++) {
          if (
            array[i] + array[j] + array[k] + array[l] === targetSum &&
            array[i] !== array[j] &&
            array[j] !== array[k] &&
            array[k] !== array[l]
          ) {
            result.push([array[i], array[j], array[k], array[l]]);
          }
        }
      }
    }
  }
  return result;
}

function threeNumberSum(array, targetSum) {
  // Write your code here.
  const result = [];
  const sortedArray = array.sort((a, b) => a - b); //[-8, -6, 1, 2, 3, 5, 6, 12]
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i; j < sortedArray.length; j++) {
      for (let k = j; k < sortedArray.length; k++) {
        if (
          array[i] + array[j] + array[k] === targetSum &&
          array[i] !== array[j] &&
          array[j] !== array[k]
        ) {
          result.push([array[i], array[j], array[k]].sort((a, b) => a - b));
        }
      }
    }
  }
  return result;
}
// threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);

function isMonotonic(array) {
  // Write your code here.
  let temp;
  for (let i = 1; i < array.length; i++) {
    if (array[0] !== array[i]) {
      temp = array[i] > array[0];
      break;
      //temp=>// false=>decreasing array // true=>increasing array
    }
  }

  if (temp) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[i - 1]) {
        return false;
      }
    }
    return true;
  }
}

// isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]);

function minRewards(scores) {
  let arr = [];
  for (let i = 0; i < scores.length; i++) {
    if (i === 0) {
      arr.push(1);
    } else {
      if (scores[i] < scores[i - 1]) {
        arr.push(1);
        for (let j = arr.length - 2; j >= 0; j--) {
          if (arr[j + 1] + 1 >= arr[j]) {
            arr[j] = arr[j + 1] + 1;
          } else {
            break;
          }
        }
      } else if (scores[i] > scores[i - 1]) {
        arr.push(arr[i - 1] + 1);
      }
    }
  }
  console.log(arr);
  console.log(arr.reduce((a, b) => a + b, 0));
}

// // minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]);
// minRewards([0, 4, 2, 1, 3]);

async function getStockInformation(date) {
  let result;

  try {
    let response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`);
    result = await response.json();
  } catch (error) {
    result = [];
  }

  console.log(result);
  console.log(result.data);
  console.log(result.data[0].open);
  console.log(result.data[0].high);
  console.log(result.data[0].low);
  console.log(result.data[0].close);
}
// getStockInformation('5-January-2000');

function preprocessDate(dates) {
  // console.log(dates.length);
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (dates.length === 12) {
    let date = `0${dates[0]}`;
    let year = `${dates[8]}${dates[9]}${dates[10]}${dates[11]}`;
    let month = `${dates[4]}${dates[5]}${dates[6]}`;

    let monthIndex = months.indexOf(month) + 1;
    if (monthIndex <= 9) {
      monthIndex = `0${monthIndex}`;
    }

    console.log(`${year}-${monthIndex}-${date}`);
  } else if (dates.length === 13) {
    let date = `${dates[0]}${dates[1]}`;
    let year = `${dates[9]}${dates[10]}${dates[11]}${dates[12]}`;
    let month = `${dates[5]}${dates[6]}${dates[7]}`;

    let monthIndex = months.indexOf(month) + 1;
    if (monthIndex <= 9) {
      monthIndex = `0${monthIndex}`;
    }

    console.log(`${year}-${monthIndex}-${date}`);
  }
}

function preprocessDate(dates) {
  // console.log(dates.length);
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let bool = dates.length === 12;

  let date = bool ? `0${dates[0]}` : `${dates[0]}${dates[1]}`;
  let year = bool
    ? `${dates[8]}${dates[9]}${dates[10]}${dates[11]}`
    : `${dates[9]}${dates[10]}${dates[11]}${dates[12]}`;
  let month = bool ? `${dates[4]}${dates[5]}${dates[6]}` : `${dates[5]}${dates[6]}${dates[7]}`;

  let monthIndex = months.indexOf(month) + 1;
  if (monthIndex <= 9) {
    monthIndex = `0${monthIndex}`;
  }

  console.log(`${year}-${monthIndex}-${date}`);
}
// preprocessDate('1st Mar 1974');
// preprocessDate('7th Apr 1904');
// preprocessDate('22nd Jan 2013');

// bind polyfill
let reference = { name: 'Shiva shankar', age: 20, country: 'India' };

function bio() {
  console.log(this.name);
}

let bindFunction = bio.bind(reference);
// bindFunction();

// Function.prototype.bindClone = (...args) => {
//   console.log(args);
//   console.log(this);
//   let func = this;
//   return () => {
//     func.bio.call(args[0]);
//   };
// };

Function.prototype.bindClone = function (...args) {
  console.log(args);
  // console.log(this);
  let func = this;
  return function () {
    func.call(args[0]);
  };
};

// let bindFunction2 = bio.bindClone(reference, 'chennai');
// bindFunction2();

// polyfill for filter array methods

// let numbers = [2, 3, 3, 9, 19, 12, 34, 38, 23];

// let filteredArray = numbers.filter((n) => n % 2 === 0);
// console.log(filteredArray);

Array.prototype.filterClone = function (cb) {
  console.log(cb);
  let arr = [];
  // console.log(this);
  this.forEach((el) => {
    // if (el % 2 === 0) {
    if (cb(el)) {
      arr.push(el);
    }
  });
  return arr;
};

// let filteredArray2 = numbers.filterClone((n) => n % 2 === 0);

// console.log(filteredArray2);

function moveElementToEnd(array, toMove) {
  let filterNotEqualMove = array.filter((n) => n !== toMove);
  let filterEqualMove = array.filter((n) => n === toMove);
  console.log(filterNotEqualMove);
  console.log(filterEqualMove);
  console.log([...filterNotEqualMove, ...filterEqualMove]);
}

// moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);

function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);

  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      arr.push(array[i]);
    } else {
      let totalElements = array[i][1] - array[i][0] + 1;
      let temp = 0;
      let tempArr = [];
      for (let j = array[i][0]; j <= array[i][1]; j++) {
        if (!(j >= arr[arr.length - 1][0] && j <= arr[arr.length - 1][1])) {
          tempArr.push(j);
          temp++;
          if (temp === totalElements && j === array[i][1]) {
            arr.push([Math.min(...tempArr), Math.max(...tempArr)]);
            tempArr = [];
            temp = 0;
          } else if (j === array[i][1]) {
            arr[arr.length - 1] = [...arr[arr.length - 1], ...tempArr];
            arr[arr.length - 1] = [
              Math.min(...arr[arr.length - 1]),
              Math.max(...arr[arr.length - 1]),
            ];
            tempArr = [];
            temp = 0;
          }
        }
      }
    }
  }
  console.log(arr);
}

// mergeOverlappingIntervals([
//   [20, 21],
//   [22, 23],
//   [0, 1],
//   [3, 4],
//   [23, 24],
//   [25, 27],
//   [5, 6],
//   [7, 19],
// ]);

// mergeOverlappingIntervals([
//   [1, 2],
//   [3, 5],
//   [4, 7],
//   [6, 8],
//   [9, 10],
// ]);

// function zigzagTraverse(array) {
//   console.log(array);
// }

// zigzagTraverse([
//   [1, 3, 4, 10],
//   [2, 5, 9, 11],
//   [6, 8, 12, 15],
//   [7, 13, 14, 16],
// ]);

function lineThroughPoints(points) {
  points.sort((a, b) => a[0] - b[0]);
  console.log(points);
}

// lineThroughPoints([
//   [1, 1],
//   [2, 2],
//   [3, 3],
//   [0, 4],
//   [-2, 6],
//   [4, 0],
//   [2, 1],
// ]);

function caesarCipherEncryptor(string, key) {
  let str = string;
  const alphabets = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  // console.log(alphabets.length);
  let lastElementIndex = alphabets.indexOf(str[str.length - 1]);
  console.log(str[str.length - 1]);
  console.log(lastElementIndex);
  for (let i = lastElementIndex + 1; i <= lastElementIndex + key; i++) {
    str += alphabets[i % 26];
  }

  console.log(str);
  console.log(str.slice(key));
}

// caesarCipherEncryptor('iwufqnkqkqoolxzzlzihqfm', 25);

function generateDocument(characters, document) {
  let char = {};
  let doc = {};

  for (let i = 0; i < characters.length; i++) {
    if (char[characters[i]]) {
      char[characters[i]] = char[characters[i]] + 1;
    } else {
      char[characters[i]] = 1;
    }
  }

  for (let i = 0; i < document.length; i++) {
    if (doc[document[i]]) {
      doc[document[i]] = doc[document[i]] + 1;
    } else {
      doc[document[i]] = 1;
    }
  }

  console.log(char);
  console.log(doc);
}

// generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!');

function generateDocument(characters, document) {
  if (document === '') return true;

  let char = {};
  let doc = {};
  const docKey = [];
  const charKey = [];

  function generateObj(reference, holder) {
    for (let i = 0; i < reference.length; i++) {
      holder[reference[i]] ? (holder[reference[i]] += 1) : (holder[reference[i]] = 1);
    }
  }
  function generateKey(reference, holder) {
    for (const key in reference) {
      holder.push(key);
    }
  }

  generateObj(characters, char);
  generateObj(document, doc);
  generateKey(char, charKey);
  generateKey(doc, docKey);

  for (let i = 0; i < docKey.length; i++) {
    if (charKey.includes(docKey[i]) && !(char[docKey[i]] >= doc[docKey[i]])) {
      return false;
    } else {
      return false;
    }
  }

  return true;
}

// console.log(generateDocument('aheaollabbhb', 'hello'));

function groupAnagrams(words) {
  let duplicates = [...words];
  for (let i = 0; i < words.length; i++) {
    let arr = [];
    for (let j = 0; j < words[i].length; j++) {
      arr.push(words[i][j].charCodeAt());
      if (j === words[i].length - 1) {
        let str = '';
        arr
          .sort((a, b) => a - b)
          .forEach((el) => {
            str = str + String.fromCharCode(el);
          });
        words[i] = str;
        str = '';
        arr = [];
      }
    }
  }
  let keys = [];
  let temp = [];

  for (let i = 0; i < words.length; i++) {
    keys[i] = [];
    for (let j = 0; j < words.length; j++) {
      if (words[i] === words[j] && i === 0) {
        temp.push(j);
        keys[i].push(duplicates[j]);
      } else if (words[i] === words[j] && i !== 0 && !temp.includes(j)) {
        temp.push(j);
        keys[i].push(duplicates[j]);
      }
    }
  }

  console.log(keys.filter((el) => el.length >= 1));
}

// groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp']);

function findThreeLargestNumbers(array) {
  if (array.every((el) => el === array[0])) return Array(3).fill(array[0]);
  let arr = [];
  let largestNumber;

  for (let i = 1; i <= 3; i++) {
    largestNumber = Math.max(...array);
    arr.unshift(largestNumber);
    if (array.every((el) => el === array[0])) {
      let lengthArr = 3 - arr.length;
      return [...Array(lengthArr).fill(array[0]), ...arr];
    }
    array = array.filter((el) => el !== largestNumber);
  }
  console.log(arr);
}

// console.log(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7]));

function binarySearch(arr, elem) {
  var start = 0; //0
  var end = arr.length - 1; //9
  var middle = Math.floor((start + end) / 2); //4
  console.log(start, end, middle);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return arr[middle];
  }
  return -1;
}

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== target && start <= end) {
    if (target > array[middle]) {
      start = start + 1;
    } else if (target < array[middle]) {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (array[middle] === target) {
    return array[middle];
  }

  return -1;
}

// console.log(binarySearch([1, 3, 9, 27, 28, 29, 33, 38, 42, 50], 27));
// console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));

function searchInSortedMatrix(matrix, target) {
  let matrixCopy = JSON.parse(JSON.stringify([...matrix]));

  let colCenter = Math.floor(matrix.length / 2);
  let rowCenter = Math.floor(matrix[0].length / 2);
  let middleElement = matrix[colCenter][rowCenter];

  function findElement(num) {
    for (let i = 0; i < matrixCopy.length; i++) {
      for (let j = 0; j < matrixCopy[i].length; j++) {
        if (matrixCopy[i][j] === num) {
          return [i, j];
        }
      }
    }
  }

  function helper(colCenter, rowCenter) {
    matrix.splice(colCenter, 1);

    for (let i = 0; i < matrix.length; i++) {
      matrix[i].splice(rowCenter, 1);
    }
    if (matrix.length === 0) {
      return [-1, -1];
    }

    colCenter = Math.floor(matrix.length / 2);
    rowCenter = Math.floor(matrix[0].length / 2);
    middleElement = matrix[colCenter][rowCenter];
  }

  while (matrix.length) {
    if (middleElement < target) {
      for (let i = rowCenter + 1; i <= matrix[colCenter].length - 1; i++) {
        if (matrix[colCenter][i] === target) {
          // return [colCenter, i];
          return findElement(target);
        }
      }

      for (let i = colCenter + 1; i <= matrix.length - 1; i++) {
        if (matrix[i][rowCenter] === target) {
          // return [i, rowCenter];
          return findElement(target);
        }
      }
      console.log(helper(colCenter, rowCenter));
      if (helper(colCenter, rowCenter)) {
        return helper(colCenter, rowCenter);
      } else {
        helper(colCenter, rowCenter);
      }
    } else if (middleElement > target) {
      for (let i = rowCenter - 1; i >= 0; i--) {
        if (matrix[colCenter][i] === target) {
          // return [colCenter, i];
          return findElement(target);
        }
      }
      for (let i = colCenter - 1; i >= 0; i--) {
        if (matrix[i][rowCenter] === target) {
          // return [i, rowCenter];
          return findElement(target);
        }
      }

      if (helper(colCenter, rowCenter).length) {
        return helper(colCenter, rowCenter);
      } else {
        helper(colCenter, rowCenter);
      }
    } else if (middleElement === target) {
      // return [colCenter, rowCenter];
      return findElement(target);
    }
  }
  return [-1, -1];
}

// console.log(
//   searchInSortedMatrix(
//     [
//       [1, 4, 7, 12, 15, 1000],
//       [2, 5, 19, 31, 32, 1001],
//       [3, 8, 24, 33, 35, 1002],
//       [40, 41, 42, 44, 45, 1003],
//       [99, 100, 103, 106, 128, 1004],
//     ],
//     43
//   )
// );

function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  let matrixCopy = JSON.parse(JSON.stringify([...matrix]));
  let colCenter = Math.floor(matrix.length / 2);
  let rowCenter = Math.floor(matrix[0].length / 2);
  let middleElement = matrix[colCenter][rowCenter];

  function findElement(num) {
    for (let i = 0; i < matrixCopy.length; i++) {
      for (let j = 0; j < matrixCopy[i].length; j++) {
        if (matrixCopy[i][j] === num) {
          return [i, j];
        }
      }
    }
  }

  while (matrix.length) {
    if (middleElement < target) {
      for (let i = rowCenter + 1; i <= matrix[colCenter].length - 1; i++) {
        if (matrix[colCenter][i] === target) {
          // return [colCenter, i];
          return findElement(target);
        }
      }

      for (let i = colCenter + 1; i <= matrix.length - 1; i++) {
        if (matrix[i][rowCenter] === target) {
          // return [i, rowCenter];
          return findElement(target);
        }
      }

      matrix.splice(colCenter, 1);

      for (let i = 0; i < matrix.length; i++) {
        matrix[i].splice(rowCenter, 1);
      }

      if (matrix.length === 0) {
        return [-1, -1];
      }

      colCenter = Math.floor(matrix.length / 2);
      rowCenter = Math.floor(matrix[0].length / 2);
      middleElement = matrix[colCenter][rowCenter];
    } else if (middleElement > target) {
      for (let i = rowCenter - 1; i >= 0; i--) {
        if (matrix[colCenter][i] === target) {
          // return [colCenter, i];
          return findElement(target);
        }
      }
      for (let i = colCenter - 1; i >= 0; i--) {
        if (matrix[i][rowCenter] === target) {
          // return [i, rowCenter];
          return findElement(target);
        }
      }

      matrix.splice(colCenter, 1);

      for (let i = 0; i < matrix.length; i++) {
        matrix[i].splice(rowCenter, 1);
      }

      if (matrix.length === 0) {
        return [-1, -1];
      }

      colCenter = Math.floor(matrix.length / 2);
      rowCenter = Math.floor(matrix[0].length / 2);
      middleElement = matrix[colCenter][rowCenter];
    } else if (middleElement === target) {
      // return [colCenter, rowCenter];
      return findElement(target);
    }
  }
  return [-1, -1];
}
// console.log(
//   searchInSortedMatrix(
//     [
//       [1, 4, 7, 12, 15, 1000],
//       [2, 5, 19, 31, 32, 1001],
//       [3, 8, 24, 33, 35, 1002],
//       [40, 41, 42, 44, 45, 1003],
//       [99, 100, 103, 106, 128, 1004],
//     ],
//     43
//   )
// );

function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  let matrixCopy = JSON.parse(JSON.stringify([...matrix]));
  let colCenter = Math.floor(matrix.length / 2);
  let rowCenter = Math.floor(matrix[0].length / 2);
  let middleElement = matrix[colCenter][rowCenter];

  function findElement(num) {
    for (let i = 0; i < matrixCopy.length; i++) {
      for (let j = 0; j < matrixCopy[i].length; j++) {
        if (matrixCopy[i][j] === num) {
          return [i, j];
        }
      }
    }
  }

  while (matrix.length) {
    if (middleElement < target) {
      for (let i = rowCenter + 1; i <= matrix[colCenter].length - 1; i++) {
        if (matrix[colCenter][i] === target) {
          // return [colCenter, i];
          return findElement(target);
        }
      }

      for (let i = colCenter + 1; i <= matrix.length - 1; i++) {
        if (matrix[i][rowCenter] === target) {
          // return [i, rowCenter];
          return findElement(target);
        }
      }

      matrix.splice(colCenter, 1);

      for (let i = 0; i < matrix.length; i++) {
        matrix[i].splice(rowCenter, 1);
      }

      if (matrix.length === 0) {
        return [-1, -1];
      }

      colCenter = Math.floor(matrix.length / 2);
      rowCenter = Math.floor(matrix[0].length / 2);
      middleElement = matrix[colCenter][rowCenter];
    } else if (middleElement > target) {
      for (let i = rowCenter - 1; i >= 0; i--) {
        if (matrix[colCenter][i] === target) {
          // return [colCenter, i];
          return findElement(target);
        }
      }
      for (let i = colCenter - 1; i >= 0; i--) {
        if (matrix[i][rowCenter] === target) {
          // return [i, rowCenter];
          return findElement(target);
        }
      }

      matrix.splice(colCenter, 1);

      for (let i = 0; i < matrix.length; i++) {
        matrix[i].splice(rowCenter, 1);
      }

      if (matrix.length === 0) {
        return [-1, -1];
      }

      colCenter = Math.floor(matrix.length / 2);
      rowCenter = Math.floor(matrix[0].length / 2);
      middleElement = matrix[colCenter][rowCenter];
    } else if (middleElement === target) {
      // return [colCenter, rowCenter];
      return findElement(target);
    }
  }
  return [-1, -1];
}

// function indexEqualsValue(array) {
//   // Write your code here.

// }

// console.log(indexEqualsValue([-5, -3, 0, 3, 4, 5, 9]));

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1] && j !== array.length - 1) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  console.log(array);
}
/*
bubbleSort([5, 3, 4, 1, 2])
// let a = [5, 3, 4, 1, 2];
// [a[0], a[1]] = [a[1], a[0]]
// console.log(a);
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  console.log(arr);
}

// insertionSort([5, 3, 4, 1, 2]);

function selectionSort(array) {
  let minElement;
  let minIndex;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i] && !minElement) {
        minElement = array[j];
        minIndex = j;
      } else if (array[j] < array[i]) {
        if (array[j] < minElement) {
          minElement = array[j];
          minIndex = j;
        }
      }
    }
    if (minElement) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      minElement = undefined;
      minIndex = undefined;
    }
    // console.log(array);
  }
  console.log(array);
}

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// selectionSort([19, 44, 38, 5, 47, 15]);

function threeNumberSort(array, order) {
  let lengthOfArray = array.length;
  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === order[i]) {
        let element = array.splice(j, 1);
        array.unshift(...element);
      }
    }
  }
  for (let i = array.length - 1; i >= 0; i--) {
    array.push(array[i]);
  }
  array.splice(0, lengthOfArray);
  console.log(array);
}

// threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]);

// function fingerNumbers(n) {
//   let fingers = ['thumb', 'index', 'middle', 'ring', 'small'];

//   for (let i = 1; i <= n; i++) {
//     let countFromLast = true;
//     if (i <= 5 && n === i) {
//       return i;
//     } else if (i === n) {
//       if (countFromLast) {
//         return fingers.length - (i - n);
//       }
//     }
//   }

//   console.log(fingers, n);
// }

function fingerNumbers(n) {
  let largestNumber = 9,
    traverseFromLast = true;
  for (let i = 1; i <= n; i++) {
    if (i <= 5 && i === n) return i;
    else if (i > 5 && i === n) {
      if (traverseFromLast) {
        return largestNumber - i + 1;
      } else if (!traverseFromLast) {
        return 5 - (largestNumber - i);
      }
    } else if (i === largestNumber) {
      largestNumber += 4;
      traverseFromLast = !traverseFromLast;
    }
  }
}

// console.log(fingerNumbers(97));

function radixSort() {}

// [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29];

class MinMaxStack {
  constructor() {
    this.stack = [];
  }

  peek() {
    // Write your code here.
    return this.stack[0];
  }

  pop() {
    // Write your code here.
    return this.stack.shift();
  }

  push(number) {
    // Write your code here.
    return this.stack.unshift(number);
  }

  getMin() {
    // Write your code here.
    this.stack.sort((a, b) => a - b);
    return this.stack[0];
  }

  getMax() {
    // Write your code here.
    this.stack.sort((a, b) => a - b);
    return this.stack[this.stack.length - 1];
  }
}

// let newInstance = new MinMaxStack();
// console.log(newInstance.push(4));
// console.log(newInstance.push(5));
// console.log(newInstance);

function minimumCharactersForWords(words) {
  let str = words[0];
  console.log(str);
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (str.includes(words[i][j])) {
      }
    }
  }
}

// minimumCharactersForWords(['this', 'that', 'did', 'deed', 'them!', 'a']);

function findClosestValueInBst(tree, target) {
  console.log(tree);
}
// findClosestValueInBst(
//   {
//     tree: {
//       nodes: [
//         { id: '10', left: '5', right: '15', value: 10 },
//         { id: '15', left: '13', right: '22', value: 15 },
//         { id: '22', left: null, right: null, value: 22 },
//         { id: '13', left: null, right: '14', value: 13 },
//         { id: '14', left: null, right: null, value: 14 },
//         { id: '5', left: '2', right: '5-2', value: 5 },
//         { id: '5-2', left: null, right: null, value: 5 },
//         { id: '2', left: '1', right: null, value: 2 },
//         { id: '1', left: null, right: null, value: 1 },
//       ],
//       root: '10',
//     },
//     target: 12,
//   },
//   13
// );

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let newNode = new BST(value);
    let current = this.value;
    let leftNode = this.left;
    let rightNode = this.right;
    while (current) {
      if (value > current) {
        //right traverse
        if (!rightNode) {
          rightNode = newNode;
          return this;
        } else {
          current = rightNode.value;
          rightNode = rightNode.right;
          leftNode = rightNode.left;
        }
      } else if (value < current) {
        //left traverse
        if (!leftNode) {
          leftNode = newNode;
          return this;
        } else {
          current = leftNode.value;
          rightNode = leftNode.right;
          leftNode = leftNode.left;
        }
      }
    }
    return this;
    // return value;
  }

  contains(value) {
    // Write your code here.
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    // return this;
  }
}

// let bst = new BST();
// console.log(bst.insert(10));
// console.log(bst.insert(12));

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    }
    let current = this.root;
    while (current) {
      if (value > current.value) {
        if (!current.right) {
          current.right = new Node(value);
          return this.root;
        } else {
          current = current.right;
        }
      } else if (value < current.value) {
        if (!current.left) {
          current.left = new Node(value);
          return this.root;
        } else {
          current = current.left;
        }
      }
    }
  }

  remove() {}

  contains(value) {
    let current = this.root;
    while (current) {
      if (value > current.value) {
        if (!current.right && current.value < value) {
          return false;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left && current.value > value) {
          return false;
        }
        current = current.left;
      } else if (value === current.value) {
        return true;
      }
    }
  }
}

let bst = new BinarySearchTree();
// console.log(bst.insert(30));
// console.log(bst.insert(40));
// console.log(bst.insert(25));
// console.log(bst.insert(29));
// console.log(bst);

/*
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);
// console.log(bst.contains(6));
// console.log(bst.contains(1000));
console.log(bst.root);
*/

// const radius = [4, 5, 1, 9];

Array.prototype.factoryFunc = function (cb) {
  let output = [];
  this.forEach((r) => {
    output.push(cb(r));
  });
  return output;
};

// let calculateArea = radius.factoryFunc((radius) => Math.PI * radius * radius);
// let calculateCircumference = radius.factoryFunc((radius) => 2 * Math.PI * radius);
// let calculateDiameter = radius.factoryFunc((radius) => 2 * radius);

// console.log(calculateArea);
// console.log(calculateCircumference);
// console.log(calculateDiameter);

const radius = [12, 4, 9, 10, 2, 24];

const factoryFunction = function (logic, radius) {
  const output = [];
  radius.forEach((r) => {
    output.push(logic(r));
  });
  return output;
};
//
// const calculateArea = factoryFunction((r) => Math.PI * r * r, radius);
// let calculateCircumference = factoryFunction((r) => 2 * Math.PI * r, radius);
// let calculateDiameter = factoryFunction((r) => 2 * r, radius);
// console.log(calculateArea, calculateCircumference, calculateDiameter);

// radius.filter();
// console.log('hello node');
// console.log(this);
// console.log(window);

// const findSum = radius.reduce((acc, cur) => {
//   console.log(acc);
//   acc = acc + cur;
//   return acc;
// }, 0);

function findMax(radius) {
  let max = 0;

  radius.forEach((r) => {
    if (r > max) {
      max = r;
    }
  });

  console.log(max);
}

// findMax(radius);

const findMaxReduce = radius.reduce((acc, cur) => {
  if (cur > acc) {
    acc = cur;
  }
  return acc;
}, 0);

// console.log(findMaxReduce);

const users = [{ age: 26 }, { age: 75 }, { age: 50 }, { age: 26 }];

const groupingAge = users.reduce((acc, user) => {
  if (acc[user.age]) {
    acc[user.age] = acc[user.age] + 1;
  } else {
    acc[user.age] = 1;
  }
  return acc;
}, {});
// console.log(groupingAge);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.nationality = 'Indian';
  }

  isAboveEighteen() {
    if (this.age >= 18) return `${this.name} is above 18`;
    else {
      return 'below 18';
    }
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
}

class Details extends Employee {
  constructor(name, age, salary, company, location, birthDate) {
    super(name, age, salary);
    this.company = company;
    this.location = location;
    this.birthDate = birthDate;
  }

  changeDetail() {
    this.name = 'Shiva';
    this.age = 17;
  }
}

// const s = new Person('Shiva shankar', 20);
// const k = new Person('Karthikeyan', 24);
// console.log(s);
// console.log(s.isAboveEighteen());
// console.log(k);

// const salaryOfS = new Employee(s.name, s.age, 65000);
// const salaryOfK = new Employee(k.name, k.age, 110000);
// console.log(salaryOfS);
// console.log(salaryOfK);

// const detailOfS = new Details('Shiva shankar', 20, 65000, 'Atom EI', 'Chennai', 22);
// console.log(detailOfS.isAboveEighteen());
// console.log(detailOfS);
// detailOfS.changeDetail();
// console.log(detailOfS.isAboveEighteen());
// console.log(detailOfS);

function funcPerson(name, age) {
  this.name = name;
  this.age = age;
  this.nationality = 'Indian';
}

funcPerson.prototype.getDetails = function () {
  console.log(this);
  return `${this.name} from ${this.nationality}`;
};

let karthik = new funcPerson('Karthik', 24);
// console.log(karthik.getDetails());
// console.log(karthik);

function funcDetails(name, age, salary, company, location) {
  funcPerson.call(this, name, age);
  this.salary = salary;
  this.company = company;
  this.location = location;
}

Object.setPrototypeOf(funcDetails.prototype, funcPerson.prototype);
let karthikDetails = new funcDetails('karthik', 24, 110000, 'Sketchnote', 'chennai');
// console.log(karthikDetails);
// console.log(karthikDetails.getDetails());

function funcJob(name, age, company, location, job) {
  // console.log(this);
  funcPerson.call(this, name, age);
  // funcDetails.call(this, company, location);
  this.job = job;
}

Object.setPrototypeOf(funcJob.prototype, funcDetails.prototype);

let karthikJob = new funcJob('karthiks', 24, 'Sketchnote', 'Mumbai', 'Full stack developer');
// console.log(karthikJob);
// console.log(karthikJob.getDetails());

// write polyfill for filter, map and foreach

// filter
let arr = [2, 4, 1, 3, 98, 12, 76];
Array.prototype.filteredArray = function (cb) {
  let filteredArray = [];
  this.forEach((el) => {
    if (cb(el)) {
      filteredArray.push(el);
    }
  });
  return filteredArray;
};

// console.log(arr.filteredArray((el) => el > 20));

// map

Array.prototype.mapArray = function (cb) {
  let mapArray = [];
  this.forEach((el) => mapArray.push(cb(el)));
  return mapArray;
};

// console.log(arr.mapArray((el) => Math.pow(el, 2)));

// foreach

Array.prototype.foreachArray = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

// arr.foreachArray((el) => console.log(el));
// arr.forEach((el) => console.log(el));

// polyfill for call ,apply ,and bind

// bind
// var pokemon = {
//   firstname: 'Pika',
//   lastname: 'Chu ',
//   getPokeName: function () {
//     var fullname = this.firstname + ' ' + this.lastname;
//     return fullname;
//   },
// };

// var pokemonName = function () {
//   console.log(this.getPokeName() + 'I choose you!');
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
// console.log(logPokemon);
// logPokemon(); // 'Pika Chu I choose you!'

let person = {
  name: 'Shiva shankar',
  location: 'Chennai',
  role: 'Front end developer',
  details: function () {
    return `${this.name} from ${this.location} working as ${this.role}`;
  },
};

Function.prototype.callFunc = function (...args) {
  let obj = this;
  let params = args.slice(1);
  console.log(args, params);
  return obj.apply(args[0], params);
};

let personDetails = function (place, nextPlace, winter) {
  return this.details() + 'would like to go ' + place + ' and ' + nextPlace + 'and' + winter;
};

// console.log(personDetails.callFunc(person, 'chennai', 'ooty', 'kanchee'));

// Function.prototype.bindFunc = function (...args) {
//   let slice = args.slice(1);
//   let obj = this;
//   return function (winter) {
//     slice.push(winter);
//     return obj.apply(args[0], slice);
//   };
// };

// let logPerson = personDetails.bindFunc(person, 'ladakh', 'tripura', 'kochi');
// console.log(logPerson('ooty'));

// const name = {
//   firstName: 'Mary',
//   lastName: 'Jane',
// };

// function printUser(address, state, country) {
//   return `${this.firstName} ${this.lastName} from ${address}, ${state}, ${country}`;
// }

// Function.prototype.myCall = function (...args) {
//   console.log(args);
//   if (typeof this !== 'function') {
//     throw new Error(`${this}.myCall is not a function`);
//   }
//   const params = [...args];
//   const context = params[0];
//   console.log(context);
//   const otherArgs = params.slice(1);
//   context.fun = this;
//   return context.fun(...otherArgs);
// };

// const output = printUser.myCall(name, 'Kol', 'WB', 'IN');
// console.log(output);

//Expected Output: "Mary Jane from Kol, WB, IN"

const name = {
  firstName: 'Mary',
  lastName: 'Jane',
};

function printUser(address, state, country, asd) {
  return `${this.firstName} ${this.lastName} from ${address}, ${state}, ${country} ${asd}`;
}

Function.prototype.myApply = function (...args) {
  // console.log(args);
  let obj = args[0];
  let strs = args[1];
  console.log(obj);
  obj.func = this;
  return obj.func(...strs);
};

// const output = printUser.myApply(name, ['Kol', 'WB', 'IN', 'asdf']);
// console.log(output);

//Expected Output: "Mary Jane from Kol, WB, IN"
