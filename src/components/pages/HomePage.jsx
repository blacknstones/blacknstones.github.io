import React from 'react';
import Header from '../layout/Header';
import HomeCard from '../home/HomeCard';

export default function HomePage() {
    return (
        <div className="home-page">
            <Header/>
            <div className="home-content">
                    <HomeCard />
            </div>
        </div>
    );
}