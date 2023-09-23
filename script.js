const quiz = [
    {
        quizquestion:"Who is First Prime Minister Of India",
        answer:[
            {text:"JawaharLal Nehru",result:true},
            {text:"Rajendra Prasad",result:false},
            {text:"Mahatma Gandhi",result:false},
            {text:"Indira Gandhi",result:false},
        ]
    },
    {
        quizquestion:"Who is First President Of India",
        answer:[
            {text:"JawaharLal Nehru",result:false},
            {text:"Rajendra Prasad",result:true},
            {text:"Mahatma Gandhi",result:false},
            {text:"Indira Gandhi",result:false},
        ]
    },
    {
        quizquestion:"Who is Iron Man Of India",
        answer:[
            {text:"SardarVallabh Bhai Patel",result:true},
            {text:"Rajendra Prasad",result:false},
            {text:"Mahatma Gandhi",result:false},
            {text:"Indira Gandhi",result:false},
        ]
    },
]

let currentIndex = 0;
const question = document.getElementById('question');
const next = document.querySelector('.next');
const answers = document.querySelector('.answers');

// start quiz
function start(){
    currentIndex = 0;
    showquiz();
}

// show quiz
function showquiz(){
    resetstate()
    let currentQuestion = quiz[currentIndex];
    question.innerText = currentIndex + 1 + "." + currentQuestion.quizquestion
     
    // answers btn extract here
    currentQuestion.answer.forEach(answerbtn=>{
        const answerbutton = document.createElement('div');
        answerbutton.classList.add('answer');
        answerbutton.innerText = answerbtn.text;
        answers.appendChild(answerbutton);
        answerbutton.addEventListener('click',(e)=>{
            const correct = answerbtn.result;
            if(correct === true){
                answerbutton.style.backgroundColor = "seagreen"
                }
                else{
                    answerbutton.style.backgroundColor = "red"
                }
            });
     });
    }


    next.addEventListener('click',()=>{
        if(currentIndex < quiz.length - 1){
            currentIndex++;
            showquiz()
        }
        else{
            start()
        }
        
    })

    // reset answerbtns
    function resetstate(){
        while(answers.firstChild){
            answers.removeChild(answers.firstChild)
        }
    }
    
start()
    

