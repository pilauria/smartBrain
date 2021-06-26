import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <p
        className="f3 link dim black underline pa3 pointer flex items-end"
        style={{
          diplay: 'flex',
          justifyContent: 'flex-end',
          fontSize: '1rem',
        }}
      >
        {' '}
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
