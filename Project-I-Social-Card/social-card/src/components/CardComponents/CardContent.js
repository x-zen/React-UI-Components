import React from 'react';
import './Card.css';

import HeaderContainer from '../src/components/HeaderComponents/HeaderContainer.js';
import CardBanner from './CardBanner.js';
import Footer from '../src/components/FooterComponents/Footer.js';


const CardContent = () => {
  return (
    <div>
      <HeaderContainer />
      <CardBanner />
      <Footer />
    </div>
  );
};

export default CardContent;
