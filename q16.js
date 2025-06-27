function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "O(log n)",
        q2: "O(log n)",
        q3: "Optimization problems",
        q4: "Merge Sort",
        q5: "Knapsack Problem",
        q6: "It selects the best option available at each step",
        q7: "O(n log n)",
        q8: "O(n)",
        q9: "Bubble Sort",
        q10: "It represents the worst-case scenario of an algorithm's time complexity"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });
    localStorage.setItem('quizScore', score);
    window.location.href = 'r16.html';  // Redirect to a result page (you can customize this)
}