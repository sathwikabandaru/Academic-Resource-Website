function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "Limestone",
        q2: "Fluid flow rate",
        q3: "Steel",
        q4: "To store rotational energy",
        q5: "Ability to be stretched into a wire",
        q6: "To hold back soil or water",
        q7: "Fluid pressure",
        q8: "Watt",
        q9: "Torsion",
        q10: "To increase heat transfer by directing fluid flow"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    // Store the score in local storage and redirect to the results page
    localStorage.setItem('quizScore', score);
    window.location.href = 'r3.html';
}
