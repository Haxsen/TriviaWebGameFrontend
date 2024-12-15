// src/App.js
import React from 'react';
import './App.css';
import TriviaGame from './TriviaGame';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Trivia Game</h1>
                <TriviaGame />
            </header>
        </div>
    );
}

export default App;
