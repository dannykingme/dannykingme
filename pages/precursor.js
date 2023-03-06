import { useState, useRef } from 'react';

import Link from 'next/link';
import c from 'classnames';

const Precursor = () => {
  // const [state, setState] = useState(() => {
  //   return {
  //     example: false,
  //   };
  // });
  // const handleExample = () => {
  //   setState((oldState) => ({
  //     ...oldState,
  //     example: true,
  //   }));
  // };
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 4;
  };
  return (
    <>
      <div className="main">
        <div className="hero small">
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
            {/* <div className="content">
              <div className="header-item">DK</div>
            </div> */}
          </div>
          {/* <div className="hero-content content">
            <div className="hero-title">Danny King</div>
            <div className="hero-paragraph">
              I build products for designers and developers. Here's my Twitter,
              Dribbble, GitHub, and blog. I've also been featured in some press.
            </div>
            <div className="hero-action">
              <button className="button">See work</button>
            </div>
          </div> */}
          <div className="hero-content content">
            <div className="hero-case">
              <div className="hero-case-row">
                <div className="hero-case-cell">
                  <div className="hero-case-title">Company</div>
                  <div className="hero-case-subtitle">Precursor</div>
                </div>
              </div>
              <div className="hero-case-row">
                <div className="hero-case-cell">
                  <div className="hero-case-title">Projects</div>
                  <div className="hero-case-subtitle">All Projects</div>
                </div>
                <div className="hero-case-cell">
                  <div className="hero-case-title">Summary</div>
                  <div className="hero-case-info">
                    I built Precursor to solve a need in my own workflow and
                    ~200k designers and developers came looking for the same
                    solution.
                  </div>
                </div>
                <div className="hero-case-cell">
                  <div className="hero-case-title">Role</div>
                  <div className="hero-case-info">Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article">
          <div className="content">
            <div className="section">
              <div className="section-title">
                <h1>Introduction</h1>
              </div>
              <div className="section-subtitle">
                <div className="section-dash"></div>
                <h5>Background</h5>
              </div>
            </div>
            <p>
              Precursor is a wireframing tool that helps people focus on their
              work and collaborate with their team. I started the company in
              2014 with my cofounder, Daniel Woelfel. After launch, Precursor
              was featured as the #1 story on Hacker News, Product Hunt, and
              Designer News, and reached over 100k new users in its first six
              months with no marketing. In 2015 we decided to open-source the
              product and have kept it running for ourselves and many other
              users that are still active.
            </p>
            <div className="media">
              <div className="media-video">
                <video
                  src="/precursor/app-tour.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
              <div className="media-caption">App Tour</div>
            </div>
            {/* <div className="media">
              <div className="media-video">
                <video
                  src="/precursor/main-menu.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
              <div className="media-caption">Main Menu</div>
            </div> */}
            {/* <div className="media two">
              <div className="media-image">
                <img src="/netlify/graph-old-1.png" alt="" />
                <div className="media-caption">Old Graph</div>
              </div>
              <div className="media-image">
                <img src="/netlify/graph-new-1.png" alt="" />
                <div className="media-caption">New Graph</div>
              </div>
              <div className="media-image">
                <img src="/netlify/integrations-old-1.png" alt="" />
                <div className="media-caption">Old Plugins</div>
              </div>
              <div className="media-image">
                <img src="/netlify/integrations-new-1.png" alt="" />
                <div className="media-caption">New Integrations Hub</div>
              </div>
            </div> */}
            {/* <div className="quotes">
              <div className="quote">
                <div className="quote-head">
                  <img
                    src="https://pbs.twimg.com/profile_images/808330818380857346/xGfn8xA-_400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="quote-body">
                  <div className="quote-author">
                    <div className="quote-name">Jason Santa-Maria</div>
                    <div className="quote-role">Director of Product</div>
                  </div>
                  <div className="quote-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam maximus tortor varius semper luctus. Maecenas
                      pellentesque lectus eget varius viverra. Fusce auctor
                      porta libero nec tincidunt.
                    </p>
                  </div>
                </div>
                <div className="quote-foot">
                  <img src="/netlify-logo.svg" alt="" />
                </div>
              </div>
            </div> */}

            <h1>Challenges</h1>
            <h4>Escaping Complexity</h4>
            <p>
              Back in 2014, wireframing tools were not very easy to use or
              collaborative compared to the tools available today. Most
              prototyping was still done in high-end design tools like
              Illustrator, or slightly lower fidelity tools like Balsamiq.
              Neither worked well for me—Balsamiq still offered too many options
              that distracted from the problem being solved, and the hand-drawn
              aesthetic would trick my teammates into thinking this was a style
              I settled on for the final product.
            </p>
            <p>
              Precursor was one of the first real-time, multiplayer design
              tools. Fast forward a decade, and these multiplayer features are
              now very common in tools like Figma and Adobe XD.
            </p>
            <div className="media two">
              <div className="media-image">
                <img src="/precursor/precursor-before-1.png" alt="" />
                <div className="media-caption">Balsamiq Interface</div>
              </div>
              <div className="media-image">
                <img src="/precursor/precursor-before-2.png" alt="" />
                <div className="media-caption">Illustrator Interface</div>
              </div>
            </div>

            <div className="section">
              <div className="section-title">
                <h1>Solutions</h1>
              </div>
              <div className="section-subtitle">
                <div className="section-dash"></div>
                <h5>Production</h5>
              </div>
            </div>

            <h4>Multiplayer Collaboration</h4>
            <p>
              Precursor was one of the first design tools that was built with
              real-time, multiplayer features in-mind. Multiplayer design, as
              opposed to collaboration design, allows all users to have a shared
              sense of place. Not only were users able to manipulate each others
              designs in real-time, but they could also see each other’s cursors
              while changes were being made, and even chat via voice or text.
              For most of our users this was their first time experiencing a
              design process like that, and it really added to their sense of
              teamwork, especially those working remotely.
            </p>
            <div className="media">
              <div className="media-video">
                <video
                  src="/precursor/multiplayer-collaboration.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
              <div className="media-caption">Multiplayer Collaboration</div>
            </div>

            <h4>Radial Menu</h4>
            <p>
              Precursor’s appeal lies in its simplicity, and much of that
              simplicity is due to the intentional lack of distracting features;
              you can’t fill in shapes, you can’t add color or images. I make
              wireframes to get ideas out of my head as quickly as possible, and
              a reason I don’t like wireframing tools is their abundance of
              options to play with that lead me to spend more time playing with
              their tool than solving the problem I’m working on. For Precursor,
              I limited the tools to the necessities, and rather than house them
              in a traditional toolbar, I wanted them as easy to access and swap
              between as possible.
            </p>
            <p>
              I liked the concept of radial menus after seeing them in video
              games, but while radial menus were somewhat common in video games
              back then, they were non-existent in the productivity/design
              space. Since Precursor’s launch, radial menus have become a
              popular design editor feature, making it’s way into other
              prototyping tools like Figma.
            </p>
            <div className="media">
              <div className="media-video">
                <video
                  src="/precursor/radial-menu.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
              <div className="media-caption">Radial Menu</div>
            </div>

            <h4>Document Replay</h4>
            <p>
              Precursor used a lot of cutting edge technology at the time of its
              launch including React, WebRTC, and immutable database structures.
              This led to some unique product features, including Replay. Every
              action you make in Precursor is stored in our database as a part
              of an immutable data structure. This means we have data on which
              actions happened in which order, for every event, which gave us
              the ability to replay wireframes being built by users
              automatically. We used this feature to create a time-lapse mode,
              that any user can activate by typing “/replay” in their chat menu.
              This is actually a feature I still use today, and it helped me
              build the hover animations on my portfolio’s homepage.
            </p>
            <div className="media">
              <div className="media-video">
                <video
                  src="/precursor/document-replay.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
              <div className="media-caption">Document Replay</div>
            </div>
          </div>
        </div>

        <div className="hero small black">
          <div className="hero-background">
            <video
              ref={videoRef}
              onCanPlay={() => setPlayBack()}
              width="3840"
              height="1970"
              muted
              autoPlay
              loop
            >
              <source src="/test-vid2.mp4" type="video/mp4" />
            </video>
            <div className="hero-background-shade"></div>
          </div>
          <div className="hero-content content">
            <div className="hero-stats">
              <h1>Results</h1>
              {/* <div className="hero-case-row">
                <div className="hero-case-cell">
                  <div className="hero-case-title">Company</div>
                  <div className="hero-case-subtitle">Netlify</div>
                </div>
              </div> */}
              <div className="hero-stats-row">
                <div className="hero-stats-cell">
                  <div className="hero-stats-title">Product Integrations</div>
                  <div className="hero-stats-subtitle">{'>'}150</div>
                  {/* <div className="hero-stats-subtitle">Integrations Hub</div> */}
                </div>
                <div className="hero-stats-cell">
                  <div className="hero-stats-title">Pull Requests</div>
                  <div className="hero-stats-subtitle">+ 134</div>
                </div>
                <div className="hero-stats-cell">
                  <div className="hero-stats-title">Lines of Code</div>
                  <div className="hero-stats-subtitle">{'>'}60,000</div>
                </div>
              </div>
              <div className="hero-stats-row">
                <div className="hero-stats-cell">
                  <div className="hero-stats-title">Onboarding</div>
                  <div className="hero-stats-info">
                    Netlify Graph's onboarding interaction was Netlify's first
                    interactive onboarding user-experience.
                  </div>
                  {/* <div className="hero-stats-subtitle">Integrations Hub</div> */}
                </div>
                <div className="hero-stats-cell">
                  <div className="hero-stats-title">Efficiency</div>
                  <div className="hero-stats-info">
                    Graph's five-year-old interface received a 90% rewrite and
                    redesign in three months.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="content">
              <div className="footer-item">DK</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Precursor;
