import React, {memo} from "react";
import {NewGameInstance} from "../../dtos/new-game-instance";
import './new-game-modal.scss';
import {NewGameModelViewMode} from "../../dtos/new-game-modal-view-mode";

interface StartGameModelProps {
    newGameModelViewMode: NewGameModelViewMode
    viewNewGameModel: (visible: boolean, closable: boolean) => void;
    startNewGame: (visible: NewGameInstance) => void;
}

const NewGameModel = (props: StartGameModelProps) => {
    console.log("Обновляется модальное окно Новой игры")

    function startNewGame() {
        let male = (document.getElementById("new-game-player1-input-id") as HTMLInputElement).value
        let female = (document.getElementById("new-game-player2-input-id") as HTMLInputElement).value
        let newGame: NewGameInstance = new NewGameInstance(male, female);
        props.viewNewGameModel(false, false);
        props.startNewGame(newGame);
    }

    return <div className={"new-game-modal-container" + (props.newGameModelViewMode.visible ? " active" : "")}>
        <div className="new-game-modal-inner-container">
            <button className={"new-game-modal-close-btn" + (props.newGameModelViewMode.closable ? " active" : "")}
                    onClick={() => props.viewNewGameModel(false, false)}>X
            </button>
            <div className="new-game-modal-window">
                <span className="new-game-title-btn">НОВАЯ ИГРА</span>
                <label className="new-game-player1-container">
                    <span className="new-game-player1-text">Имя игрока 🧑:</span>
                    <input id="new-game-player1-input-id" className="new-game-player1-input" type="text" name="player1"
                           maxLength={12} size={12}/>
                </label>
                <label className="new-game-player2-container">
                    <span className="new-game-player2-text">Имя игрока 👧‍:</span>
                    <input id="new-game-player2-input-id" className="new-game-player2-input" type="text" name="player2"
                           maxLength={12} size={12}/>
                </label>
                <div className="new-game-modal-btn-container">
                    <button className="new-game-modal-btn" onClick={() => startNewGame()}>НАЧАТЬ</button>
                </div>
            </div>
        </div>
    </div>
}


const MemoNewGameModel = memo(NewGameModel)

export default MemoNewGameModel