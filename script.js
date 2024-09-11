let container_main = document.querySelector('.main');
let container_start = document.querySelector('.start');
let container_start_h3 = container_start.querySelector('h3');
let question_field = document.querySelector('.question');
let answer_buttons = document.querySelectorAll('.answer');
let start_btn = document.querySelector('.start-btn');

class Question {
    constructor(question, answer_1, answer_2, answer_3, correct, answer_5) {
        this.question = question;
        this.correct = correct;
        this.answers = [
            answer_1,
            answer_2,
            answer_3,
            this.correct,
            answer_5,
        ];
    }

    display() {
        question_field.innerHTML = this.question;

        for (let i = 0; i < this.answers.length; i += 1) {
            answer_buttons[i].innerHTML = this.answers[i];
        }
    }
}
let questions=[
    new Question ("Хто головний злодій", "Мейбл", "Дядько Стен ", "Дядько Форд", "Білл Шифр", "Діппер" ),
     new Question("Хто урятував усіх", "Макґакет", "Дядько Стен і Форд", "Білл Шифр", "Діппер і Мейбл","Лінива сюзен"),
    new Question("Як зветься хаос у кінці", "Страхогедонн", "Гравітідонн", "Хаосгедонн", "Дивногедонн","Фолзгедонн"),
     new Question("Якого кольору Білл Шифр","Зелений","Оранжевий", "Червоний", "Жовтий","Фіолетовий"),
    new Question("Який знак був у Мейбл", "Листочок", "Зірка", "Серце", "Комета", "Нічого не було"),
    new Question("Який знак був у Діппера","Круг","Береза","Квадрат","Сосна","Листок"),
    new Question("Як звати свинку Мейбл","Ввадлс","Свинка","Гренда повернення 2","Пухля","Яка свинка?"),
    new Question("Таня нас приб'є?","шо за питання?","Звичайно","nye","kaneshna)))","da")
]

let correct_answers_given;
let total_answers_given;
let current_question_index = 0;

start_btn.addEventListener('click', function() {
    container_main.style.display = 'flex';
    container_start.style.display = 'none';
    
    correct_answers_given = 0;
    total_answers_given = 0;
    current_question_index = 0;

    displayCurrentQuestion();

    setTimeout(function() {
        container_main.style.display = 'none';
        container_start.style.display = 'flex';
        container_start_h3.innerHTML = `<h3>Ви дали ${correct_answers_given} правильних відповідей із ${total_answers_given}. Точність - ${Math.round(correct_answers_given * 100 / total_answers_given)}%.</h3>`;
    }, 1000000);
});

for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML === questions[current_question_index].correct) {
            correct_answers_given += 1;
            answer_buttons[i].style.background = '#00FF00';
            anime({
                targets: answer_buttons[i],
                background: '#ffff00',
                duration: 500,
                delay: 100,
                easing: 'linear'
            });
        } else {
            answer_buttons[i].style.background = '#FF0000';
            anime({
                targets: answer_buttons[i],
                background: '#ffff00',
                duration: 500,
                delay: 100,
                easing: 'linear'
            });
        }
        total_answers_given += 1;

        current_question_index += 1;

        if (current_question_index < questions.length) {
            displayCurrentQuestion();
        } else {
            // End of quiz, hide the main container and show the result
            container_main.style.display = 'none';
            container_start.style.display = 'flex';
            container_start_h3.innerHTML = `<h3>Ви дали ${correct_answers_given} правильних відповідей із ${total_answers_given}. Точність - ${Math.round(correct_answers_given * 100 / total_answers_given)}%.</h3>`;
        }
    });
}

function displayCurrentQuestion() {
    questions[current_question_index].display();
}
