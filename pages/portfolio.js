import { useState } from 'react';
import c from 'classnames';

const Home = () => {
  // const [count, activateNetlify] = useState(false);
  const [state, setState] = useState(() => {
    return {
      netlifyActive: false,
    };
  });
  const handleActivateNetlify = () => {
    setState((oldState) => ({
      ...oldState,
      netlifyActive: true,
    }));
  };
  const handleDeactivateNetlify = () => {
    setState((oldState) => ({
      ...oldState,
      netlifyActive: false,
    }));
  };
  return (
    <>
      {/* <div className="header">test</div> */}
      <div className="main">
        <div className="hero">
          <div className="header">
            <div className="content">
              <div className="header-item">DK</div>
            </div>
          </div>
          <div className="hero-content content">
            <div className="hero-title">Danny King</div>
            <div className="hero-paragraph">
              I build products for designers and developers. Here's my Twitter,
              Dribbble, GitHub, and blog. I've also been featured in some press.
            </div>
            <div className="hero-action">
              <button className="button">See work</button>
              {/* <a href="#" className="link">
              See work
            </a> */}
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery-content content">
            <div className="gallery-items">
              <div
                className={c('gallery-item', { active: state.netlifyActive })}
                onMouseEnter={handleActivateNetlify}
                onMouseLeave={handleDeactivateNetlify}
              >
                <div className="gallery-item-background netlify"></div>
                <div className="gallery-item-thumb">
                  {state.netlifyActive ? (
                    <img src="/netlify-wireframe-animation.gif" alt="" />
                  ) : (
                    <img src="/netlify-wireframe-thumbnail.png" alt="" />
                  )}
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-item-thumb">
                  <img src="/netlify-wireframe-thumbnail.png" alt="" />
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-item-thumb">
                  <img src="/netlify-wireframe-thumbnail.png" alt="" />
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-item-thumb">
                  <img src="/netlify-wireframe-thumbnail.png" alt="" />
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-item-thumb">
                  <img src="/netlify-wireframe-thumbnail.png" alt="" />
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-item-thumb">
                  <img src="/netlify-wireframe-thumbnail.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
