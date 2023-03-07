import { useState, useRef } from 'react';
import Link from 'next/link';
import c from 'classnames';
import { Header, Footer } from '../components/nav';

const Home = () => {
  const cancelAnimation = useRef(0);
  const galleryRef = useRef();
  // const [count, activateNetlify] = useState(false);
  const [state, setState] = useState(() => {
    return {
      heroActive: null,
      activeCard: null,
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
  const handleCardHover = (id) => {
    setState((oldState) => ({
      ...oldState,
      activeCard: id,
    }));
  };
  return (
    <>
      <div className="main">
        <div
          className={c('hero', {
            active: state.heroActive,
            inactive: state.heroActive === false,
            null: state.heroActive == null,
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
              })}
            >
              <Card
                id="netlify"
                name="Netlify"
                date="2022"
                thumbnail="/card-netlify-thumbnail.png"
                wireframe="/card-netlify-wireframe.png"
                animation="/card-netlify-animation.gif"
                onCardHover={handleCardHover}
              />
              <Card
                id="precursor"
                name="Precursor"
                date="2014-2015"
                thumbnail="/card-precursor-thumbnail.png"
                wireframe="/card-precursor-wireframe.png"
                animation="/card-precursor-animation.gif"
                onCardHover={handleCardHover}
              />
              <Card
                id="serverless"
                name="Serverless"
                date="2016-2017"
                thumbnail="/card-serverless-thumbnail.png"
                wireframe="/card-serverless-wireframe.png"
                animation="/card-serverless-animation.gif"
                onCardHover={handleCardHover}
                comingSoon
              />
              <Card
                id="google"
                name="Google"
                date="2015-2016"
                thumbnail="/card-google-thumbnail.png"
                wireframe="/card-google-wireframe.png"
                animation="/card-google-animation.gif"
                onCardHover={handleCardHover}
                comingSoon
              />
              <Card
                id="circleci"
                name="CircleCI"
                date="2013-2014"
                thumbnail="/card-circleci-thumbnail.png"
                wireframe="/card-circleci-wireframe.png"
                animation="/card-circleci-animation.gif"
                onCardHover={handleCardHover}
                comingSoon
              />
              <Card
                id="paygarden"
                name="Paygarden"
                date="2017-2022"
                thumbnail="/card-paygarden-thumbnail.png"
                wireframe="/card-paygarden-wireframe.png"
                animation="/card-paygarden-animation.gif"
                onCardHover={handleCardHover}
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
  id,
  name,
  date,
  thumbnail,
  wireframe,
  animation,
  onCardHover,
  comingSoon,
}) => {
  const [state, setState] = useState(() => {
    return {
      active: false,
    };
  });
  const handleMouseEnter = () => {
    setState((oldState) => ({
      ...oldState,
      active: true,
    }));
    onCardHover(id);
  };
  const handleMouseLeave = () => {
    setState((oldState) => ({
      ...oldState,
      active: false,
    }));
    onCardHover(null);
  };
  return (
    <div
      className={c('card', id, {
        active: state.active,
      })}
    >
      {state.active ? (
        <>
          <div className="card-background"></div>
          <div className="card-mock">
            <img src={thumbnail} alt="" />
          </div>
        </>
      ) : null}
      <div className="card-thumb">
        {state.active ? (
          <img src={animation} alt="" />
        ) : (
          <img src={wireframe} alt="" />
        )}
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
