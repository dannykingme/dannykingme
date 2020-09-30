import React from 'react';
import classNames from 'classnames';
import './bkg.jpg';
import './App.scss';

const Link = ({ children, href, className, ...other }) => {
  return (
    <a
      className={classNames('link', className)}
      href={href}
      {...other}
    >{children}</a>
  );
}

const LinkEx = ({ children, href, className, ...other }) => {
  return (
    <Link
      className={classNames('external', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...other}
    >{children}</Link>
  );
}

const Story = ({ children, href, offset }) => {
  return (
    <div className="story" style={{ 'left': offset }}>
      <div className="story-dash" />
      <div className="story-title">
        <LinkEx href={href}>{children}</LinkEx>
      </div>
    </div>
  );
}

const Storyline = () => {
  return (
    <div className="storyline">
      <Story offset="5%" href="https://circleci.com/">Product Designer at CircleCI</Story> {/* aug 2013 */}
      <Story offset="15%" href="https://circleci.com/blog/adaptive-placeholders/">Invented Adaptive Placeholders</Story> {/* apr 2014 */}
      <Story offset="26%" href="https://precursorapp.com/">Founded Precursor</Story> {/* jan 2015 */}
      <Story offset="33.5%" href="https://wearesumux.appspot.com/">UX Engineer at Google</Story> {/* oct 2015 */}
      <Story offset="43.5%" href="https://www.google.com/search?q=flowers">Shipped product to 2 billion users</Story> {/* jul 2016 */}
      <Story offset="53.5%" href="https://www.paygarden.com/">Head of Product at PayGarden</Story> {/* may 2017 */}
      <Story offset="59%" href="https://twitch.paygarden.com/">Created Twitch donation product</Story> {/* nov 2017 */}
      <Story offset="71%" href="https://secure.paygarden.com/pay/site/ltm/privateinternet?uid=1">Redefined anonymous gift card payments</Story> {/* sep 2018 */}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="background" />
      <div className="storytime">
        <div className="storytime-wrapper">
          <div className="timeline">
            <div className="flex-line" />
            <div className="time">2014</div>
            <div className="flex-line" />
            <div className="time">2015</div>
            <div className="flex-line" />
            <div className="time">2016</div>
            <div className="flex-line" />
            <div className="time">2017</div>
            <div className="flex-line" />
            <div className="time">2018</div>
            <div className="flex-line" />
            <div className="time">2019</div>
            <div className="flex-line" />
            <div className="time">2020</div>
            <div className="flex-line" />
          </div>
          <Storyline />
        </div>
      </div>
      <section className="section">
        <article className="article">
          <h1>I'm Danny King.</h1>
          <p>
            <span>I build products for designers and developers. </span>
            <span>I used to write a lot on my </span>
            <LinkEx href="https://precursorapp.com/blog">blog</LinkEx>
            <span> but not so much anymore. Here's my </span>
            <LinkEx href="https://twitter.com/dannykingme">Twitter</LinkEx>
            <span>, </span>
            <LinkEx href="https://dribbble.com/dannykingme">dribbble</LinkEx>
            <span>, and </span>
            <LinkEx href="https://github.com/dannykingme">GitHub</LinkEx>
            <span>.</span>
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
