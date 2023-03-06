const quizData = [
    {
        question: "Косметическое средство, которым можно «затуманить» мозги мужчинам",
        a: "Помада",
        b: "Пудра",
        c: "Крем для пяток 50+",
        correct: "b",
    },
    {
        question: "Чего нет у бегемота, но есть и женщины",
        a: "Посуды (чтобы помыть)",
        b: "Талии",
        c: "Носа",
        correct: "b",
    },
    {
        question: "Если она с возу, то кому легче?",
        a: "Всем",
        b: "Бабе",
        c: "Кобыле",
        correct: "c",
    },
    {
        question: "Часть женской одежды, за которую можно спрятаться",
        a: "Чулки",
        b: "Юбка",
        c: "Солнцезащитные очки",
        correct: "b",
    },
    {
        question: "И часть одежды, и самое лучшее народное радио",
        a: "Сарафанное",
        b: "Подкаблучное",
        c: "Платьевое",
        correct: "a",
    },
    {
        question: "Часто говорят, что она спасёт мир",
        a: "Женщина-кошка",
        b: "Да точно, женщина-кошка",
        c: "Красота",
        correct: "c",
    },
    {
        question: "Что делают жёны с мужьями, когда мужчины приходят домой под шафе?",
        a: "Снимают одежду, бережно укладывают спать, готовят рассол на утро",
        b: "Все, что выше, но не снимают одежду",
        c: "Пилят",
        correct: "c",
    },
    {
        question: "Находится в воде и «худеет»",
        a: "Никто! Проверено 100 раз, не работает это!!!",
        b: "Мыло",
        c: "2,3-диметилбутен-2",
        correct: "b",
    },
    {
        question: "Месяц, в котором любая женщина меньше всего разговаривает",
        a: "Смешная шутка...",
        b: "Февраль (он же короче всех, логично)",
        c: "Декабрь (язык впадает в спячку)",
        correct: "b",
    },
    {
        question: "Женский предмет при помощи которого можно вмиг поправить причёску, напудрить носик и сделать макияж",
        a: "Очень способная подруга",
        b: "Не очень способная подруга с доступом в Интернет",
        c: "Зеркало",
        correct: "c",
    },
    {
        question: "Что женщины бьют в гневе?",
        a: "Всех мужчин в радиусе 15 км",
        b: "Курьера \"Яндекс.Еда\" (опять холодный фалафель привёз)",
        c: "Посуду",
        correct: "c",
    },
    {
        question: "Каждая женщина хотя бы раз в жизни, но садилась на это",
        a: "Конечно, правильный ответ ниже",
        b: "Диета",
        c: "А ты о чём подумала?!",
        correct: "b",
    },
    {
        question: "Что объединяет погоду и моду?",
        a: "Изменчивость",
        b: "Отмена рейсов",
        c: "Я просто хочу поскорее закончить тест...",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let btn_text = "ХОЧЕШЬ ПОПРОБОВАТЬ ЕЩЁ?"

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            let text = `<h2>Хей, красавица! Ты ответила ровно на ${score} из ${quizData.length} вопросов :)</h2>`
            if (score == 0) {text += `<h4>Без обид, но ум - не твоя сильная сторона. Перепройди этот тест когда протрезвеешь!</h4>`}
            else if (score < 5) {text += `<h4>Не расстраивайся. Зато ты красивая!</h4>`}
            else if (score < 10) {text += `<h4>Это очень крутой результат. Этот тест использует ФСБ для набора самых умных любей к себе на работу!</h4>`}
            else {text += `<h4>ТЫ ОЧЕНЬ КРУТАЯ, РАЗРЕШАЮ ТЕБЕ ГОД НЕ МЫТЬ ПОСУДУ!</h4>`}

            if (score >= 10) {
                quiz.innerHTML = text + `<button onclick="location.href = 'prize.html'">ПОЛУЧИТЬ ПРИЗ</button>`;
            }
            else {
                quiz.innerHTML = text + `<button onclick="location.reload();">ЕЩЁ РАЗ?</button>`;
            }
        }
    }
});