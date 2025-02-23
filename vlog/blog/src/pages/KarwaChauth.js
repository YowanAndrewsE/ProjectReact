import React from "react";
import image1 from './Images/Karwachauth.jpg';
const KarwaChauth = () => {
    return (
        <div>
            <h1>Karwa Chauth - Fasting for Husband's Long Life</h1>
            <p>Karwa Chauth is a fasting ritual observed by married women for the long life and well-being of their husbands.</p>
            <h2>History</h2>
            <p>The festival involves fasting from sunrise to moonrise, and women break their fast after seeing the moon through a sieve.</p>
            <h2>Traditions</h2>
            <ul>
                <li>Fasting without food and water</li>
                <li>Offering prayers for the husband's long life</li>
                <li>Breaking the fast after sighting the moon</li>
            </ul>
            <img src={image1} alt="Karwachauth" />
        </div>
    );
};

export default KarwaChauth;
