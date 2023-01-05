import React from "react";
import './endGameModal.scss';

interface EndGameModelProps {
    visible: boolean
    viewNewGameModel: Function;
    viewEndGameModel: Function;
}

export default function EndGameModal(props: EndGameModelProps) {
    console.log("Обновляется модальное окно Окончания игры")

    function onClick() {
        props.viewEndGameModel(false)
        props.viewNewGameModel([true, false])
    }

    if (props.visible) {
        return (
            <div id="end-game-modal-container-id" className="end-game-modal-container">
                <div className="end-game-modal-window">
                    <span className="end-game-title-btn">ИГРА ЗАКОНЧИЛАСЬ</span>
                    <div className="end-game-modal-btn-container">
                        <button className="end-game-modal-btn" onClick={() => onClick()}>
                            НОВАЯ ИГРА
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}