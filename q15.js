function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "To standardize the functions of a communication system into layers",
        q2: "Data Link layer",
        q3: "HTTPS",
        q4: "A unique identifier for a device on a network",
        q5: "Domain Name System",
        q6: "To define the network and host portions of an IP address",
        q7: "Transmission Control Protocol/Internet Protocol",
        q8: "BGP",
        q9: "A private network that is created over a public network",
        q10: "To block unauthorized access to or from a private network"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });
    localStorage.setItem('quizScore', score);
    window.location.href = 'r15.html'; }