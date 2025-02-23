import React from 'react';
import image1 from './Images/Pongal.jpg';
function PongalPage() {
  return (
    <div>
      <h2>Pongal - The Harvest Festival of Tamil Nadu</h2>
      <p>Pongal is one of the biggest festivals in South India, especially Tamil Nadu. It’s a four-day celebration marking the harvest season. People celebrate the occasion with family, friends, and delicious food like "Pongal" (sweet rice) offered to the Sun God, thanking him for the bountiful harvest.</p>
    <img src={image1} alt="Pongal" />
    </div>
  );
}

export default PongalPage;
