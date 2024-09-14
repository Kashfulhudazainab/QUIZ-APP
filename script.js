const questions=[
    {
        'que':'Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'pHp',
        'correct':'a'
    },
    {
        'que':'What does CSS stands for?',
        'a':'Hyper Text Makup Language',
        'b':'Cascading Style Sheets',
        'c':'JavaScript',
        'd':'Central Processing Unit',
        'correct':'b'
    },
    {
        'que': 'What does HTML stand for?',
        'a': 'Hyper Text Markup Language',
        'b': 'Hyperlinks and Text Markup Language',
        'c': 'High-Level Text Markup Language',
        'd': 'Hypertext Makeup Language',
        'correct': 'a'
    },
    {
        'que': 'Which language is used for styling web pages?',
        'a': 'HTML',
        'b': 'JavaScript',
        'c': 'CSS',
        'd': 'Python',
        'correct': 'c'
    },
    {
        'que': 'What does JavaScript primarily do?',
        'a': 'Style web pages',
        'b': 'Create server-side logic',
        'c': 'Add interactivity to web pages',
        'd': 'Design layouts',
        'correct': 'c'
    },
    {
        'que': 'What does URL stand for?',
        'a': 'Uniform Resource Locator',
        'b': 'Universal Resource Locator',
        'c': 'Uniform Resource Link',
        'd': 'Universal Resource Link',
        'correct': 'a'
    },
    {
        'que': 'Which HTML tag is used to define an internal style sheet?',
        'a': '<script>',
        'b': '<style>',
        'c': '<link>',
        'd': '<css>',
        'correct': 'b'
    },
    {
        'que': 'What does the <a> tag in HTML do?',
        'a': 'Defines a hyperlink',
        'b': 'Defines an image',
        'c': 'Defines a section',
        'd': 'Defines a list item',
        'correct': 'a'
    },
    {
        'que': 'What is the purpose of the <div> tag in HTML?',
        'a': 'Defines a division or section',
        'b': 'Defines a table',
        'c': 'Defines a form',
        'd': 'Defines an anchor',
        'correct': 'a'
    },
    {
        'que': 'Which of the following is a JavaScript framework?',
        'a': 'React',
        'b': 'CSS',
        'c': 'HTML',
        'd': 'SQL',
        'correct': 'a'
    },
    {
        'que': 'What does API stand for?',
        'a': 'Application Programming Interface',
        'b': 'Applied Programming Interface',
        'c': 'Automated Programming Interface',
        'd': 'Application Protocol Interface',
        'correct': 'a'
    },
    {
        'que': 'Which method is used to change the content of an HTML element using JavaScript?',
        'a': 'getElementById',
        'b': 'innerHTML',
        'c': 'querySelector',
        'd': 'textContent',
        'correct': 'b'
    }
]

let index=0;
const quesbox=document.getElementById('quesbox');
const optioninputs=document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index >= total) {
        return endQuiz();
    } else {
        reset();
        const data = questions[index];
        quesbox.innerHTML = `${index + 1}. ${data.que}`;
        optioninputs[0].nextElementSibling.innerText = data.a;
        optioninputs[1].nextElementSibling.innerText = data.b;
        optioninputs[2].nextElementSibling.innerText = data.c;
        optioninputs[3].nextElementSibling.innerText = data.d;
    }
}


let total=questions.length;
let correct=0;
let wrong=0;

const submitQuiz = () => {
    const ans = getAnswer();
    if (ans === questions[index].correct) {
        correct++;
    } else {
        wrong++;
    }
    index++;
    if (index < total) {
        loadQuestion();
    } else {
       endQuiz();
    }
}

const getAnswer = () => {
    let selectedAnswer;
    optioninputs.forEach((input) => {
        if (input.checked) {
            selectedAnswer = input.value;
        }
    });
    return selectedAnswer;
}



const reset = () => {
    optioninputs.forEach((input) => {
        input.checked = false;
    });
}

const endQuiz = () => {
document.getElementById('box').innerHTML=`<h3> Thank you for playing the Quiz </h3>
<h2>${correct}/${total} are correct </h2>`
}

//initial call
loadQuestion();