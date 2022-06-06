const image = document.querySelector('#myImage');
const text = document.querySelector('h2');

const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');
const buttonThree = document.querySelector('#three');

buttonOne.addEventListener('click', answerLeftOne);
buttonTwo.addEventListener('click', answerStraight);
buttonThree.addEventListener('click', answerRight1);

function answerLeftOne(){
    image.setAttribute("src", "выбор6.jpg");
    text.textContent = "Ты — это то, что ты делаешь. Ты — это твой выбор. Тот, в кого себя превратишь.";
    buttonOne.textContent = "НАЛЕВО";
    buttonTwo.style = "display: none";
    buttonThree.textContent = "НАПРАВО";

    buttonOne.addEventListener('click', answerLeftTwo);
    buttonThree.addEventListener('click', answerRightTwo);
}

function answerLeftTwo(){
    image.setAttribute("src", "наЛевокот.jpg");
    text.textContent = "Пока выбор не сделан, все на свете возможно.";
    buttonOne.textContent = "НАЛЕВО";
    buttonTwo.style = "display: none";
    buttonThree.textContent = "НАПРАВО";

    buttonOne.addEventListener('click', answerLeftThree);
    buttonThree.addEventListener('click', answerRightThree);
}

function answerLeftThree(){
    image.setAttribute("src", "финишЛево.jpg");
    text.textContent = "Когда у тебя не остается выбора — становись отважным.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
}

function answerRightTwo(){
    image.setAttribute("src", "наЛевонаПраво.png");
    text.textContent = "Мы не выбираем, в кого влюбляться. Этот выбор непредсказуем!";
    buttonOne.textContent = "НАЛЕВО";
    buttonTwo.style = "display: none";
    buttonThree.textContent = "НАПРАВО";

    buttonOne.addEventListener('click', answerLeftFour);
    buttonThree.addEventListener('click', answerRightFour);
}

function answerLeftFour(){
    image.setAttribute("src", "финиш2.jpg");
    text.textContent = "Человек должен делать выбор. В этом и состоит его сила — в могуществе его решений.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
}
function answerRightThree(){
    image.setAttribute("src", "правоДомой.jpg");
    text.textContent = "Наша жизнь - это постоянный выбор: кому доверить свой безымянный палец, а кому доверить средний.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
}
function answerRightFour(){
    image.setAttribute("src", "финишВыбора.jpg");
    text.textContent = "Когда на вашем пути начинают появляться препятствия, значит направление выбрано правильно…";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
}

function answerStraight(){
    image.setAttribute("src", "выбор4.jpg");
    text.textContent = "Чем больше возможностей, тем труднее выбрать.";
    buttonOne.textContent = "НАЛЕВО";
    buttonTwo.style = "display: none";
    buttonThree.textContent = "НАПРАВО";

    buttonOne.addEventListener('click', answerStraightLeft);
    buttonThree.addEventListener('click', answerStraightRight);
}

function answerStraightLeft(){
    image.setAttribute("src", "юморФиниш.jpg");
    text.textContent = "Порой мы делаем выбор, считая его правильным, и только время показывает, как мы ошибались.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
}

function answerStraightRight(){
    image.setAttribute("src", "финиш1конь.jpg");
    text.textContent = "Иногда лучше сделать неверный выбор, чем вообще отказаться от выбора.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
}
function answerRight1(){
    image.setAttribute("src", "выбор.jpg");
    text.textContent = "Всегда выбирайте самый трудный путь — на нем вы не встретите конкурентов.";
    buttonOne.textContent = "НАЛЕВО";
    buttonTwo.style = "display: none";
    buttonThree.textContent = "НАПРАВО";

    buttonOne.addEventListener('click', answerLeft2);
    buttonThree.addEventListener('click', answerRight2);
}

function answerLeft2(){
    image.setAttribute("src", "2вар.jpg");
    text.textContent = "Судьба не случайность, а предмет выбора, её не ожидают, а завоевывают";
    buttonOne.textContent = "НАЛЕВО";
    buttonTwo.style = "display: none";
    buttonThree.textContent = "НАПРАВО";

    buttonOne.addEventListener('click', answerLeft3);
    buttonThree.addEventListener('click', answerRight3);
}

function answerLeft3(){
    image.setAttribute("src", "выбор3.jpg");
    text.textContent = "Выбирай лучшее, а привычка сделает его и приятным.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
}

function answerRight2(){
    image.setAttribute("src", "выбор5.jpg");
    text.textContent = "Мы не можем изменить то, откуда мы пришли. Но мы можем выбрать, куда идти дальше.";
    buttonOne.textContent = "НАЛЕВО";
    buttonTwo.style = "display: none";
    buttonThree.textContent = "НАПРАВО";

    buttonOne.addEventListener('click', answerLeft4);
    buttonThree.addEventListener('click', answerRight4);
}

function answerLeft4(){
    image.setAttribute("src", "котыЦепь.jpg");
    text.textContent = "Хорошо быть в дороге, которую ты сам себе выбираешь. ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
}
function answerRight3(){
    image.setAttribute("src", "выбор9.jpg");
    text.textContent = "Выбор — самый утомительный вид деятельности.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
}
function answerRight4(){
    image.setAttribute("src", "финиш3.jpg");
    text.textContent = "Когда отправляешься в новую жизнь — выбирай цветущую дорогу.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
}
