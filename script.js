const quizData =[
    {
        question:"Simple Language?",
        a:"html",
        b:"xml",
        c:"javascript",
        d:"css",
        correct:"a"

    },
    {
        question:"Style Sheet?",
        a:"html",
        b:"css",
        c:"javascript",
        d:"python",
        correct:"b"
    },
    {
        question:"Simple Syntex?",
        a:"c++",
        b:"java",
        c:"javascript",
        d:"python",
        correct:"d"
    },
    {
        question:"backend Language?",
        a:"java",
        b:"xml",
        c:"javascript",
        d:"css",
        correct:"a"

    },
    {
        question:"Which type of JavaScript language is ___",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level",
        correct:"b"

    },
    {
        question:"Which one of the following also known as Conditional Expression:",
        a:"Alternative to if-else",
        b:"Switch statement",
        c:" If-then-else statement",
        d:" immediate if",
        correct:"d"

        
        
       
       
    
    },
];


const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answerEls = document.querySelectorAll('.answer');
const questionEL = document.getElementById('question');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0
let score = 0
loadQuiz()


function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz]
    questionEL.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if (currentQuiz <quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> You answered correctly at ${score}/${quizData.length} question correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
            
           
        }
    }
})






