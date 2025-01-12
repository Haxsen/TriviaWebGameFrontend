import React, { useState, useEffect } from 'react';
import { getTriviaQuestions } from './services/api';

const TriviaGame = () => {
	console.log("TriviaGame called");
	
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
		async function fetchData() {
			console.log("fetching");
			const data = await getTriviaQuestions();
			setQuestions(data);
		}
		fetchData();
    }, []);
	

    const handleAnswerOptionClick = (isCorrect) => {
		if (!questions) return null;
		
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const decodeHtmlEntities = (encodedString) => {
        const doc = new DOMParser().parseFromString(encodedString, 'text/html');
        return doc.documentElement.textContent;
    };

	if (!questions) return null;
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    {questions.length > 0 && (
                        <div>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>{decodeHtmlEntities(questions[currentQuestion].question)}</div>
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].incorrect_answers.map((option, index) => (
                                    <button key={index} onClick={() => handleAnswerOptionClick(false)}>
                                        {decodeHtmlEntities(option)}
                                    </button>
                                ))}
                                <button key='correct' onClick={() => handleAnswerOptionClick(true)}>
									{decodeHtmlEntities(questions[currentQuestion].correct_answer)}
								</button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default TriviaGame;
