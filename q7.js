function submitQuiz(event) {
    event.preventDefault();

    // Collecting all the selected answers
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    // Correct answers for the Engineering Mechanics quiz
    const correctAnswers = {
        q1: "A push or pull on an object",
        q2: "Newton",
        q3: "Newton's Third Law",
        q4: "The rotational effect of a force about a point or axis",
        q5: "The point where the total weight of the body acts",
        q6: "A quantity that has both magnitude and direction",
        q7: "The resistance of the body to angular acceleration",
        q8: "A state where the sum of forces and the sum of moments are zero",
        q9: "The force required to stretch or compress a spring is proportional to the displacement",
        q10: "The energy transferred by a force acting through a distance"
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
    window.location.href = 'r7.html'; // Modify this to your actual result page
}