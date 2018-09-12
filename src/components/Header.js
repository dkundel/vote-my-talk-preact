import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Thanks for watching my talk!</h1>
      <img
        src="https://media.giphy.com/media/l3V0lsGtTMSB5YNgc/giphy.gif"
        alt="daning panda GIF"
      />
      <p className="tag-line">
        I would really appreciate your feedback. Please click on the amount of{' '}
        <span role="img" aria-label="panda">
          🐼
        </span>{' '}
        you would award for this talk!
      </p>
    </header>
  );
};

export default Header;
