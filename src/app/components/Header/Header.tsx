"use client";
import React from 'react';


const Header: React.FC = () => {
  return (
    <header>
      <div className="header flex py-2">
        <h1>회원상세</h1>
        <h4 className="ml-3">
          <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.64844" cy="3.87695" r="3" fill="#FF4D4F" />
          </svg>
        </h4>
        <h3 className="ml-1">필수항목</h3>
      </div>
      <hr />
    </header>
  );
};

export default Header;
