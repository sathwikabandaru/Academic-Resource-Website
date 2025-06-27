function submitQuiz(event) {
    event.preventDefault();      
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const correctAnswers = {
        q1: "Collects data from the environment using sensors and actuators",
        q2: "Bluetooth Low Energy (BLE)",
        q3: "Facilitates communication and routing of data between devices and the cloud",
        q4: "MQTT",
        q5: "Defines the applications and services that IoT devices provide to end-users",
        q6: "Zigbee",
        q7: "Cloud storage management",
        q8: "It is lightweight and optimized for low-bandwidth networks",
        q9: "It is used for lightweight communication in constrained networks",
        q10: "TLS/SSL"
    };

    let score = 0;
    answers.forEach(answer => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]) {
            score++;
        }
    });
    localStorage.setItem('quizScore', score);
    window.location.href = 'r14.html';
}