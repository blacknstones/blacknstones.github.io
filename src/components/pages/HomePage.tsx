import React from 'react';
import Header from '../layout/Header';
import Game from '../home/Game';

export default function HomePage() {
    return (
        <div className="home-page">
            <Header/>
            <div className="home-content">
                    <Game />
            </div>
        </div>
    );
}