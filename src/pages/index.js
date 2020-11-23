import React, { Component } from "react"
// import { Helmet } from "react-helmet"
import classNames from "classnames"
import moment from "moment"
import { Portal, Overlay } from "../components/common"
import background from "../images/background.jpg"
import press from "../data/press.json"
import "../less/app.less"

const pressTime = string => moment(string)

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

const PressOverlay = ({ close }) => {
  const handleClick = e => {
    e.stopPropagation()
  }
  const handleClose = () => {
    if (close) {
      close()
    }
  }
  return (
    <Overlay onClose={close} className="overlay-press">
      <div className="overlay-container" onClick={handleClose}>
        <div className="small content" onClick={handleClick}>
          <h1 className="nth">Press</h1>
          {press.map((item, i) => [
            <h5 className="nth" key={item.section}>
              {item.section}
            </h5>,
            item.articles
              .sort((a, b) => a.date - b.date)
              .map((item, i) => (
                <div className="press-item nth" key={item.title + i}>
                  <span className="press-item-date">
                    {pressTime(item.date).format("DD MMM YYYY")}
                  </span>
                  <span> &raquo; </span>
                  <LinkEx className="press-item-title" href={item.url}>
                    {item.title}
                  </LinkEx>
                </div>
              ))
          ])}
        </div>
      </div>
    </Overlay>
  )
}

const PressLink = () => (
  <Portal closeOnOutsideClick closeOnEsc>
    {({ openPortal, closePortal, isOpen, portal }) => [
      <button className="fancy link" onClick={openPortal} key="foo">
        press
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
        Created new Twitch donation model
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
      // overlay: false
    }
  }
  handleTweetText(text) {
    this.setState({
      // hotTweet: text
    })
  }
  render() {
    // const { user } = this.props.data.twitter;
    // const { hotTweet } = this.state;
    return (
      <div className="app">
        <div className="background">
          <img className="background-image" src={background} alt="" />
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
              <span>Here's my </span>
              <LinkEx className="fancy" href="https://twitter.com/dannykingme">
                Twitter
              </LinkEx>
              <span>, </span>
              <LinkEx className="fancy" href="https://dribbble.com/dannykingme">
                Dribbble
              </LinkEx>
              <span>, </span>
              <LinkEx className="fancy" href="https://github.com/dannykingme">
                GitHub
              </LinkEx>
              <span>, and </span>
              <LinkEx className="fancy" href="https://precursorapp.com/blog">
                blog
              </LinkEx>
              <span>. </span>
              <span>I've also been featured in some </span>
              <PressLink />
              <span>. </span>
            </p>
          </article>
        </section>
      </div>
    )
  }
}

export default IndexPage
