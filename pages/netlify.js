import { useState, useRef } from 'react';

import Link from 'next/link';
import c from 'classnames';

const Home = () => {
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
                  <div className="hero-case-subtitle">Netlify</div>
                </div>
              </div>
              <div className="hero-case-row">
                <div className="hero-case-cell">
                  <div className="hero-case-title">Projects</div>
                  <div className="hero-case-subtitle">Graph</div>
                  <div className="hero-case-subtitle">Integrations Hub</div>
                </div>
                <div className="hero-case-cell">
                  <div className="hero-case-title">Summary</div>
                  <div className="hero-case-info">
                    I redesigned Netlify Graph to make it easier for new users
                    to understand and I built a new product to help developers
                    organize and discover new integrations.
                  </div>
                </div>
                <div className="hero-case-cell">
                  <div className="hero-case-title">Role</div>
                  <div className="hero-case-info">Staff Product Designer</div>
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
              Netlify is the number one development platform for building,
              deploying, hosting, and managing web applications. It offers a
              suite of tools that streamline developer work flows and eliminate
              repetitive engineering tasks. In 2021 they approached me to help
              them build out their design team, redesign and integrate their
              latest acquisition (OneGraph), and build them an integrations
              marketplace, to make plugin discovery more accessible.
            </p>
            <div className="media two">
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
            </div>
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
            <h4>Redesigning Graph</h4>
            <p>
              In November 2021 Netlify acquired OneGraph, a product that
              combines hundreds of APIs into a single GraphQL API. It makes
              building integrations with services like Salesforce 100x faster.
              It was rebranded as Netlify Graph and positioned into Netlify’s
              suite of tools, but the product had never been touched by a
              designer and needed to be properly integrated. I was responsible
              for creating all of Netlify Graph’s new product design.
            </p>
            <div className="media two">
              <div className="media-image">
                <img src="/netlify/graph-old-2.png" alt="" />
                <div className="media-caption">Old Graph Services Wizard</div>
              </div>
              <div className="media-image">
                <img src="/netlify/graph-old-1.png" alt="" />
                <div className="media-caption">Old Graph Editor</div>
              </div>
            </div>
            <h4>Connecting an Ecosystem</h4>
            <p>
              The future of Netlify is bringing developers closer to their
              tools. With hundreds of partners, plugins, services, and tutorial
              articles, Netlify has a vast ecosystem. They needed to create a
              centralized location to maintain current integrations, encourage
              innovation, and track usage. I was tasked with creating the design
              for their marketplace.
            </p>
            <div className="media three">
              <div className="media-image">
                <img src="/netlify/integrations-old-1.png" alt="" />
                <div className="media-caption">Old Integrations Plugins</div>
              </div>
              <div className="media-image">
                <img src="/netlify/integrations-old-2.png" alt="" />
                <div className="media-caption">Old Integrations Plugins</div>
              </div>
              <div className="media-image">
                <img src="/netlify/integrations-old-3.png" alt="" />
                <div className="media-caption">Old Integrations Plugins</div>
              </div>
            </div>

            <div className="section">
              <div className="section-title">
                <h1>Prototyping</h1>
              </div>
              <div className="section-subtitle">
                <div className="section-dash"></div>
                <h5>Process</h5>
              </div>
            </div>
            <h4>Wireframing Graph</h4>
            <p>
              The biggest challenge that Graph’s design initially offered was a
              cumbersome onboarding wizard users were dragged through before
              they were able to see any services Graph had to offer. The first
              thing I experimented with was a unified interface that previewed
              what Graph had to offer right away, but still offered a
              step-by-step process to onboard into very technical product.
            </p>
            <div className="mason">
              <div className="mason-column">
                <div className="mason-block">
                  <div className="mason-figure">
                    <a
                      href="https://precursorapp.com/document/Netlify-Graph-Settings-17592210682339"
                      target="_blank"
                    >
                      <img
                        src="https://precursorapp.com/document/Netlify-Graph-Settings-17592210682339.svg"
                        alt=""
                      />
                    </a>
                    <div className="mason-caption">Graph Settings</div>
                  </div>
                </div>
                <div className="mason-block">
                  <div className="mason-figure">
                    <a
                      href="https://precursorapp.com/document/Netlify-Graph-Example-Code-17592210681113"
                      target="_blank"
                    >
                      <img
                        src="https://precursorapp.com/document/Netlify-Graph-Example-Code-17592210681113.svg"
                        alt=""
                      />
                    </a>
                    <div className="mason-caption">Graph Example Code</div>
                  </div>
                </div>
                <div className="mason-block">
                  <div className="mason-figure">
                    <a
                      href="https://precursorapp.com/document/Netlify-Graph-Session-17592210681216"
                      target="_blank"
                    >
                      <img
                        src="https://precursorapp.com/document/Netlify-Graph-Session-17592210681216.svg"
                        alt=""
                      />
                    </a>
                    <div className="mason-caption">
                      Graph Sessions Dashboard
                    </div>
                  </div>
                </div>
              </div>
              <div className="mason-column">
                <div className="mason-block">
                  <div className="mason-figure">
                    <a
                      href="https://precursorapp.com/document/Netlify-Graph-Services-Menu-17592210681300"
                      target="_blank"
                    >
                      <img
                        src="https://precursorapp.com/document/Netlify-Graph-Services-Menu-17592210681300.svg"
                        alt=""
                      />
                    </a>
                    <div className="mason-caption">Graph Services Menu</div>
                  </div>
                </div>
                <div className="mason-block">
                  <div className="mason-figure">
                    <a
                      href="https://precursorapp.com/document/Netlify-Graph-Service-Catalog-17592210684196"
                      target="_blank"
                    >
                      <img
                        src="https://precursorapp.com/document/Netlify-Graph-Service-Catalog-17592210684196.svg"
                        alt=""
                      />
                    </a>
                    <div className="mason-caption">Graph Services Catalog</div>
                  </div>
                </div>
              </div>
            </div>
            <h4>Wireframing Integrations</h4>
            <p>
              For their marketplace, Netlify needed a gallery view with partner
              logos, a details page with instructions, and a button to initiate
              the integration. Integration marketplaces are fairly common today,
              so I focused on what could differentiate us: the story. By
              promoting all of these different tools, Netlify was, in a sense,
              building a hardware store for people’s software; so I melded these
              ideas to create the toolshop.
            </p>
            <div className="mason">
              <div className="mason-column">
                <div className="column-block">
                  <div className="mason-figure">
                    <a
                      href="https://precursorapp.com/document/Netlify-Integrations-Toolshop-17592210683186"
                      target="_blank"
                    >
                      <img
                        src="https://precursorapp.com/document/Netlify-Integrations-Toolshop-17592210683186.svg"
                        alt=""
                      />
                    </a>
                    <div className="mason-caption">
                      Integrations Toolshop Homepage
                    </div>
                  </div>
                </div>
                <div className="column-block">
                  <div className="mason-figure">
                    <a
                      href="https://precursorapp.com/document/Netlify-Integrations-Details-17592210683010"
                      target="_blank"
                    >
                      <img
                        src="https://precursorapp.com/document/Netlify-Integrations-Details-17592210683010.svg"
                        alt=""
                      />
                    </a>
                    <div className="mason-caption">Integrations Details</div>
                  </div>
                </div>
              </div>
              <div className="mason-column">
                <div className="column-block">
                  <div className="mason-figure">
                    <a
                      href="https://precursorapp.com/document/Netlify-Integrations-Homepage-17592210682946"
                      target="_blank"
                    >
                      <img
                        src="https://precursorapp.com/document/Netlify-Integrations-Homepage-17592210682946.svg"
                        alt=""
                      />
                    </a>
                    <div className="mason-caption">
                      Integrations Simple Homepage
                    </div>
                  </div>
                </div>
                <div className="column-block">
                  <div className="mason-figure">
                    <a
                      href="https://precursorapp.com/document/Netlify-Integrations-Gallery-17592210682405"
                      target="_blank"
                    >
                      <img
                        src="https://precursorapp.com/document/Netlify-Integrations-Gallery-17592210682405.svg"
                        alt=""
                      />
                    </a>
                    <div className="mason-caption">
                      Integrations API Services
                    </div>
                  </div>
                </div>
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
            <h4>A New Graph Experience</h4>
            <p>
              My first priority was putting the various API partners front and
              center. Focusing on these established brands helped build trust
              with new users and immediately gave partners a sense of belonging
              in the app.
            </p>
            <div className="media">
              <div className="media-video">
                <video
                  src="/netlify/graph-demo3.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
              <div className="media-caption">Graph Operation Demo</div>
            </div>
            <p>
              Searching for new services which were previously hidden became
              delightfully simple, and exploring code examples became fun enough
              to incentivize users to explore.
            </p>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/graph-new-8.png" alt="" />
                <div className="media-caption">Graph Code Examples</div>
              </div>
            </div>
            <p>
              From there I built a toolbar to house many of the features that
              were previously left floating on the page. This became Netlify’s
              first foray into an app-oriented design, rather than a
              content-oriented design.
            </p>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/graph-new-12.png" alt="" />
                <div className="media-caption">Graph Toolbar Options</div>
              </div>
            </div>
            <p>
              Finally, I created a step-by-step onboarding flow that explained
              the most important features, without ever removing you from the
              product itself.
            </p>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/graph-new-15.png" alt="" />
                <div className="media-caption">Graph Onboarding</div>
              </div>
            </div>
            <p className="space"></p>

            <h4>A New Hub for Integrations</h4>
            <p>
              Discovery and innovation became my main priority for integrations,
              so search was key. The amount of integrations could be
              overwhelming to a user, so designing an easy to use search would
              encourage exploration.
            </p>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/integrations-mobile-1.png" alt="" />
                <div className="media-caption">GitHub Integration Mobile</div>
              </div>
            </div>
            <p>
              While I didn’t want to completely overhaul the marketplace
              paradigm, I designed and built several micro-interactions and
              delightful details to help Netlify’s offering stand out against
              its competitors.
            </p>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/integrations-new-2.png" alt="" />
                <div className="media-caption">Integrations Discover</div>
              </div>
            </div>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/integrations-new-3.png" alt="" />
                <div className="media-caption">Integrations Search</div>
              </div>
            </div>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/integrations-new-5.png" alt="" />
                <div className="media-caption">Algolia Integration</div>
              </div>
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

export default Home;
