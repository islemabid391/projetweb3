const questions = [
    {
        question: "Quelle est la plus grande planète du système solaire ?",
        options: {
            a: "Terre",
            b: "Mars",
            c: "Jupiter",
            d: "Saturne"
        },
        correctAnswer: "c"
    },
    {
        question: "Quel est le nom de la galaxie dans laquelle nous vivons ?",
        options: {
            a: "Andromède",
            b: "Voie lactée",
            c: "Triangulum",
            d: "Sombrero"
        },
        correctAnswer: "b"
    },
    {
        question: "Qui a été le premier homme à marcher sur la Lune ?",
        options: {
            a: "Yuri Gagarine",
            b: "Buzz Aldrin",
            c: "Neil Armstrong",
            d: "Michael Collins"
        },
        correctAnswer: "c"
    },
    {
        question: "Quelle est la couleur du soleil ?",
        options: {
            a: "Bleu",
            b: "Jaune",
            c: "Blanc",
            d: "Rouge"
        },
        correctAnswer: "b"
    },
    {
        question: "Combien de planètes y a-t-il dans notre système solaire ?",
        options: {
            a: "7",
            b: "8",
            c: "9",
            d: "10"
        },
        correctAnswer: "b"
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        options: {
            a: "Émile Zola",
            b: "Victor Hugo",
            c: "Gustave Flaubert",
            d: "Albert Camus"
        },
        correctAnswer: "b"
    },
    {
        question: "Quel est le plus grand océan de la Terre ?",
        options: {
            a: "Atlantique",
            b: "Indien",
            c: "Arctique",
            d: "Pacifique"
        },
        correctAnswer: "d"
    },
    {
        question: "Quel artiste tunisien est surnommé 'Le Prince du Malouf' ?",
        options: {
            a: "Hedi Jouini",
            b: "Ali Riahi",
            c: "Kacem Kefi",
            d: "Lotfi Bouchnak"
        },
        correctAnswer: "a"
    },
    {
        question: "Quel instrument est emblématique de la musique traditionnelle tunisienne ?",
        options: {
            a: "L'oud",
            b: "Le violon",
            c: "La guitare",
            d: "Le piano"
        },
        correctAnswer: "a"
    },
    {
        question: "Quelle chanson tunisienne populaire est interprétée par Hedi Jouini ?",
        options: {
            a: "Sidi Mansour",
            b: "Lamma Bada",
            c: "Ahwak",
            d: "Khali ya khali"
        },
        correctAnswer: "d"
    },
    {
        question: "Quelle ville tunisienne est connue pour son festival international de musique symphonique ?",
        options: {
            a: "Hammamet",
            b: "El Jem",
            c: "Carthage",
            d: "Tozeur"
        },
        correctAnswer: "b"
    },
    {
        question: "Quel est le style musical propre à la ville de Sfax ?",
        options: {
            a: "Stambeli",
            b: "Mezwed",
            c: "Malouf",
            d: "Reggada"
        },
        correctAnswer: "c"
    }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('button1').textContent = `a) ${currentQuestion.options.a}`;
    document.getElementById('button2').textContent = `b) ${currentQuestion.options.b}`;
    document.getElementById('button3').textContent = `c) ${currentQuestion.options.c}`;
    document.getElementById('button4').textContent = `d) ${currentQuestion.options.d}`;
    document.getElementById('result').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
    
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(button => button.disabled = false);
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const resultElement = document.getElementById('result');
    
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(button => button.disabled = true);
    
    if (answer === correctAnswer) {
        resultElement.textContent = 'Correct ! 🎉';
        resultElement.style.color = 'green';
        correctAnswersCount++;
    } else {
        resultElement.textContent = `Mauvaise réponse. 😞 La bonne réponse est : ${questions[currentQuestionIndex].options[correctAnswer]}`;
        resultElement.style.color = 'pink';
    }
    
    document.getElementById('nextButton').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('result').textContent = `Quiz terminé! Vous avez ${correctAnswersCount} bonnes réponses sur ${questions.length}.`;
        document.getElementById('nextButton').style.display = 'none';
    }
}

window.onload = function() {
    loadQuestion();
};
