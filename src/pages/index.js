import React, { Component } from "react"
import { Helmet } from "react-helmet"
import classNames from "classnames"
import { Portal, Overlay } from "../components/common"
import bkg from "../images/bkg.jpg"
import "../less/app.less"

const Link = ({ children, href, className, ...other }) => {
  return (
    <a className={classNames("link", className)} href={href} {...other}>
      {children}
    </a>
  )
}

const LinkEx = ({ children, href, className, ...other }) => {
  return (
    <Link
      className={classNames("external", className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...other}
    >
      {children}
    </Link>
  )
}

const PressOverlay = ({ close }) => (
  <Overlay page onClose={close} className="overlay-press">
    <h1>Press</h1>
    <h5>Precursor</h5>
    <p>
      <strong>Aug 2015 </strong>
      >>
      <a href="https://teamtreehouse.com/library/episode-98-css-blend-modes-parallax-scrolling-adaptive-placeholders">
        https://teamtreehouse.com/library/episode-98-css-blend-modes-parallax-scrolling-adaptive-placeholders
      </a>
    </p>
  </Overlay>
)

const PressLink = () => (
  <Portal closeOnOutsideClick closeOnEsc>
    {({ openPortal, closePortal, isOpen, portal }) => [
      <button onClick={openPortal} key="foo">
        Press
      </button>,
      portal(<PressOverlay close={closePortal} />)
    ]}
  </Portal>
)

const Story = ({ children, href, offset }) => {
  return (
    <div className="story" style={{ left: offset }}>
      <div className="story-dash" />
      <div className="story-title">
        <LinkEx className="story-link" href={href}>
          {children}
        </LinkEx>
      </div>
    </div>
  )
}

const Storyline = () => {
  return (
    <div className="storyline">
      <Story date="aug 2013" offset="5%" href="https://circleci.com/">
        Product Designer at CircleCI
      </Story>
      <Story
        date="apr 2014"
        offset="15%"
        href="https://circleci.com/blog/adaptive-placeholders/"
      >
        Invented Adaptive Placeholders
      </Story>
      <Story date="jan 2015" offset="26%" href="https://precursorapp.com/">
        Founded Precursor
      </Story>
      <Story date="oct 2015" offset="33.5%" href="https://design.google/sumux">
        UX Engineer at Google
      </Story>
      <Story
        date="jul 2016"
        offset="43.5%"
        href="https://www.google.com/search?q=flowers"
      >
        Shipped product to 2 billion users
      </Story>
      <Story date="may 2017" offset="53.5%" href="https://www.paygarden.com/">
        Head of Product at PayGarden
      </Story>
      <Story date="nov 2017" offset="59%" href="https://twitch.paygarden.com/">
        Created Twitch donation product
      </Story>
      <Story
        date="sep 2018"
        offset="71%"
        href="https://secure.paygarden.com/pay/site/ltm/privateinternet?uid=1"
      >
        Redefined anonymous gift card payments
      </Story>
    </div>
  )
}

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      overlay: false
    }
  }
  handleTweetText(text) {
    this.setState({
      hotTweet: text
    })
  }
  render() {
    // const { user } = this.props.data.twitter;
    // const { hotTweet } = this.state;
    return (
      <div className="app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="background">
          <img className="background-image" src={bkg} alt="" />
        </div>
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
              <span>. </span>
              <PressLink />
            </p>
          </article>
        </section>
      </div>
    )
  }
}

export default IndexPage
