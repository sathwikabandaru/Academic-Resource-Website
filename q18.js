function submitQuiz(event) {
    event.preventDefault();      

    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "To secure data by transforming it into an unreadable format",
        q2: "Transforming data into a fixed-size string of characters",
        q3: "AES",
        q4: "Public Key Infrastructure",
        q5: "An attack where the attacker intercepts and potentially alters communication between two parties",
        q6: "To verify the authenticity and integrity of a message",
        q7: "It uses two keys: a public key for encryption and a private key for decryption",
        q8: "To create a secure and encrypted connection over a less secure network, like the internet",
        q9: "Public Key Infrastructure (PKI)",
        q10: "A security system that monitors and controls incoming and outgoing network traffic"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    localStorage.setItem('quizScore', score);
    window.location.href = 'r18.html';
}