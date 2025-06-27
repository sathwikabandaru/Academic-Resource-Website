function submitQuiz(event) {
    event.preventDefault();      

 
    const answers = document.querySelectorAll('input[type="radio"]:checked');

     
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
     
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });
 
    localStorage.setItem('quizScore', score);

    window.location.href = 'r9.html'; 
}