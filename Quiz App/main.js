const quizData = [
    {
        'question': 'Which is the most straightforward approach for planning algorithm?',
        'a': 'Best-first search',
        'b': 'State-space search',
        'c': 'Depth-first search',
        'd': 'Hill-climbing search',
        'correct': 'b'
    },
    {
        'question': 'Key that uniquely identifies each record is called: ',
        'a': 'Key Record',
        'b': 'Unique Key',
        'c': 'Primary Key',
        'd': 'Secondary Key',
        'correct': 'c'
    },
    {
        'question': 'Amount of uncertainty in a system of the symbol is called: ',
        'a': 'Bandwidth',
        'b': 'Entropy',
        'c': 'Loss',
        'd': 'Quantum',
        'correct': 'b'
    },
    {
        'question': 'SRS stands for? ',
        'a': 'Software Requirement Specification',
        'b': 'Software testing',
        'c': 'Software requirement solution ',
        'd': 'none',
        'correct': 'a'
    },
    {
        'question': 'Complexity of Binary search algorithm is:',
        'a': 'O(n)',
        'b': 'O(n2)',
        'c': 'O(log n)',
        'd': 'O(n log n)',
        'correct': 'c'
    },
    {
        'question': 'Which of the following number object function returns the value of the number?',
        'a': 'toString()',
        'b': 'valueOf()',
        'c': 'toLocaleString())',
        'd': 'toPrecision()',
        'correct': 'b'
    },
    {
        'question': 'What are the three important manipulations for a loop on a loop variable?',
        'a': 'Updation, Incrementation, Initialization',
        'b': 'Initialization, Testing, Incrementation',
        'c': 'Testing, Updation, Testing',
        'd': 'Initialization, Testing, Updation',
        'correct': 'd'
    }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswer();

    let currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    // console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
               <h2 style='padding:1rem'>You answered ${score}/${quizData.length} questions correctly.</h2>
               <button onClick='location.reload()'>Reload Quiz</button>
            `
        }
    }
})