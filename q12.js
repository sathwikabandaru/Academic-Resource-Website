function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "O(1)", // Access in hash table
        q2: "Stack", // Recursion uses stack
        q3: "O(log n)", // Search in balanced BST
        q4: "O(n^2)", // Worst-case QuickSort
        q5: "Dijkstra's Algorithm", // Shortest path
        q6: "Heap", // Priority queue
        q7: "O(log n)", // Insertion in self-balancing BST
        q8: "Random access to elements is not possible", // Linked list disadvantage
        q9: "It provides fast access to elements using keys", // Hash table
        q10: "O(n)" // Merge Sort space complexity
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });

    localStorage.setItem('quizScore', score);
    window.location.href = 'r12.html';  // redirect to result page
}