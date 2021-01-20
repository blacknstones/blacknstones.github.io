import React from 'react';
import Header from '../layout/Header';
import Game from '../home/Game';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <Header/>
            <main className="home-content">
                    <Game />
            </main>
        </div>
    );
}

export default HomePage;