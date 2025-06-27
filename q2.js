function submitQuiz(event) {
    event.preventDefault(); // Prevent form submission

    // Collect all the selected answers
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    // Define the correct answers for the quiz
    const correctAnswers = {
        q1: "Methane",
        q2: "Hydrochloric acid (HCl)",
        q3: "moles per liter (mol/L)",
        q4: "To increase the rate of the reaction",
        q5: "Neoprene",
        q6: "7",
        q7: "C₆H₆",
        q8: "To extract metals from their ores",
        q9: "Nitrous oxide (N₂O)",
        q10: "To remove rust from steel"
    };

    let score = 0;

    // Loop through each selected answer
    answers.forEach(answer => {
        const questionName = answer.name; // e.g., 'q1', 'q2', etc.
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    // Store the score in localStorage
    localStorage.setItem('quizScore', score);

    // Redirect to the results page
    window.location.href = 'r2.html';
}
