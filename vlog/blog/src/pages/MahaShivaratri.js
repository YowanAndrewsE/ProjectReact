import React from "react";
import image1 from './Images/Mahashivatri.jpg';
const MahaShivaratri = () => {
    return (
        <div>
            <h1>Maha Shivaratri - Night of Lord Shiva</h1>
            <p>Maha Shivaratri is a Hindu festival dedicated to Lord Shiva. Devotees observe fasting and night-long vigils.</p>
            <h2>History</h2>
            <p>The night is considered auspicious to seek blessings from Lord Shiva and is believed to be the night when Lord Shiva married Goddess Parvati.</p>
            <h2>Traditions</h2>
            <ul>
                <li>Fasting and night-long vigils</li>
                <li>Chanting mantras like "Om Namah Shivaya"</li>
                <li>Offering milk and flowers to Lord Shiva</li>
            </ul>
            <img src={image1} alt="Mahasivaratri" />
        </div>
    );
};

export default MahaShivaratri;
