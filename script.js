function showRoadmap(type) {

    const modal = document.getElementById("roadmapModal");
    const title = document.getElementById("roadmapTitle");
    const content = document.getElementById("roadmapContent");

    let roadmapTitle = "";
    let roadmapSteps = [];


    // Data Analyst Roadmap

    if (type === "data") {

        roadmapTitle = "📊 Data Analyst Roadmap";

        roadmapSteps = [
            ["Step 1", "Learn Excel"],
            ["Step 2", "Learn SQL"],
            ["Step 3", "Learn Python"],
            ["Step 4", "Learn Power BI"],
            ["Step 5", "Build Data Analysis Projects"],
            ["Step 6", "Create Your Resume"],
            ["Step 7", "Prepare for Interviews"]
        ];

    }


    // Software Developer Roadmap

    else if (type === "software") {

        roadmapTitle = "💻 Software Developer Roadmap";

        roadmapSteps = [
            ["Step 1", "Learn Java"],
            ["Step 2", "Learn Object-Oriented Programming"],
            ["Step 3", "Learn Data Structures and Algorithms"],
            ["Step 4", "Practice Coding Problems"],
            ["Step 5", "Learn Git and GitHub"],
            ["Step 6", "Build Projects"],
            ["Step 7", "Prepare for Interviews"]
        ];

    }


    // Web Developer Roadmap

    else if (type === "web") {

        roadmapTitle = "🌐 Web Developer Roadmap";

        roadmapSteps = [
            ["Step 1", "Learn HTML"],
            ["Step 2", "Learn CSS"],
            ["Step 3", "Learn JavaScript"],
            ["Step 4", "Learn Backend Development"],
            ["Step 5", "Learn Databases"],
            ["Step 6", "Build Projects"],
            ["Step 7", "Deploy Your Website"]
        ];

    }


    title.textContent = roadmapTitle;

    content.innerHTML = "";


    // Create roadmap steps

    roadmapSteps.forEach(function(step) {

        const stepDiv = document.createElement("div");

        stepDiv.className = "roadmap-step";

        stepDiv.innerHTML = `
            <h3>${step[0]}</h3>
            <p>${step[1]}</p>
        `;

        content.appendChild(stepDiv);

    });


    // Show popup

    modal.style.display = "flex";
}


function closeRoadmap() {

    const modal = document.getElementById("roadmapModal");

    modal.style.display = "none";
}
// =============================
// PROGRESS TRACKER
// =============================

function updateProgress() {

    let java = prompt("Enter Java progress (0-100):");

    if (java === null) {
        return;
    }

    java = Number(java);


    if (isNaN(java) || java < 0 || java > 100) {

        alert("Please enter a number between 0 and 100.");

        return;
    }


    let sql = prompt("Enter SQL progress (0-100):");

    if (sql === null) {
        return;
    }

    sql = Number(sql);


    if (isNaN(sql) || sql < 0 || sql > 100) {

        alert("Please enter a number between 0 and 100.");

        return;
    }


    let python = prompt("Enter Python progress (0-100):");

    if (python === null) {
        return;
    }

    python = Number(python);


    if (isNaN(python) || python < 0 || python > 100) {

        alert("Please enter a number between 0 and 100.");

        return;
    }


    let powerbi = prompt("Enter Power BI progress (0-100):");

    if (powerbi === null) {
        return;
    }

    powerbi = Number(powerbi);


    if (isNaN(powerbi) || powerbi < 0 || powerbi > 100) {

        alert("Please enter a number between 0 and 100.");

        return;
    }


    // Update Java

    document.getElementById("javaProgress").style.width = java + "%";

    document.getElementById("javaPercent").textContent = java + "%";


    // Update SQL

    document.getElementById("sqlProgress").style.width = sql + "%";

    document.getElementById("sqlPercent").textContent = sql + "%";


    // Update Python

    document.getElementById("pythonProgress").style.width = python + "%";

    document.getElementById("pythonPercent").textContent = python + "%";


    // Update Power BI

    document.getElementById("powerbiProgress").style.width = powerbi + "%";

    document.getElementById("powerbiPercent").textContent = powerbi + "%";


    // Save progress

    localStorage.setItem("javaProgress", java);

    localStorage.setItem("sqlProgress", sql);

    localStorage.setItem("pythonProgress", python);

    localStorage.setItem("powerbiProgress", powerbi);


    alert("Your progress has been updated successfully!");
}


// =============================
// LOAD SAVED PROGRESS
// =============================

