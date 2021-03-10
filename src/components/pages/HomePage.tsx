import React from 'react';
import Header from '../layout/Header';
import GameOfLife from '../home/GameOfLife';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <Header/>
            <main className="home-content">
                    <GameOfLife />
            </main>
        </div>
    );
}

export default HomePage;