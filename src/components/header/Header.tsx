import React, {memo} from 'react';
import './header.css';

interface HeaderProps {
    viewNewGameModel: (visible: boolean, closable: boolean) => void;
}

const Header = (props: HeaderProps) => {
    console.log("Обновляется Хедер")
    return (
        <header className="header">
            <button className="menu-btn">МЕНЮ</button>
            <button className="new-game-btn" onClick={() => {
                console.log("click")
                props.viewNewGameModel(true, true)
            }}>НОВАЯ ИГРА
            </button>
        </header>
    )
}

const MemoHeader = memo(Header)

export default MemoHeader