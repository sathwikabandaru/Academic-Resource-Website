function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "To block unauthorized access to a network",
        q2: "A method of stealing user credentials through fake websites",
        q3: "Using a password and a fingerprint scan",
        q4: "Software designed to damage or disrupt computers",
        q5: "Malicious software that locks files and demands payment",
        q6: "Virtual Private Network",
        q7: "Sudden increase in network traffic",
        q8: "To make data unreadable by unauthorized parties",
        q9: "An attack that exploits a vulnerability before it is known or patched",
        q10: "A distributed denial-of-service attack that overwhelms a website with traffic"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });
    
    // Store the score in localStorage and redirect to the result page
    localStorage.setItem('quizScore', score);
    window.location.href = 'r19.html'; // Assuming this is the results page
}