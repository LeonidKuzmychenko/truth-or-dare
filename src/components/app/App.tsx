import React, {useEffect, useState} from 'react';
import Header from "../header/Header";
import Main from "../main/Main";
import EndGameModal from "../end-modal/EndGameModal";
import NewGameModel from "../new-modal/NewGameModel";
import {NewGameInstance} from "../../dtos/newGameInstance";
import './app.scss';
import {AxiosResponse} from "axios";
import SessionResponse from "../../dtos/sessionResponse";
import {nextQuestionRequest, sessionRequest, startRequest} from "../../services/requests";
import QuestionResponse from "../../dtos/questionResponse";

export default function App() {

    let [[newGameModalVisible, newGameModalClosable], setNewGameModelViewMode] = useState([false, false])
    let [endGameModelViewMode, setEndGameModelViewMode] = useState(false)
    let [gameQuestion, setGameQuestion] = useState<QuestionResponse>()

    async function startNewGame(newGame: NewGameInstance) {
        console.log("startNewGame")
        let questionResponse: AxiosResponse<QuestionResponse> = await startRequest(newGame.male, newGame.female);
        let questionData = questionResponse.data;
        setGameQuestion(questionData)
    }

    async function nextQuestion(): Promise<void> {
        console.log("nextQuestion")
        let questionResponse: AxiosResponse<QuestionResponse> = await nextQuestionRequest();
        if (questionResponse.status === 204) {
            console.log("204")
            setEndGameModelViewMode(true)
        } else {
            let questionData = questionResponse.data;
            setGameQuestion(questionData)
        }
    }

    useEffect(() => {
        async function initPage(): Promise<void> {
            console.log("initPage")
            let oldSession: any = localStorage.getItem("session");
            let sessionResponse: AxiosResponse<SessionResponse> = await sessionRequest(oldSession)
            let sessionData = sessionResponse.data;
            let newSession: string = sessionData.session;
            if (oldSession === newSession) {
                await nextQuestion()
            } else {
                localStorage.setItem("session", newSession);
                setNewGameModelViewMode([true, false])
            }
        }

        initPage()
    }, [])

    return (
        <>
            <NewGameModel key="newGameModel"
                          visible={newGameModalVisible}
                          closable={newGameModalClosable}
                          viewNewGameModel={setNewGameModelViewMode}
                          startNewGame={startNewGame}
            />
            <EndGameModal key="endGameModal"
                          visible={endGameModelViewMode}
                          viewNewGameModel={setNewGameModelViewMode}
                          viewEndGameModel={setEndGameModelViewMode}
            />
            <section className="wrapper">
                <Header key="header"
                        viewNewGameModel={setNewGameModelViewMode}
                />
                <Main key="main"
                      nextQuestion={nextQuestion}
                      question={gameQuestion}
                />
            </section>
        </>
    );
}