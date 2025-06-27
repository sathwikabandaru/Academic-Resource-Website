function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "To define what the software will do and its constraints",
        q2: "A description of how a user interacts with a system",
        q3: "Changing the code to improve its structure without altering its functionality",
        q4: "Frequent delivery of small, working pieces of software",
        q5: "A reusable solution to a commonly occurring problem in software design",
        q6: "Encapsulation, inheritance, and polymorphism",
        q7: "Tracking changes to the codebase over time",
        q8: "To test individual components or functions of the software for correctness",
        q9: "To find and fix bugs or issues in the software",
        q10: "To automatically merge code changes from multiple developers and run tests"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });
    localStorage.setItem('quizScore', score);
    window.location.href = 'r17.html';  // Redirect to a result page (you can customize this)
}