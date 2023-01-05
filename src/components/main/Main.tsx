import React from 'react';
import QuestionResponse from "../../dtos/questionResponse";
import './main.css';

interface MainProps {
    question: QuestionResponse|undefined
    nextQuestion: Function
}

export default function Main(props: MainProps) {
    console.log("Обновляется контентная часть")
    return (
        <main className="main">
            <div className="content">
                <span id="title-text-id" className="title-text">{props.question?.type}</span>
                <span id="level-text-id" className="level-text">{props.question?.level}</span>
                <span id="player-name-text-id" className="player-name-text">{props.question?.player}</span>
                <span id="question-text-id" className="question-text">{props.question?.text}</span>
                <div className="next-question-container">
                    <button className="next-question-btn" onClick={() => props.nextQuestion()}>ДАЛЕЕ</button>
                </div>
            </div>
        </main>
    )
}

