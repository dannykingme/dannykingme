import { useState, useRef } from 'react';
import Link from 'next/link';
import { Header, Footer } from '../components/nav';
import c from 'classnames';

const About = () => {
  return (
    <>
      <div className="main">
        <div className="hero dark">
          <Header />

          <div className="bio content">
            <div className="bio-content">
              {/* <div className="hero-name">
                <div className="hero-name-first">Danny</div>
                <div className="hero-name-last">King</div>
              </div> */}
              <div className="bio-name">
                <div className="bio-name-first">Hey, I'm Danny</div>
                {/* <div className="hero-name-last">King</div> */}
              </div>
              <p className="bio-paragraph">
                I’m a product designer who ships code and leads teams. I’ve
                spent a lot of my career creating developer tools for companies
                like CircleCI, Netlify, and Google. My experience as both a
                designer and an engineer allows me to develop unique workflows
                that strengthen collaboration.
              </p>
              <p className="bio-paragraph">
                At Google, I was the first UX Engineer to ship code to billions
                of users. At Netlify, I was in the top 1% of hundreds of code
                contributors. At CircleCI, I invented{' '}
                <Link
                  className="link"
                  href="https://codepen.io/dannykingme/pen/LYZgQY"
                >
                  Adaptive Placeholders
                </Link>{' '}
                which later ended up in Google Material Design.
              </p>
              <p className="bio-paragraph">
                If you have an interesting problem you need help solving, let’s
                chat.
              </p>
              <div className="bio-action">
                <a href="mailto:contact@dannyking.me" className="link">
                  Email me
                </a>
              </div>
            </div>

            <div className="photos">
              <div className="photo">
                <div className="photo-image">
                  <img src="/photo-1.jpg" alt="" />
                </div>
                <div className="photo-folds"></div>
              </div>
              <div className="photo">
                <div className="photo-image">
                  <img src="/photo-1.jpg" alt="" />
                </div>
                <div className="photo-folds"></div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
