import { useState, useRef } from 'react';
import Link from 'next/link';
import { Header, Footer } from '../components/nav';
import c from 'classnames';
import moment from 'moment';
import press from '../data/press.json';

const pressTime = (string) => moment(string);

const ComingSoon = () => {
  return (
    <>
      <div className="main">
        <div className="hero dark">
          <Header />

          <div className="coming-soon">
            <div className="content">
              <h1>Coming Soon</h1>
              <p>
                This case study is still being written. Come back soon and it
                should be ready.
              </p>
              <Link className="button" href="/">
                Return home
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
