import { useState, useRef } from 'react';
import Link from 'next/link';
import c from 'classnames';

const Home = () => {
  const cancelAnimation = useRef(0);
  const galleryRef = useRef();
  // const [count, activateNetlify] = useState(false);
  const [state, setState] = useState(() => {
    return {
      heroActive: null,
      netlifyActive: false,
    };
  });
  const handleClickHero = () => {
    // 👇 Will wait until the DOM is updated with the new state
    // flushSync(() => {
    //   setPeople((people) => [
    //     ...people,
    //     {
    //       id: uuid(),
    //       name: uniqueNamesGenerator({
    //         dictionaries: [names],
    //       }),
    //     },
    //   ]);
    // });

    // 👇 Scroll to the last element in the list
    // listRef.current?.lastElementChild?.scrollIntoView();
    galleryRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleActivateHero = () => {
    cancelAnimation.current = 1;
    setState((oldState) => ({
      ...oldState,
      heroActive: true,
    }));
    setTimeout(() => {
      cancelAnimation.current = 0;
    }, 750);
  };
  const handleDeactivateHero = () => {
    setState((oldState) => ({
      ...oldState,
      heroActive: cancelAnimation.current ? null : false,
    }));
  };
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
        <div
          className={c('hero', {
            active: state.heroActive,
            inactive: state.heroActive === false,
          })}
        >
          {state.heroActive || state.heroActive === false ? (
            <div className="curtain">
              <div className="hero-content content">
                <div className="hero-name">
                  <div className="hero-name-first">Danny</div>
                  <div className="hero-name-last">King</div>
                </div>
                <div className="hero-paragraph">
                  I build products for designers and developers. Here's my
                  Twitter, Dribbble, GitHub, and blog. I've also been featured
                  in some press.
                </div>
                <div className="hero-action">
                  <div className="curtain-block">See work</div>
                  {/* <a href="#" className="link">
              See work
            </a> */}
                </div>
              </div>
            </div>
          ) : null}
          <div className="header">
            <div className="nav">
              <div className="nav-items content">
                <Link className="nav-item nav-brand" href="/portfolio">
                  Danny King
                </Link>
                <Link className="nav-item" href="/about">
                  About
                </Link>
                <Link className="nav-item" href="/press">
                  Press
                </Link>
                <Link className="nav-item" href="/resume">
                  Resume
                </Link>
                <Link className="nav-item" href="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-content content">
            <div className="hero-name">
              <div className="hero-name-first">Danny</div>
              <div className="hero-name-last">King</div>
            </div>
            <div className="hero-paragraph">
              I build products for designers and developers. Here's my Twitter,
              Dribbble, GitHub, and blog. I've also been featured in some press.
            </div>
            <div className="hero-action">
              <button
                className="button"
                onMouseEnter={handleActivateHero}
                onMouseLeave={handleDeactivateHero}
                onClick={handleClickHero}
              >
                See work
              </button>
              {/* <a href="#" className="link">
              See work
            </a> */}
            </div>
          </div>
        </div>
        <div className="gallery" ref={galleryRef}>
          <div className="gallery-content content">
            <div className="cards">
              <div className={c('card', { active: state.netlifyActive })}>
                {state.netlifyActive ? (
                  <>
                    <div className="card-background netlify"></div>
                    <div className="card-mock">
                      <img src="/netlify-mockup-thumbnail.png" alt="" />
                    </div>
                  </>
                ) : null}
                <div className="card-thumb">
                  {state.netlifyActive ? (
                    <img src="/test-vid6.gif" alt="" />
                  ) : (
                    <img src="/netlify-wireframe-thumbnail.png" alt="" />
                  )}
                </div>
                {/* <div className="card-edge">
                  <div className="card-edge-top"></div>
                  <div className="card-edge-bottom"></div>
                  <div className="card-edge-left"></div>
                  <div className="card-edge-right"></div>
                </div> */}
                {state.netlifyActive ? (
                  <div className="card-info">
                    <div className="card-title">Netlify</div>
                    <div className="card-subtitle">2022</div>
                  </div>
                ) : null}
                <Link
                  className="card-anchor"
                  href="/netlify"
                  onMouseEnter={handleActivateNetlify}
                  onMouseLeave={handleDeactivateNetlify}
                ></Link>
              </div>
              <div className="card">
                <div className="card-thumb">
                  <img src="/netlify-wireframe-thumbnail.png" alt="" />
                </div>
              </div>
              <div className="card">
                <div className="card-thumb">
                  <img src="/netlify-wireframe-thumbnail.png" alt="" />
                </div>
              </div>
              <div className="card">
                <div className="card-thumb">
                  <img src="/netlify-wireframe-thumbnail.png" alt="" />
                </div>
              </div>
              <div className="card">
                <div className="card-thumb">
                  <img src="/netlify-wireframe-thumbnail.png" alt="" />
                </div>
              </div>
              <div className="card">
                <div className="card-thumb">
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
