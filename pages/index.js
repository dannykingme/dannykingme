import { useState, useRef } from 'react';
import Link from 'next/link';
import c from 'classnames';
import { Header, Footer } from '../components/nav';
import thumbnails from '../data/thumbnails.json';

const Home = () => {
  const cancelAnimation = useRef(0);
  const galleryRef = useRef();
  const [state, setState] = useState(() => {
    return {
      heroActive: null,
      heroUntouched: true,
      activeCard: null,
      preserving: false,
    };
  });
  const handleClickHero = () => {
    galleryRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleActivateHero = () => {
    cancelAnimation.current = 1;
    setState((oldState) => ({
      ...oldState,
      heroActive: true,
      heroUntouched: false,
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
  const handleCardHover = (active, lastActive) => {
    setState((oldState) => ({
      ...oldState,
      activeCard: active,
      lastActiveCard: lastActive,
    }));
  };
  const preservingAnimation = (answer) => {
    setState((oldState) => ({
      ...oldState,
      preserving: answer,
    }));
  };
  return (
    <>
      <div className="main">
        <div
          className={c('hero', 'intro', {
            active: state.heroActive,
            inactive: state.heroActive === false,
            untouched: state.heroUntouched,
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
                  I’m a software engineer. I use code to solve problems that
                  Photoshop can’t. I bridge the gap between design and
                  engineering so my team can unite around a singular vision.
                </div>
                <div className="hero-action">
                  <div className="curtain-block">See work</div>
                </div>
              </div>
            </div>
          ) : null}
          <Header />

          <div className="hero-content content">
            <div className="hero-name">
              <div className="hero-name-first">Danny</div>
              <div className="hero-name-last">King</div>
            </div>
            <div className="hero-paragraph">
              I’m a product designer. I use design to create user experiences
              that delight. I have a sharp eye for detail and a deep
              understanding of user behavior and micro-interactions.
            </div>
            <div className="hero-action">
              <button
                className="button curtain-button"
                onMouseEnter={handleActivateHero}
                onMouseLeave={handleDeactivateHero}
                onClick={handleClickHero}
              >
                See work
              </button>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery-content content" ref={galleryRef}>
            <div
              className={c('cards', {
                active: state.activeCard,
                inactive: state.activeCard === null,
                'animate-out': state.activeCard || state.preserving,
                'animate-in': state.activeCard === null && !state.preserving,
              })}
            >
              <Card
                name="Netlify"
                date="2022"
                onCardHover={handleCardHover}
                preservingAnimation={preservingAnimation}
                lastActiveCard={state.lastActiveCard}
              />
              <Card
                name="Precursor"
                date="2014-2015"
                onCardHover={handleCardHover}
                preservingAnimation={preservingAnimation}
                lastActiveCard={state.lastActiveCard}
              />
              <Card
                name="PayGarden"
                date="2017-2022"
                onCardHover={handleCardHover}
                preservingAnimation={preservingAnimation}
                lastActiveCard={state.lastActiveCard}
              />
              <Card
                name="Serverless"
                date="2016-2017"
                onCardHover={handleCardHover}
                preservingAnimation={preservingAnimation}
                lastActiveCard={state.lastActiveCard}
                comingSoon
              />
              <Card
                name="Google"
                date="2015-2016"
                onCardHover={handleCardHover}
                preservingAnimation={preservingAnimation}
                lastActiveCard={state.lastActiveCard}
                comingSoon
              />
              <Card
                name="CircleCI"
                date="2013-2014"
                onCardHover={handleCardHover}
                preservingAnimation={preservingAnimation}
                lastActiveCard={state.lastActiveCard}
                comingSoon
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const Card = ({
  name,
  date,
  onCardHover,
  preservingAnimation,
  lastActiveCard,
  comingSoon,
}) => {
  const id = name.toLowerCase();
  const videoRef = useRef();
  const preserveAnimation = useRef(0);
  const [state, setState] = useState(() => {
    return {
      active: false,
    };
  });
  const handleMouseEnter = () => {
    preserveAnimation.current = 1;
    preservingAnimation(preserveAnimation.current);
    setState((oldState) => ({
      ...oldState,
      active: true,
    }));
    onCardHover(id, id);
    videoRef.current.play();
  };
  const handleMouseLeave = () => {
    preserveAnimation.current = 1;
    preservingAnimation(preserveAnimation.current);
    setState((oldState) => ({
      ...oldState,
      active: false,
    }));
    onCardHover(null, id);
    setTimeout(() => {
      preserveAnimation.current = 0;
      preservingAnimation(preserveAnimation.current);
    }, 750);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };
  return (
    <div
      className={c('card', id, {
        active: state.active,
        last: id === lastActiveCard,
      })}
    >
      <div className="card-background"></div>
      <div className="card-video">
        <video src={`/${id}/thumbnail.mp4`} ref={videoRef} muted></video>
      </div>
      <div className="card-thumb">
        <svg
          className="card-art"
          width="1120"
          height="840"
          viewBox="0 0 1120 840"
        >
          <path className="card-path" d={thumbnails[id]} />
        </svg>
      </div>
      <div className="edge">
        <div className="edge-n"></div>
        <div className="edge-s"></div>
        <div className="edge-w"></div>
        <div className="edge-e"></div>
      </div>
      {state.active ? (
        <div className="card-info">
          <div className="card-title">{name}</div>
          <div className="card-subtitle">{date}</div>
        </div>
      ) : null}
      <Link
        className="card-anchor"
        href={comingSoon ? '/coming-soon' : `/${id}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></Link>
    </div>
  );
};

export default Home;
