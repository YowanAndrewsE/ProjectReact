import React from "react";
import image1 from './Images/Rakshabandhan.jpg';  // Correct import

const RakshaBandhan = () => {
    return (
        <div>
            <h1>Raksha Bandhan - Festival of Sibling Bond</h1>
            <p>Raksha Bandhan celebrates the love and bond between brothers and sisters. The sister ties a protective thread (rakhi) on her brother's wrist.</p>
            <h2>History</h2>
            <p>Legend has it that the goddess Lakshmi tied a sacred thread on King Bali’s wrist as a sign of protection and goodwill.</p>
            <h2>Traditions</h2>
            <ul>
                <li>Rakhi tying ceremony</li>
                <li>Exchanging gifts</li>
                <li>Family gatherings</li>
            </ul>
            <img src={image1} alt="Raksha Bandhan" />  {/* Use the imported image here */}
        </div>
    );
};

export default RakshaBandhan;
