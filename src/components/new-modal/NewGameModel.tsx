import React, {memo, useRef} from "react";
import {NewGameInstance} from "../../dtos/new-game-instance";
import './new-game-modal.css';
import {NewGameModelViewMode} from "../../dtos/new-game-modal-view-mode";

interface StartGameModelProps {
    newGameModelViewMode: NewGameModelViewMode
    viewNewGameModel: (visible: boolean, closable: boolean) => void;
    startNewGame: (visible: NewGameInstance) => void;
}

const NewGameModel = (props: StartGameModelProps) => {
    console.log("Обновляется модальное окно Новой игры")

    const maleName = useRef<HTMLInputElement>(null);
    const femaleName = useRef<HTMLInputElement>(null);

    function startNewGame() {
        let newGame: NewGameInstance = new NewGameInstance(maleName!.current!.value, femaleName!.current!.value);
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
                    <input ref={maleName} className="new-game-player1-input"
                           type="text" name="player1" maxLength={20} size={12}/>
                </label>
                <label className="new-game-player2-container">
                    <span className="new-game-player2-text">Имя игрока 👧‍:</span>
                    <input ref={femaleName} id="new-game-player2-input-id" className="new-game-player2-input"
                           type="text" name="player2" maxLength={20} size={12}/>
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