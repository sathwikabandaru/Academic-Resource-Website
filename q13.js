function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "When one class acquires the properties and behavior of another class",
        q2: "The ability of a method to do different things based on the object calling it",
        q3: "The concept of restricting access to the inner workings of an object",
        q4: "A class that cannot be instantiated and can have abstract methods",
        q5: "It is used to refer to the superclass constructor",
        q6: "Defining multiple methods with the same name but different parameters",
        q7: "Refers to the current instance of the class",
        q8: "It is used to define constants, prevent method overriding, and prevent inheritance",
        q9: "Checks if an object is an instance of a particular class or subclass",
        q10: "A contract that defines a set of abstract methods that implementing classes must define"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });
    localStorage.setItem('quizScore', score);
    window.location.href = 'r13.html';
}