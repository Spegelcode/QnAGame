let currentQuestionIndex = 0;
let questions = [];

// Fetching questions based on selected topic
document.getElementById('topic').addEventListener('change', (event) => {
  currentQuestionIndex = 0;
  loadQuestions(event.target.value);
});

// load questions based on the topic selected
function loadQuestions(topic) {
  fetch(`${topic}Questions.json`)
    .then(response => response.json())
    .then(data => {
      questions = data.questions;
      displayQuestion(currentQuestionIndex);
    })
    .catch(error => console.error('Error loading questions:', error));
}

// display a question based on the index
function displayQuestion(index) {
  const question = questions[index];
  document.getElementById('question').textContent = question.question;
  const optionsList = document.getElementById('options');
  optionsList.innerHTML = '';

  question.options.forEach((option) => {
    const optionElement = document.createElement('li');
    optionElement.textContent = option;
    optionElement.classList.add('liL');

    optionElement.onclick = () => checkAnswer(option, question.correctAnswer, index);
    optionsList.appendChild(optionElement);
  });
}


//Correct answer result.

function checkAnswer(selectedOption, correctAnswer) {
  const resultDiv = document.getElementById('result');

  if (selectedOption === correctAnswer) {
    resultDiv.textContent = 'Correct!';
    resultDiv.style.color = 'green';

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      displayQuestion(randomIndex);
      console.log(randomIndex)
      resultDiv.textContent = '';
    }, 1800);


    //Wrong answer results. 

  } else {
    resultDiv.textContent = 'Incorrect. The correct answer is....';
    const answerSpan = document.createElement('span');
    answerSpan.textContent = ` ${correctAnswer}`;
    answerSpan.classList.add('hiddenAnswer');
    resultDiv.appendChild(answerSpan);
    resultDiv.style.color = 'red';
}
}
loadQuestions('css');





// länk till resources för mer info. Tagit bort. 

/*function goToResources() {
  window.open('resources.html', '_blank') 
}

*/
