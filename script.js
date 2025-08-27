const question = {
    correct: "transducer",
    options: ["transducer", "lock nut", "support", "key tab"]
};

function disableOptions() {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
    });
}

function loadQuestion() {
    const nextButton = document.getElementById("next");
    nextButton.disabled = true;
    nextButton.style.display = "none";
    document.getElementById("feedback").textContent = "";

    // Display question image
    document.getElementById("question").innerHTML = `
        <img src="transducer_b.png" alt="Question Image" style="max-width: 100%; height: auto;">
    `;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    question.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = `option-btn option-btn-${index + 1}`;
        btn.onclick = () => {
            if (option === question.correct) {
                btn.classList.add("correct");
                document.getElementById("feedback").textContent = "✅ Correct!";
                disableOptions();
                nextButton.disabled = false;
                nextButton.style.display = "block";
                nextButton.style.margin = "0 auto"; // Centers the button horizontally
            } else {
                btn.classList.add("incorrect");
                document.getElementById("feedback").textContent = "❌ Wrong. Try again.";
                btn.disabled = true;
            }
        };
        optionsDiv.appendChild(btn);
    });
}

document.getElementById("next").onclick = () => {
    // Replace 'YOUR_GOOGLE_SITES_URL' with the actual URL of the page where you embedded the Google Form.
    window.location.href = 'https://script.google.com/macros/s/AKfycbz0rGKd05Jp06lKRQnGDxKF-EQRlUvXVUE-MH3OeKkpKvlNT07SkfGQznTYw4UHBxxntg/exec';
};

loadQuestion();