function loadProgress() {

    let java = localStorage.getItem("javaProgress");

    let sql = localStorage.getItem("sqlProgress");

    let python = localStorage.getItem("pythonProgress");

    let powerbi = localStorage.getItem("powerbiProgress");


    if (java !== null) {

        document.getElementById("javaProgress").style.width = java + "%";

        document.getElementById("javaPercent").textContent = java + "%";
    }


    if (sql !== null) {

        document.getElementById("sqlProgress").style.width = sql + "%";

        document.getElementById("sqlPercent").textContent = sql + "%";
    }


    if (python !== null) {

        document.getElementById("pythonProgress").style.width = python + "%";

        document.getElementById("pythonPercent").textContent = python + "%";
    }


    if (powerbi !== null) {

        document.getElementById("powerbiProgress").style.width = powerbi + "%";

        document.getElementById("powerbiPercent").textContent = powerbi + "%";
    }
}


// Load saved progress when the website opens

loadProgress();
// =============================
// LOAD SKILL CARD PROGRESS
// =============================

function loadSkillProgress() {

    let java = localStorage.getItem("javaProgress");

    let sql = localStorage.getItem("sqlProgress");

    let python = localStorage.getItem("pythonProgress");

    let powerbi = localStorage.getItem("powerbiProgress");


    if (java !== null) {

        document.getElementById("skillJavaProgress").style.width =
            java + "%";

        document.getElementById("skillJavaPercent").textContent =
            java + "%";
    }


    if (sql !== null) {

        document.getElementById("skillSqlProgress").style.width =
            sql + "%";

        document.getElementById("skillSqlPercent").textContent =
            sql + "%";
    }


    if (python !== null) {

        document.getElementById("skillPythonProgress").style.width =
            python + "%";

        document.getElementById("skillPythonPercent").textContent =
            python + "%";
    }


    if (powerbi !== null) {

        document.getElementById("skillPowerBIProgress").style.width =
            powerbi + "%";

        document.getElementById("skillPowerBIPercent").textContent =
            powerbi + "%";
    }
}


loadSkillProgress();
// =============================
// START LEARNING
// =============================

function startLearning(skill) {

    let title = document.getElementById("learningTitle");
    let body = document.getElementById("learningBody");

    title.textContent = skill + " Learning Path";

    if (skill === "Java") {

        body.innerHTML = `
            <div class="learning-topic">
                <h3>01. Java Basics</h3>
                <ul>
                    <li>Variables</li>
                    <li>Data Types</li>
                    <li>Operators</li>
                    <li>If-Else Conditions</li>
                    <li>Loops</li>
                </ul>
            </div>

            <div class="learning-topic">
                <h3>02. Object-Oriented Programming</h3>
                <ul>
                    <li>Classes</li>
                    <li>Objects</li>
                    <li>Inheritance</li>
                    <li>Polymorphism</li>
                </ul>
            </div>

            <div class="learning-topic">
                <h3>03. Practice</h3>
                <ul>
                    <li>Basic Java Problems</li>
                    <li>Arrays</li>
                    <li>Strings</li>
                </ul>
            </div>

            <button class="complete-button"
                    onclick="completeLearning('Java')">
                Mark as Completed
            </button>
        `;

    } else if (skill === "SQL") {

        body.innerHTML = `
            <div class="learning-topic">
                <h3>01. SQL Basics</h3>
                <ul>
                    <li>Database Concepts</li>
                    <li>Tables and Records</li>
                    <li>SELECT Statement</li>
                    <li>WHERE Clause</li>
                </ul>
            </div>

            <div class="learning-topic">
                <h3>02. SQL Queries</h3>
                <ul>
                    <li>ORDER BY</li>
                    <li>GROUP BY</li>
                    <li>HAVING</li>
                    <li>Aggregate Functions</li>
                </ul>
            </div>

            <div class="learning-topic">
                <h3>03. Advanced SQL</h3>
                <ul>
                    <li>Joins</li>
                    <li>Subqueries</li>
                    <li>Primary Keys</li>
                    <li>Foreign Keys</li>
                </ul>
            </div>

            <button class="complete-button"
                    onclick="completeLearning('SQL')">
                Mark as Completed
            </button>
        `;

    } else if (skill === "Python") {

        body.innerHTML = `
            <div class="learning-topic">
                <h3>01. Python Basics</h3>
                <ul>
                    <li>Variables</li>
                    <li>Data Types</li>
                    <li>Operators</li>
                    <li>Input and Output</li>
                </ul>
            </div>

            <div class="learning-topic">
                <h3>02. Python Programming</h3>
                <ul>
                    <li>If-Else</li>
                    <li>Loops</li>
                    <li>Functions</li>
                    <li>Lists and Tuples</li>
                </ul>
            </div>

            <div class="learning-topic">
                <h3>03. Data Analysis</h3>
                <ul>
                    <li>NumPy Basics</li>
                    <li>Pandas Basics</li>
                    <li>Data Cleaning</li>
                    <li>Data Visualization</li>
                </ul>
            </div>

            <button class="complete-button"
                    onclick="completeLearning('Python')">
                Mark as Completed
            </button>
        `;

    } else if (skill === "Power BI") {

        body.innerHTML = `
            <div class="learning-topic">
                <h3>01. Power BI Basics</h3>
                <ul>
                    <li>Introduction to Power BI</li>
                    <li>Power BI Desktop</li>
                    <li>Importing Data</li>
                    <li>Data Sources</li>
                </ul>
            </div>

            <div class="learning-topic">
                <h3>02. Data Preparation</h3>
                <ul>
                    <li>Power Query</li>
                    <li>Data Cleaning</li>
                    <li>Transforming Data</li>
                    <li>Relationships</li>
                </ul>
            </div>

            <div class="learning-topic">
                <h3>03. Data Visualization</h3>
                <ul>
                    <li>Charts</li>
                    <li>Tables</li>
                    <li>Slicers</li>
                    <li>Dashboards</li>
                </ul>
            </div>

            <button class="complete-button"
                    onclick="completeLearning('Power BI')">
                Mark as Completed
            </button>
        `;
    }

    document.getElementById("learningModal").style.display = "flex";
}


