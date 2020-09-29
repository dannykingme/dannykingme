import React from 'react';
import bkg from './bkg.jpg'; // eslint-disable-line no-unused-vars
import './App.scss';

function App() {
  return (
    <div className="app">
      <div class="background"></div>
      <section>
        <article>
          <h1>I'm Danny King.</h1>
          <p>
            <span>I design/develop tools for other designers/developers. Previously, I made prototyping simpler at </span>
            <a href="https://precursorapp.com" target="_blank" rel="noopener noreferrer">Precursor</a>
            <span>. Currently, I'm making search simpler at </span>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>
            <span>. Eventually, I'll use more of </span>
            <a href="https://twitter.com/dannykingme" target="_blank" rel="noopener noreferrer">Twitter</a>
            <span>, </span>
            <a href="https://dribbble.com/dannykingme" target="_blank" rel="noopener noreferrer">dribbble</a>
            <span>, & </span>
            <a href="https://github.com/dannykingme" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>.</span>
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
