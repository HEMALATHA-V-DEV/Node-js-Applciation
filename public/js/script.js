const quiz = [
  // DevOps Questions
  { 
    topic: 'devops',
    questions: [
      {
        question: "What does CI/CD stand for?",
        options: ["Continuous Integration/Continuous Delivery", "Container Integration/Continuous Deployment", "Cloud Infrastructure/Continuous Development", "Continuous Improvement/Continuous Development"],
        correctAnswer: 0
      },
      {
        question: "Which tool is commonly used for version control?",
        options: ["Docker", "Kubernetes", "Git", "Ansible"],
        correctAnswer: 2
      },
      {
        question: "Which tool is used for container orchestration?",
        options: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
        correctAnswer: 1
      },
      {
        question: "What is Infrastructure as Code?",
        options: ["Manual server configuration", "Using code to manage infrastructure", "Physical data center management", "Virtualization technology"],
        correctAnswer: 1
      },
      {
        question: "Which tool is used for continuous integration?",
        options: ["Jenkins", "Docker", "Ansible", "Nagios"],
        correctAnswer: 0
      },
      {
        question: "Which of the following is a containerization tool?",
        options: ["Docker", "Jenkins", "Terraform", "Git"],
        correctAnswer: 0
      },
      {
        question: "What is the primary purpose of Infrastructure as Code (IaC)?",
        options: ["Manual configuration", "Automate infrastructure management", "Security scanning", "Application deployment"],
        correctAnswer: 1
      },
      {
        question: "Which tool is commonly used for configuration management?",
        options: ["Jenkins", "Kubernetes", "Ansible", "Terraform"],
        correctAnswer: 2
      },
      {
        question: "Which of the following is a popular container orchestration tool?",
        options: ["Docker", "Jenkins", "Kubernetes", "Prometheus"],
        correctAnswer: 2
      },
      {
        question: "What is the main advantage of using CI/CD pipelines?",
        options: ["Automated testing", "Faster deployment cycles", "Automated monitoring", "Cost savings"],
        correctAnswer: 1
      },
      // Add more DevOps questions as needed...
    ]
  },
  // AWS Questions
  {
    topic: 'aws',
    questions: [
      {
        question: "Which service is used for object storage in AWS?",
        options: ["EC2", "S3", "RDS", "Lambda"],
        correctAnswer: 1
      },
      {
        question: "What does EC2 stand for?",
        options: ["Elastic Compute Cloud", "Elastic Container Cloud", "Elastic Code Cloud", "Elastic Computer Cloud"],
        correctAnswer: 0
      },
      {
        question: "Which AWS service is used for managed databases?",
        options: ["S3", "RDS", "Lambda", "IAM"],
        correctAnswer: 1
      },
      {
        question: "Which AWS service is used for serverless computing?",
        options: ["EC2", "Lambda", "Elastic Beanstalk", "Lightsail"],
        correctAnswer: 1
      },
      {
        question: "Which AWS service is used for content delivery?",
        options: ["CloudWatch", "CloudTrail", "CloudFront", "CloudFormation"],
        correctAnswer: 2
      },
      {
        question: "What is the main purpose of AWS IAM?",
        options: ["Manage EC2 instances", "Control access to AWS resources", "Monitor AWS services", "Manage S3 buckets"],
        correctAnswer: 1
      },
      {
        question: "Which AWS service allows you to run containers?",
        options: ["ECS", "RDS", "S3", "CloudFormation"],
        correctAnswer: 0
      },
      {
        question: "Which service is used for monitoring AWS resources?",
        options: ["CloudWatch", "CloudTrail", "Route 53", "Elastic Beanstalk"],
        correctAnswer: 0
      },
      {
        question: "What does VPC stand for in AWS?",
        options: ["Virtual Private Cloud", "Virtual Public Cloud", "Virtual Private Connection", "Virtual Public Connection"],
        correctAnswer: 0
      },
      {
        question: "Which AWS service is used for creating and managing infrastructure as code?",
        options: ["CloudFormation", "CloudFront", "CloudTrail", "IAM"],
        correctAnswer: 0
      },
      // Add more AWS questions as needed...
    ]
  }
];

let score = 0;
let currentQuestionIndex = 0;
let currentTopic = 'devops';  // Default topic
let timer;

function startQuiz(topic) {
  currentTopic = topic;
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('quiz-container').innerHTML = ''; // Clear index.html content
  displayQuestion();
}

function displayQuestion() {
  const questionContainer = document.getElementById('quiz-container');
  const topicQuiz = quiz.find(q => q.topic === currentTopic);
  const questionData = topicQuiz.questions[currentQuestionIndex];

  questionContainer.innerHTML = `
    <div class="question">${questionData.question}</div>
    <div class="options">
      ${questionData.options.map((option, index) => `
        <div class="option" onclick="selectOption(${index})">${option}</div>
      `).join('')}
    </div>
    <div class="timer">Time left: <span id="time-remaining">60</span> seconds</div>
    <button class="button" onclick="submitQuiz()">Submit Quiz</button>
    <a href="/" class="button">Back to Home</a>
  `;

  startTimer();
}

function startTimer() {
  let timeLeft = 60;
  document.getElementById('time-remaining').innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('time-remaining').innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      currentQuestionIndex++;
      if (currentQuestionIndex < quiz.find(q => q.topic === currentTopic).questions.length) {
        displayQuestion();
      }
    }
  }, 1000);
}

function selectOption(selectedIndex) {
  clearInterval(timer);  // Stop the timer when an option is selected

  const topicQuiz = quiz.find(q => q.topic === currentTopic);
  const questionData = topicQuiz.questions[currentQuestionIndex];

  const options = document.getElementsByClassName('option');
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove('correct', 'wrong');
    options[i].onclick = null;
  }

  if (selectedIndex === questionData.correctAnswer) {
    options[selectedIndex].classList.add('correct');
    score++;
  } else {
    options[selectedIndex].classList.add('wrong');
    options[questionData.correctAnswer].classList.add('correct');
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < topicQuiz.questions.length) {
    setTimeout(displayQuestion, 1000);
  }
}

function submitQuiz() {
  const questionContainer = document.getElementById('quiz-container');
  const totalQuestions = quiz.find(q => q.topic === currentTopic).questions.length;

  questionContainer.innerHTML = `
    <h1>Your score: ${score} / ${totalQuestions}</h1>
    <a href="/" class="button">Back to Home</a>
  `;
  setTimeout(() => window.location.href = "/", 5000);  // Redirect to home after 5 seconds
}
