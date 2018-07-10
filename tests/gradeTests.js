//import book object from grades.js
var book = require('../libs/grades.js').book;

exports["setUp"] = function(callback) {
    book.reset();
    callback();
}
//Create a new test to check whether gradebook can add new grades
exports["Can add a new grade"] = function(test) {
    //to check whether a gradebook obect can add a new grade
    book.addGrade(100);
    book.addGrade(90);

    //to check whether the number of books added in the gradebook is the expectedvalue 2
    var count = book.getCountOfGrades();
    test.equal(count, 2);

    //to signal the end of the test
    test.done();
}

//Create a new test to check whether gradebook can average grades correctly
exports["Can average grades"] = function(test) {
    book.addGrade(100);
    book.addGrade(50);
    book.addGrade(97);

    console.log(test);

    //to check whether the grades are averaged correctly 
    var average = book.getAverageOfGrades();

    //to check whether the letter grade of the student is the expected value 'B'
    var grade = book.getLetterGrade();
    test.equal(grade, "B");

    //to signal the end of the test
    test.done()
}
