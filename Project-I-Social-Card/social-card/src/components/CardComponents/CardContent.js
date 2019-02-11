import React from 'react';
import './Card.css';

import Header from './components/HeaderComponents/HeaderContainer.js';
import CardBanner from './CardBanner.js';

const CardContent = () => {
  return (
    <div class='card'>
      <Header />
      <CardBanner />
    </div>
  );
};

export default CardContent;