function closeLearning() {

    document.getElementById("learningModal").style.display = "none";

}


function completeLearning(skill) {

    if (skill === "Java") {

        localStorage.setItem("javaProgress", 100);

        document.getElementById("javaProgress").style.width = "100%";
        document.getElementById("javaPercent").textContent = "100%";

        document.getElementById("skillJavaProgress").style.width = "100%";
        document.getElementById("skillJavaPercent").textContent = "100%";

    } else if (skill === "SQL") {

        localStorage.setItem("sqlProgress", 100);

        document.getElementById("sqlProgress").style.width = "100%";
        document.getElementById("sqlPercent").textContent = "100%";

        document.getElementById("skillSqlProgress").style.width = "100%";
        document.getElementById("skillSqlPercent").textContent = "100%";

    } else if (skill === "Python") {

        localStorage.setItem("pythonProgress", 100);

        document.getElementById("pythonProgress").style.width = "100%";
        document.getElementById("pythonPercent").textContent = "100%";

        document.getElementById("skillPythonProgress").style.width = "100%";
        document.getElementById("skillPythonPercent").textContent = "100%";

    } else if (skill === "Power BI") {

        localStorage.setItem("powerbiProgress", 100);

        document.getElementById("powerbiProgress").style.width = "100%";
        document.getElementById("powerbiPercent").textContent = "100%";

        document.getElementById("skillPowerBIProgress").style.width = "100%";
        document.getElementById("skillPowerBIPercent").textContent = "100%";
    }

    alert(skill + " learning completed!");

    closeLearning();
}
// Coding Practice

let currentQuestion = 0;
let score = 0;

let codingQuestions = [

    {
        question: "What is the output of the following Java code?",
        code: `int a = 10;
System.out.println(a);`,
        answer: "10"
    },

    {
        question: "What is the output of the following Java code?",
        code: `int a = 5;
int b = 3;
System.out.println(a + b);`,
        answer: "8"
    },

    {
        question: "What is the output of the following Java code?",
        code: `int a = 4;
System.out.println(a * 2);`,
        answer: "8"
    }

];


function openCodingPractice() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("codingModal").style.display = "flex";

    showQuestion();

}


function closeCodingPractice() {

    document.getElementById("codingModal").style.display = "none";

}


function showQuestion() {

    let question = codingQuestions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        "Question " + (currentQuestion + 1);

    document.getElementById("questionText").textContent =
        question.question;

    document.getElementById("questionCode").textContent =
        question.code;

    document.getElementById("codingAnswer").value = "";

    document.getElementById("codingResult").textContent = "";

    document.getElementById("checkButton").style.display = "block";

    document.getElementById("nextButton").style.display = "none";

}


