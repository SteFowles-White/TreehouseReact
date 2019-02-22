import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//Header component
const Header = (props) => {
        return (
        <header>
            <h1>{props.title}</h1>
            <span className = 'stats'>Players: {props.totalPlayers}</span>
        </header>
    )};



//Creates the player name on list and the counter for the game
const Player = () => {
    return (
        <div className='player:'>
            <span className='player-name'>
                Guil
            </span>
            <Counter />
        </div>

    )

}

//Creates the counter for the Player
const Counter = () => {
    return (
        <div className='counter'>
            <button className='counter-action decrement'>-</button>
            <span className='counter-score'>35</span>
            <button className='counter-action increment'>+</button>
        </div>
    )}


    // main holder of compents which calls the header and player compenet 
const MainApp = () => {
    return (
        <div className='scoreboard'>
            <Header title='My Scoreboard' totalPlayers={1}/>

            {/*Payers list*/}
            <Player />
        </div>
    )};


//rendering app compenet to DOM
ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);
