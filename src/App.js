import React from 'react';
import bkg from './bkg.jpg'; // eslint-disable-line no-unused-vars
import './App.scss';

const Link = ({ children, href, ...other }) => {
  return <a href={href} {...other}>{children}</a>;
}

const LinkOut = ({ children, href, ...other }) => {
  return <Link href={href} target="_blank" rel="noopener noreferrer" {...other}>{children}</Link>;
}

function App() {
  return (
    <div className="app">
      <div className="background"></div>
      <section>
        <article>
          <h1>I'm Danny King.</h1>
          <p>
            <span>I design/develop tools for other designers/developers. Previously, I made prototyping simpler at </span>
            <LinkOut href="https://precursorapp.com">Precursor</LinkOut>
            <span>. Currently, I'm making search simpler at </span>
            <LinkOut href="https://google.com">Google</LinkOut>
            <span>. Eventually, I'll use more of </span>
            <LinkOut href="https://twitter.com/dannykingme">Twitter</LinkOut>
            <span>, </span>
            <LinkOut href="https://dribbble.com/dannykingme">dribbble</LinkOut>
            <span>, & </span>
            <LinkOut href="https://github.com/dannykingme">GitHub</LinkOut>
            <span>.</span>
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
