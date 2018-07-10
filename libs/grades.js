var gradeBook = {
    _grades: [],
    addGrade: function(newGrade) {
        if (typeof newGrade == typeof 3 && newGrade <= 100 && newGrade >= 0)
            this._grades.push(newGrade);
        else
            console.log("Incorrect grade added to the gradebook");
    },
    removeGrade: function() {
        this._grades.pop();
    },
    getLetterGrade: function() {
        var average = this.getAverageOfGrades();
        if (average >= 90)
         return "A"
        else if (average >= 80 && average < 90)
         return "B"
        else if (average >= 70 && average < 80)
         return "C"
        else if (average >= 60 && average < 70)
         return "D"
        else
         return "E"
    },
    getCountOfGrades: function() {
        return this._grades.length;
    },
    getAverageOfGrades: function() {
        var sum = 0;
        for (var i = 0; i < this._grades.length; i++) 
            sum += this._grades[i];
        return sum / this.getCountOfGrades();
    },
    reset: function() {
        this._grades = [];
    }
};

exports.book = gradeBook;