function checkCodingAnswer() {

    let answer =
        document.getElementById("codingAnswer").value.trim();

    let result =
        document.getElementById("codingResult");

    let correctAnswer =
        codingQuestions[currentQuestion].answer;

    if (answer === correctAnswer) {

        result.textContent = "Correct! 🎉";

        score++;

    } else {

        result.textContent =
            "Wrong! Correct answer is " + correctAnswer;

    }

    document.getElementById("checkButton").style.display = "none";

    document.getElementById("nextButton").style.display = "block";

}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < codingQuestions.length) {

        showQuestion();

    } else {

        showFinalScore();

    }

}


function showFinalScore() {

    document.getElementById("questionNumber").textContent =
        "Practice Completed! 🎉";

    document.getElementById("questionText").textContent =
        "Your final score is " + score + " / " + codingQuestions.length;

    document.getElementById("questionCode").textContent = "";

    document.getElementById("codingAnswer").style.display = "none";

    document.getElementById("checkButton").style.display = "none";

    document.getElementById("nextButton").style.display = "none";

    document.getElementById("codingResult").textContent =
        "Great job! Keep practicing to improve your score.";
     localStorage.setItem(
    "codingScore",
    score + "/" + codingQuestions.length
);

}
// Aptitude Practice

let currentAptitudeQuestion = 0;
let aptitudeScore = 0;
let selectedAptitudeAnswer = "";


let aptitudeQuestions = [

    {
        question: "What is 20% of 100?",
        options: ["10", "20", "30", "40"],
        answer: "20"
    },

    {
        question: "If 5 + 5 = 10, what is 10 + 10?",
        options: ["15", "20", "25", "30"],
        answer: "20"
    },

    {
        question: "A train travels 60 km in 1 hour. How far will it travel in 2 hours?",
        options: ["60 km", "100 km", "120 km", "180 km"],
        answer: "120 km"
    }

];


function openAptitudePractice() {

    currentAptitudeQuestion = 0;
    aptitudeScore = 0;

    document.getElementById("aptitudeModal").style.display = "flex";

    showAptitudeQuestion();

}


function closeAptitudePractice() {

    document.getElementById("aptitudeModal").style.display = "none";

}


function showAptitudeQuestion() {

    let question =
        aptitudeQuestions[currentAptitudeQuestion];

    selectedAptitudeAnswer = "";

    document.getElementById(
        "aptitudeQuestionNumber"
    ).textContent =
        "Question " + (currentAptitudeQuestion + 1);

    document.getElementById(
        "aptitudeQuestionText"
    ).textContent =
        question.question;


    let optionsHTML = "";

    question.options.forEach(function(option) {

        optionsHTML += `
            <button
                class="aptitude-option"
                onclick="selectAptitudeAnswer('${option}')">
                ${option}
            </button>
        `;

    });


    document.getElementById(
        "aptitudeOptions"
    ).innerHTML = optionsHTML;


    document.getElementById(
        "aptitudeResult"
    ).textContent = "";


    document.getElementById(
        "aptitudeCheckButton"
    ).style.display = "block";


    document.getElementById(
        "aptitudeNextButton"
    ).style.display = "none";

}


function selectAptitudeAnswer(answer) {

    selectedAptitudeAnswer = answer;

}


function checkAptitudeAnswer() {

    let result =
        document.getElementById("aptitudeResult");


    if (selectedAptitudeAnswer === "") {

        result.textContent =
            "Please select an answer first.";

        return;

    }


    let correctAnswer =
        aptitudeQuestions[currentAptitudeQuestion].answer;


    if (selectedAptitudeAnswer === correctAnswer) {

        result.textContent = "Correct! 🎉";

        aptitudeScore++;

    } else {

        result.textContent =
            "Wrong! Correct answer is " + correctAnswer;

    }


    document.getElementById(
        "aptitudeCheckButton"
    ).style.display = "none";


    document.getElementById(
        "aptitudeNextButton"
    ).style.display = "block";

}


function nextAptitudeQuestion() {

    currentAptitudeQuestion++;


    if (
        currentAptitudeQuestion <
        aptitudeQuestions.length
    ) {

        showAptitudeQuestion();

    } else {

        showAptitudeFinalScore();

    }

}


