import React from 'react';
import image1 from './Images/Navaratri.jpg';
function NavaratriPage() {
  return (
    <div>
      <h2>Navaratri - Nine Nights of Devotion</h2>
      <p>Navaratri is a Hindu festival dedicated to the worship of the goddess Durga. The festival spans over nine nights, where people celebrate with fasting, prayers, dance, and music. It culminates in Dussehra, the victory of good over evil.</p>
    <img src={image1} alt="Navaratri" />
    </div>
  );
}

export default NavaratriPage;
