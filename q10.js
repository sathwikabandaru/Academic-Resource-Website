function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "A set of vertices connected by edges",
        q2: "A path that visits every edge exactly once",
        q3: "The number of edges incident to the vertex",
        q4: "A graph whose vertices can be divided into two disjoint sets such that no two vertices within the same set are adjacent",
        q5: "There is a path between every pair of vertices in the graph",
        q6: "A connected acyclic graph",
        q7: "The minimum number of colors needed to color the vertices of the graph such that no two adjacent vertices have the same color",
        q8: "A graph where edges have a direction, from one vertex to another",
        q9: "A path that starts and ends at the same vertex without repeating any edges",
        q10: "A graph that can be drawn on a plane without any edges crossing"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    localStorage.setItem('quizScore', score);
    window.location.href = 'r10.html';  // Redirect to a result page (you can create this page)
}