function showAptitudeFinalScore() {

    document.getElementById(
        "aptitudeQuestionNumber"
    ).textContent =
        "Practice Completed! 🎉";


    document.getElementById(
        "aptitudeQuestionText"
    ).textContent =
        "Your final score is " +
        aptitudeScore +
        " / " +
        aptitudeQuestions.length;


    document.getElementById(
        "aptitudeOptions"
    ).innerHTML = "";


    document.getElementById(
        "aptitudeCheckButton"
    ).style.display = "none";


    document.getElementById(
        "aptitudeNextButton"
    ).style.display = "none";


    document.getElementById(
        "aptitudeResult"
    ).textContent =
        "Keep practicing to improve your aptitude skills!";
    localStorage.setItem(
    "aptitudeScore",
    aptitudeScore + "/" + aptitudeQuestions.length
);

}
function openResumeBuilder() {
    document.getElementById("resumeModal").style.display = "flex";
}

function closeResumeBuilder() {
    document.getElementById("resumeModal").style.display = "none";
}
function generateResume() {

    let name = document.getElementById("resumeName").value;
    let email = document.getElementById("resumeEmail").value;
    let phone = document.getElementById("resumePhone").value;
    let college = document.getElementById("resumeCollege").value;
    let degree = document.getElementById("resumeDegree").value;
    let skills = document.getElementById("resumeSkills").value;
    let projects = document.getElementById("resumeProjects").value;
    let certifications = document.getElementById("resumeCertifications").value;

    if (name === "" || email === "" || college === "") {
        alert("Please fill in your Name, Email and College.");
        return;
    }

    let resumeHTML = `
        <div class="resume-preview">

            <h1>${name}</h1>

            <p>
                ${email} | ${phone}
            </p>

            <hr>

            <h2>Education</h2>
            <p>
                <strong>${degree}</strong><br>
                ${college}
            </p>

            <h2>Skills</h2>
            <p>${skills}</p>

            <h2>Projects</h2>
            <p>${projects}</p>

            <h2>Certifications</h2>
            <p>${certifications}</p>

        </div>
    `;
    localStorage.setItem("resumeCompleted", "true");

    document.getElementById("resumeModal").innerHTML = `
    <div class="modal-content resume-content">

        <button
            class="close-button"
            onclick="closeResumeBuilder()">
            ×
        </button>

        ${resumeHTML}

        <div class="resume-actions">

            <button
                class="complete-button"
                onclick="window.print()">
                🖨️ Download / Print Resume
            </button>

        </div>

    </div>
`;
}
function loadDashboardScores() {

    let codingScore = localStorage.getItem("codingScore");
    let aptitudeScoreValue = localStorage.getItem("aptitudeScore");

    if (codingScore !== null) {

        document.getElementById("dashboardCodingScore").textContent =
            codingScore;

    }

    if (aptitudeScoreValue !== null) {

        document.getElementById("dashboardAptitudeScore").textContent =
            aptitudeScoreValue;

    }
}

loadDashboardScores();
function calculateReadiness() {

    let codingScore = localStorage.getItem("codingScore");
    let aptitudeScore = localStorage.getItem("aptitudeScore");

    let codingPercentage = 0;
    let aptitudePercentage = 0;

    if (codingScore !== null) {
        let parts = codingScore.split("/");
        codingPercentage =
            (Number(parts[0]) / Number(parts[1])) * 100;
    }

    if (aptitudeScore !== null) {
        let parts = aptitudeScore.split("/");
        aptitudePercentage =
            (Number(parts[0]) / Number(parts[1])) * 100;
    }

    let java = Number(localStorage.getItem("javaProgress")) || 0;
    let sql = Number(localStorage.getItem("sqlProgress")) || 0;
    let python = Number(localStorage.getItem("pythonProgress")) || 0;
    let powerbi = Number(localStorage.getItem("powerbiProgress")) || 0;
let resumeCompleted =
    localStorage.getItem("resumeCompleted") === "true";

let resumePercentage = resumeCompleted ? 100 : 0;
    let skillsPercentage =
        (java + sql + python + powerbi) / 4;

    let readiness =
    (codingPercentage +
     aptitudePercentage +
     skillsPercentage +
     resumePercentage) / 4;
    readiness = Math.round(readiness);

    document.getElementById("readinessPercent").textContent =
        readiness + "%";

    if (readiness >= 80) {

        document.getElementById("readinessMessage").textContent =
            "Excellent! You are well prepared for placements. 🎉";

    } else if (readiness >= 50) {

        document.getElementById("readinessMessage").textContent =
            "Good progress! Keep practicing to improve.";

    } else {

        document.getElementById("readinessMessage").textContent =
            "Keep practicing and continue building your skills.";
    }
}

calculateReadiness();