import React, { useState } from "react";
import Card from "./Card";
import CardContent from "./CardContent";
import classes from "../modules/QuestionCard.module.css";

const QuestionCard = ({
                          questionData,
                          onAnswerSelect,
                          selectedAnswer,
                          onNextQuestion,
                          questionNumber
                      }) => {
    const [isAnswered, setIsAnswered] = useState(false);

    const handleAnswerSelect = (answer) => {
        onAnswerSelect(answer);
        setIsAnswered(true); // Mark as answered when an option is selected
    };

    return (
        <Card className="question-card">
            <CardContent>
                <h2 className={classes["questionText"]}>
                    კითხვა {questionNumber}: {questionData.question}
                </h2>
                <div className={classes['optionsContainer']}>
                    {questionData.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(option)}
                            className={`${classes['optionButton']} ${selectedAnswer === option ? classes.selected : ""}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className={classes['buttonsContainer']}>
                    <button
                        onClick={onNextQuestion}
                        className={classes['nextQuestionBtn']}
                        disabled={!isAnswered}  // Disable Next Question button if no answer is selected
                    >
                     შემდეგი კითხვა
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default QuestionCard;
