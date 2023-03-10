// შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი .
// ფუნქციას გადაეცით ობიექტი არგუმეტნად

// let sampleObject = {
//     isItarable : false,
//     sampleArray : [12,63,21,34,98,57]
// }
// თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
// თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

let sampleObject = {
  isItarable: false,
  sampleArray: [12, 63, 21, 34, 98, 57],
};

function itarable(a) {
  if (a.isItarable == true) {
    console.log(a);
  } else {
    console.log("provided array isn't itarable");
  }
}

itarable(sampleObject);

//Task 2
/*
შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
წინააღმდეგ შემთხვევაში false

*/

function checkPythagoras(a, b, c) {
  if (a * a + b * b === c * c) {
    console.log("true");
  } else {
    console.log("false");
  }
}

checkPythagoras(12, 5, 13);

//Task 3
/*
დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
დააბრუნოს "Min value is 2 and Max value is 75"
*/
function minMax(a) {
  let min = Math.min(...a);
  let max = Math.max(...a);
  console.log(`Min value is ${min} and Max value is ${max}`);
}

minMax([2, 14, 25, 75, 11, 6]);

//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

// function checkDeg (deg) {

function degCheck(deg) {
  if (deg > 0 && deg < 90) {
    return "Acute angle";
  } else if (deg === 90) {
    return "Right angle";
  } else if (deg > 90 && deg < 180) {
    return "Obtuse angle";
  } else if (deg === 180) {
    return "Straight angle";
  }
}
// }

// checkDeg(92)
const resultOne = degCheck(92);
console.log(resultOne);

//Task 5
/*
დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
მიღებული მასივი დააბრუნებინეთ ფუნქციას .

0-50 = F
51-60 = E
61-70 = D
71-80 = C
81-100 = A

საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
[{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/

function gradeCheck(a) {
  for (let student of studentArr) {
    if (student.grade >= 81) {
      student.finalResult = "A";
    } else if (student.grade >= 71) {
      student.finalResult = "B";
    } else if (student.grade >= 61) {
      student.finalResult = "C";
    } else if (student.grade >= 51) {
      student.finalResult = "D";
    } else {
      student.finalResult = "F";
    }
  }
  return studentArr;
}

let studentArr = [
  { name: "student1", grade: 91 },
  { name: "student2", grade: 71 },
  { name: "student3", grade: 45 },
];

studentArr = gradeCheck(studentArr);
console.log(studentArr);
