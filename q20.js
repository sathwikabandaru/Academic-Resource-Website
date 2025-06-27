function submitQuiz(event) {
    event.preventDefault();

    // Get all the selected answers
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    
    // Define the correct answers
    const correctAnswers = {
        q1: "A decentralized, distributed ledger technology",
        q2: "A set of data containing transaction information",
        q3: "The process of verifying and adding transactions to the blockchain",
        q4: "A self-executing contract with the terms of the agreement directly written into code",
        q5: "A digital or virtual currency secured by cryptography",
        q6: "To ensure all participants in the blockchain network agree on the current state of the ledger",
        q7: "Bitcoin",
        q8: "A cryptographic key used to encrypt transactions and verify identities",
        q9: "A split in the blockchain network that creates two separate chains",
        q10: "A participant in the network that stores a copy of the blockchain and validates transactions"
    };

    let score = 0;

    // Check the answers
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    // Store the score in localStorage and redirect to result page
    localStorage.setItem('quizScore', score);
    window.location.href = 'r20.html'; // Update to the path of your result page
}