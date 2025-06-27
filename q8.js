function submitQuiz(event) {
    event.preventDefault();      

    // Collecting all the selected answers
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    // Correct answers for the Basic Electrical and Electronics Engineering quiz
    const correctAnswers = {
        q1: "V = IR",
        q2: "Stores electrical energy",
        q3: "Ohm",
        q4: "Transistor",
        q5: "P = VI",
        q6: "Allows current to flow in one direction only",
        q7: "AC changes direction periodically, while DC flows in one direction",
        q8: "Changes the voltage level of alternating current",
        q9: "Farad",
        q10: "A reference point with zero voltage"
    };

    let score = 0;
    // Check answers
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    // Store the score in localStorage
    localStorage.setItem('quizScore', score);

    // Redirect to the result page
    window.location.href = 'r8.html'; // Modify this to your actual result page
}