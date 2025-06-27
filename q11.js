function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "Bit",
        q2: "AND Gate",
        q3: "Hard Drive",
        q4: "Performs mathematical and logical operations",
        q5: "Selects one input from many based on a selector value",
        q6: "Directs the operation of the processor by controlling the flow of data",
        q7: "Synchronizes the operations of the system",
        q8: "A circuit that stores one bit of data",
        q9: "Stores data temporarily for quick access by the CPU",
        q10: "Manages hardware and software resources"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    localStorage.setItem('quizScore', score);
    window.location.href = 'r11.html';  // Redirect to a results page
}