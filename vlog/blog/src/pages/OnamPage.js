import React from "react";
import image1 from './Images/Onam.jpg';
const OnamPage = () => {
    return (
        <div>
            <h1>Onam - The Harvest Festival of Kerala</h1>
            <p>Onam is the biggest festival in Kerala, celebrated to honor the homecoming of the mythical King Mahabali.</p>
            <h2>History</h2>
            <p>Onam is celebrated with joy, including elaborate feasts (Onasadya), traditional dances (Thiruvathira), and floral decorations (Pookalam).</p>
            <h2>Traditions</h2>
            <ul>
                <li>Onasadya feast with 26 dishes</li>
                <li>Pookalam - flower rangolis</li>
                <li>Boat races (Vallam Kali)</li>
            </ul>
            <img src={image1} alt="Onam" />
        </div>
    );
};

export default OnamPage;
