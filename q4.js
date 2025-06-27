function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "To communicate technical information about a product",
        q2: "Millimeters (mm)",
        q3: "To represent the object as if viewed from the front, with the object placed in the first quadrant",
        q4: "A method of representing three-dimensional objects in two dimensions",
        q5: "A 3D view where all three axes are equally foreshortened",
        q6: "Permissible variations in dimensions",
        q7: "Continuous thick lines",
        q8: "To show internal features of an object",
        q9: "Edges or features not visible from the current view",
        q10: "A ratio that defines the proportion between the drawing and the actual object"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    localStorage.setItem('quizScore', score);
    window.location.href = 'r4.html';
}