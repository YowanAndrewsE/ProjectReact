import React from "react";
import image1 from './Images/Eid.jpg';
const EidPage = () => {
    return (
        <div>
            <h1>Eid - The Festival of Breaking the Fast</h1>
            <p>Eid marks the end of Ramadan, a month of fasting for Muslims. It’s a joyous occasion that involves prayers, feasts, and charity.</p>
            <h2>History</h2>
            <p>Ramadan commemorates the revelation of the Quran to Prophet Muhammad. Eid is celebrated with a special prayer service at mosques and open grounds.</p>
            <h2>Traditions</h2>
            <ul>
                <li>Charity to the poor (Zakat)</li>
                <li>Special prayers and congregations</li>
                <li>Sharing meals with family and friends</li>
            </ul>
            <img src={image1} alt="Eid" />
        </div>
    );
};

export default EidPage;
