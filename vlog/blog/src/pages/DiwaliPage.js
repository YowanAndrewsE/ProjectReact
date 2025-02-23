import React from 'react';
import image1 from './Images/Diwali.jpg';
function DiwaliPage() {
  return (
    <div>
      <h2>Diwali - The Festival of Lights</h2>
      <p>Diwali, also known as Deepavali, is the most widely celebrated festival in India. It symbolizes the victory of light over darkness and good over evil. People decorate their homes with diyas (oil lamps), burst fireworks, and enjoy sweets.</p>
    <img src={image1} alt="Diwali" />
    </div>
  );
}

export default DiwaliPage;
