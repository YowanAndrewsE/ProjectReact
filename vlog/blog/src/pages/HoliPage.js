import React from 'react';
import image1 from './Images/Holi.jpg';
function HoliPage() {
  return (
    <div>
      <h2>Holi - The Festival of Colors</h2>
      <p>Holi is one of the most colorful festivals in India. It signifies the arrival of spring and the victory of good over evil. People celebrate by throwing colored powders at each other, dancing to music, and enjoying traditional sweets.</p>
    <img src={image1} alt="Holi" />
    </div>
  );
}

export default HoliPage;
