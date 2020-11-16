import React from 'react';
import Header from '../organisms/Header';
import HomeCard from '../molecules/HomeCard';

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