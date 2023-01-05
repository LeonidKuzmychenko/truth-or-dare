import React, {ChangeEvent} from "react";
import {NewGameInstance} from "../../dtos/newGameInstance";
import './newGameModal.scss';

interface StartGameModelProps {
    visible: boolean
    closable: boolean
    viewNewGameModel: Function;
    startNewGame: Function;
}

export default function NewGameModel(props: StartGameModelProps) {
    console.log("Обновляется модальное окно Новой игры")

    let player1Name: string = "";
    let player2Name: string = "";

    function startNewGame() {
        console.log("startNewGame click")
        let newGame: NewGameInstance = new NewGameInstance(player1Name, player2Name);
        props.viewNewGameModel([false, false]);
        props.startNewGame(newGame);
    }

    let onChangePlayer1Name = (event: ChangeEvent<HTMLInputElement>) => {
        player1Name = event.target.value
    };

    let onChangePlayer2Name = (event: ChangeEvent<HTMLInputElement>) => {
        player2Name = event.target.value
    };

    return <div className={props.visible ? "new-game-modal-container active" : "new-game-modal-container"}>
        <div className="new-game-modal-inner-container">
            {props.closable ?
                <button className="new-game-modal-close-btn" onClick={props.viewNewGameModel([false, false])}>X</button>
                : <></>
            }
            <div className="new-game-modal-window">
                <span className="new-game-title-btn">НОВАЯ ИГРА</span>
                <label className="new-game-player1-container">
                    <span className="new-game-player1-text">Имя игрока 🧑:</span>
                    <input className="new-game-player2-input" type="text" name="player1" maxLength={12} size={12}
                           onChange={onChangePlayer1Name}/>
                </label>
                <label className="new-game-player2-container">
                    <span className="new-game-player2-text">Имя игрока 👧‍:</span>
                    <input className="new-game-player2-input" type="text" name="player2" maxLength={12} size={12}
                           onChange={onChangePlayer2Name}/>
                </label>
                <div className="new-game-modal-btn-container">
                    <button className="new-game-modal-btn" onClick={() => startNewGame()}>НАЧАТЬ</button>
                </div>
            </div>
        </div>
    </div>

}