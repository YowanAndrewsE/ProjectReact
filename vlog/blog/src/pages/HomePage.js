import React from 'react';
import image1 from './Images/Festivals.jpg';
function HomePage() {
  return (
    <div>
      <h1>Welcome to the Indian Festivals Blog!</h1>
      <p>India is a land of festivals! Here we explore some of the major festivals celebrated across the country, with their unique cultural and spiritual significance.</p>
      <h2>Explore the Festivals:</h2>
      <ul>
        <li><a href="/pongal">Pongal</a></li>
        <li><a href="/OnamPage">Onam</a></li>
        <li><a href="/NavaratriPage">Navaratri</a></li>
        <li><a href="/MahaShivaratri">MahaShivaratri</a></li>
        <li><a href="/HoliPage">Holi</a></li>
        <li><a href="/DiwaliPage">Diwali</a></li>
        <li><a href="/EidPage">Eid</a></li>
        <li><a href="/RakshaBandhan">RakshaBandhan</a></li>
        <li><a href="/DurgaPujaPage">Durgapuja</a></li>
        <li><a href="/KarwaChauth">KarwaChauth</a></li>
      </ul>
      <img src={image1} alt="Festivals" />
    </div>
  );
}

export default HomePage;
