let currentQuestionIndex = 0;
let questions = [];

// Fetching questions based on selected topic
document.getElementById('topic').addEventListener('change', (event) => {
  currentQuestionIndex = 0;
  loadQuestions(event.target.value);
});

// Function to load questions based on the topic selected
function loadQuestions(topic) {
  fetch(`${topic}Questions.json`)
    .then(response => response.json())
    .then(data => {
      questions = data.questions;
      displayQuestion(currentQuestionIndex);
    })
    .catch(error => console.error('Error loading questions:', error));
}

// Function to display a question based on the index
function displayQuestion(index) {
  const question = questions[index];
  document.getElementById('question').textContent = question.question;
  const optionsList = document.getElementById('options');
  optionsList.innerHTML = ''; // Clear previous options

  question.options.forEach((option) => {
    const optionElement = document.createElement('li');
    optionElement.textContent = option;
    optionElement.classList.add('liL');
    optionElement.onclick = () => checkAnswer(option, question.correctAnswer, index);
    optionsList.appendChild(optionElement);
  });
}


// Function to check the selected answer and move to the next question if correct
function checkAnswer(selectedOption, correctAnswer, index) {
  const resultDiv = document.getElementById('result');

  if (selectedOption === correctAnswer) {
    resultDiv.textContent = 'Correct!';
    resultDiv.style.color = 'green';

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
        resultDiv.textContent = '';
      } else {
        resultDiv.textContent = 'You have completed the quiz!';
      }
    }, 1000); // 1-second delay before moving to the next question
  } else {
    resultDiv.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
    resultDiv.style.color = 'red';
  }
}
function goToResources() {
  window.open('resources.html', '_blank')  // Redirects to the resources.html page
}

// Load the initial set of questions for CSS topic
loadQuestions('css');
