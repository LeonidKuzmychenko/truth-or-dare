import React, {memo, useEffect, useState} from 'react';
import QuestionResponse from "../../dtos/question-response";
import './main.css';
import {AxiosResponse} from "axios";
import {nextQuestionRequest} from "../../services/requests";

interface MainProps {
    setEndGameModelViewMode: (it: boolean) => void;
}

const Main = (props: MainProps) => {
    console.log("Обновляется контентная часть")

    let [question, setGameQuestion] = useState<QuestionResponse>()

    async function nextQuestion(): Promise<void> {
        let questionResponse: AxiosResponse<QuestionResponse> = await nextQuestionRequest();
        if (questionResponse.status === 204) {
            console.log("204")
            props.setEndGameModelViewMode(true)
        } else {
            let questionData = questionResponse.data;
            setGameQuestion(questionData)
        }
    }

    useEffect(() => {
        nextQuestion();
    }, [])

    return (
        <main className="main">
            <div className="content">
                {question === null ? <></> : <>
                    <span id="title-text-id" className="title-text">{question?.type}</span>
                    <span id="level-text-id" className="level-text">Уровень {question?.level}</span>
                    <span id="player-name-text-id" className="player-name-text">{question?.player}</span>
                    <span id="question-text-id" className="question-text">{question?.text}</span>
                </>}
                <div className="next-question-container">
                    <button className="next-question-btn" onClick={() => nextQuestion()}>ДАЛЕЕ</button>
                </div>
            </div>
        </main>
    )
}

const MemoMain = memo(Main)

export default MemoMain