import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import classes from './modules/App.module.css';
import image from './assets/476341730_944219304115332_3259443066666437589_n.jpg'

const App = () => {
    // const [firstName, setFirstName] = useState('');
    // const [secondName, setSecondName] = useState('');
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [quizFinished, setQuizFinished] = useState(false);
    const [answers, setAnswers] = useState([]);

    const quizData = [
        {
            question: `ჩემო წარმოიდგინე, რომ მე  და შენ  ერთად იდეალურ  საღამოს ვატარებთ, რომელი გირჩევნია?💘`,
            options: ["დრომ რომ მარტოებმა გავატაროთ🍷🕯️", " დროის მხიარულ და სახალისო ატმოსფეროში გატარება💃🍹 "],

        },
        {
            question: `ჩემო, რომელი უფრო რომანტიკული შენთვის`,
            options: ["ფილმი და პოპკორნი🍿🎬", "სასმელი და გართობა🍺🕺"],

        },

        {
            question: `ჩემო, თუ ჩვენი სიყვარულის ისტორია წიგნი ან ფილმი იქნებოდა, რას დაარქმევდი მას💌`,
            options: ["შენში ვიპოვე ჩემი სახლი🏡❤️ ", "უსასრულოდ შენთან♾️💕"],

        },

        {
            question: `ჩემო, თუ შეგიძლია რომ დროში დაბრუნდე და ერთი დღე თავიდან გაატარო ჩემთან ერთად, რომელი დღე იქნებოდა ეს?`,
            options: ["დღე ბათუმში☀️", "დღე ბაქოში🏝️"],

        },



        {
            question: ` რომელ ქვეყანაში გირჩევნია summer 2025`,
            options: ["იტალია🇮🇹", "ესპანეთი🇪🇸"],

        }
    ];

    const handleNextQuestion = () => {
        if (currentQuestion < quizData.length - 1) {
            setShowAnswer(false);
            setSelectedAnswer('');
            setCurrentQuestion(prev => prev + 1);
        } else {
            calculateResult();
            setQuizFinished(true);
        }
    };

    const handleStartQuiz = () => {

            setQuizStarted(true);

    };

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
        setAnswers(prevAnswers => [...prevAnswers, answer]);
        setShowAnswer(true);
    };

    const calculateResult = () => {
        const optionOneCount = answers.filter(
            (answer) => answer === quizData[0].options[0]
        ).length;
        const optionTwoCount = answers.filter(
            (answer) => answer === quizData[0].options[0]
        ).length;

        // Determine outcome based on answer frequency
        return optionOneCount > optionTwoCount ? "ამ ყველაფეეერს მე გაგიმხელ საღამოსს💌🤫" : "ამ ყველაფეეერს მე გაგიმხელ საღამოსს💌🤫";
    };

    const handleBackToQuiz = () => {
        setQuizStarted(false);
        setQuizFinished(false);
        setCurrentQuestion(0);
        // setFirstName('');
        // setSecondName('');
        setAnswers([]);
    };

    return (
        <div className={classes['app-container']}
             style={{ backgroundImage: `url(${image})` }}>
            {!quizStarted ? (
                <div className={classes['input-container']}>
                    <h1>🌹ჩემო სიყვარულო 🌹 </h1>
                    <h1>დაგეგმე შენი ვალენტინობის დღე!</h1>
                    <div className={classes['input']}>
                        {/*<input*/}
                        {/*    placeholder="ვინც ეს ლინკი გამოგიგზავნა"*/}
                        {/*    value={firstName}*/}
                        {/*    onChange={(e) => setFirstName(e.target.value)}*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    placeholder="ჩემო "*/}
                        {/*    value={secondName}*/}
                        {/*    onChange={(e) => setSecondName(e.target.value)}*/}
                        {/*/>*/}
                    </div>
                    <button className={classes['start-button']} onClick={handleStartQuiz}>
                        Let's Go
                    </button>
                </div>
            ) : quizFinished ? (
                <div className={classes['finished-container']}>
                    <h1>და შენ 14 თებერვალს გააატარებ...</h1>
                    <p>{calculateResult()}</p>
                    <button onClick={handleBackToQuiz} className={classes['end-button']}>
                        Back to Quiz
                    </button>
                </div>
            ) : (
                <QuestionCard
                    questionData={quizData[currentQuestion]}
                    showAnswer={showAnswer}
                    onAnswerSelect={handleAnswerSelect}
                    selectedAnswer={selectedAnswer}
                    onNextQuestion={handleNextQuestion}
                    questionNumber={currentQuestion + 1}
                />
            )}
        </div>
    );
};

export default App;
