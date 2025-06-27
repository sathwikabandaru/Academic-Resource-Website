function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "2x",
        q2: "x^4/4",
        q3: "3x^2 + 3y^2 + 3z^2",
        q4: "(2x, 2y)",
        q5: "(0, 0, 0)",
        q6: "z = 2x + 2y - 2",
        q7: "6",
        q8: "4",
        q9: "0",
        q10: "Relates a line integral around a simple closed curve to a double integral over the plane region it encloses"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    localStorage.setItem('quizScore', score);
    window.location.href = 'r5.html';  // Redirect to results page
}