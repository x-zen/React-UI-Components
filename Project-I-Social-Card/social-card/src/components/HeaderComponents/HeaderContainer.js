import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = () => {
  return (
    <div class='head'>
      <ImageThumbnail />
      <div class='head-cont'>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
