import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div
          className="tilt inner-element br2 shadow-2 pa2"
          style={{
            height: '130px',
            width: '130px',
          }}
        >
          <h1>
            <img style={{ paddingBottom: '3px' }} src={brain} alt="brain" />
          </h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
