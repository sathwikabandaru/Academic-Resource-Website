function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "Newton",
        q2: "Energy cannot be created or destroyed, only transformed",
        q3: "3 × 10^8 m/s",
        q4: "For every action, there is an equal and opposite reaction",
        q5: "1/2 mv^2",
        q6: "Ampere",
        q7: "2π√(l/g)",
        q8: "V = IR",
        q9: "s = ut + 1/2 at²",
        q10: "The angle of incidence equals the angle of reflection"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    localStorage.setItem('quizScore', score);
    window.location.href = 'r6.html';  // Redirect to results page
}