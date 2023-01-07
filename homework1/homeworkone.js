/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/

// ობიექტი 1
const userOne = {
  userName: "ანა",
  userAge: 28,
};
// ობიექტი 2
const userTwo = {
  userName: "ლევანი",
  userAge: 21,
};
// ამოხსნა
let ageDif = `${userOne.userName} ${userTwo.userName}ზე ${
  userOne.userAge - userTwo.userAge
} წლით უფროსია`;
console.log(ageDif);

/*
Task 2 : 
    გვაქვს სტუდენტების სახელების კენტი სიგრძის მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
    დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/

// მასივი
const studentNameArr = [
  "John",
  "Sam",
  "Ann",
  "Will",
  "Andrew",
  "Joseph",
  "Lorelai",
  "Amelie",
  "Den",
];
// მასივის სიგრძე
studentLen = studentNameArr.length;
// ამოხსნა
const midStudent = studentNameArr[(studentLen - 1) / 2];
console.log(midStudent);

/*
Task 3 : 
Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
firstname,lastname - string type
age - number
subject - object (array of strings)
roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

Part 2 : 
    for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

    ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

    ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
     
    დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
        ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
    

*/

// part 1
const studentOne = {
  firstName: "John",
  lastName: "Wick",
  age: 25,
  subjects: ["math", "eng", "geo", "js", "py"],
  roommate: {
    fullName: "Frank Castle",
    age: 21,
  },
};

// part 2

// საგნების ჩამონათვალი for ციკლით
let subjectsArr = studentOne.subjects;
for (i = 0; i < subjectsArr.length; i++) {
  console.log(subjectsArr[i]);
}

// Fullname-ის შექმნა და მისი ობიექტში დამატება
let fullNameOne = `${studentOne.firstName} ${studentOne.lastName}`;
studentOne.studentFullName = fullNameOne;
console.log(studentOne);

// result ცვლადი
const mateFullName = studentOne.roommate.fullName;
let result = `${fullNameOne} არის ${studentOne.age} და მისი რუმმეითი არის: ${mateFullName}`;
console.log(result);

/*
Task 4 : 
    გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
    გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
    დალოგეთ ეს ელემენტი.

*/

const fruitArr = ["Banana", "Orange", "Apple", "Mango", 2, 12];
let pIndex = 0;
while (typeof fruitArr[pIndex] == "string") {
  console.log(fruitArr[pIndex]);
  pIndex++;
}

/*
Task 5 : 
გვაქვს მასივი : [12,23,43,11,9,2,121,90]
თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/

let numbersArray = [12, 23, 43, 11, 9, 2, 121, 90];
for (i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] > 31 && numbersArray[i] % 2 === 0) {
    console.log(
      `${numbersArray[i]} is greater than the provided value and is EVEN`
    );
  } else if (numbersArray[i] < 31 && numbersArray[i] % 2 !== 0) {
    console.log(
      `${numbersArray[i]} is less than the provided value and is ODD`
    );
  }
}
