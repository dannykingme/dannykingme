import Link from 'next/link';
import Icon from '../components/icon';
import { Header, Footer } from '../components/nav';
import Docs from '../components/docs';

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="hero small black intro">
          <div className="hero-background">
            <video src="netlify/broll-2.mp4" muted autoPlay loop playsInline />
            <div className="hero-background-shade"></div>
          </div>
          <Header />
          <div className="hero-content content">
            <div className="breakdown">
              <div className="breakdown-cell">
                <div className="breakdown-title">Company</div>
                <div className="breakdown-subtitle">Netlify</div>
              </div>
              <div className="breakdown-cell">
                <div className="breakdown-title">Projects</div>
                <div className="breakdown-subtitle">Graph</div>
                <div className="breakdown-subtitle">Integrations</div>
              </div>
              <div className="breakdown-cell">
                <div className="breakdown-title">Impact</div>
                <div className="breakdown-subtitle">{'>'}320 integrations</div>
              </div>
              <div className="breakdown-cell">
                <div className="breakdown-title">Summary</div>
                <div className="breakdown-info">
                  I redesigned Netlify Graph to improve the user experience and
                  I built Netlify Integrations to help developers discover new
                  tools.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article">
          <div className="content">
            <h1>Introduction</h1>

            <h4>Netlify's developer ecosystem</h4>
            <div className="media">
              <div className="media-video">
                <video
                  src="/netlify/graph-demo3.mp4"
                  muted
                  autoPlay
                  loop
                  playsInline
                ></video>
              </div>
              <div className="media-caption">Graph Final Result</div>
            </div>
            <p className="space">
              Netlify is the number one development platform for building,
              deploying, hosting, and managing web applications. It offers a
              suite of tools that streamline developer work flows and eliminate
              repetitive engineering tasks. In 2021 they approached me to help
              them build out their design team, redesign and integrate their
              latest acquisition (OneGraph), and build them an integrations
              marketplace, to make plugin discovery more accessible.
            </p>
          </div>
          <div className="content-highlight">
            <div className="content">
              <h1>Challenge</h1>

              <h4>Designing a complicated tool</h4>
              <div className="media two">
                <div className="media-image">
                  <img src="/netlify/graph-old-1.png" alt="" />
                  <div className="media-caption">Old Graph Editor</div>
                </div>
                <div className="media-image">
                  <img src="/netlify/graph-old-2.png" alt="" />
                  <div className="media-caption">Old Graph Services Wizard</div>
                </div>
              </div>
              <p>
                The OneGraph service makes building integrations with services
                like Salesforce 100x faster but the product had never been
                touched by a designer. It needed to integrate properly with
                Netlify I was responsible for creating all of Graph’s new
                product design.
              </p>
            </div>
          </div>

          <div className="content">
            <h1>Process</h1>

            <h4>Brainstorming API interactions</h4>
            <Docs
              docs={[
                [
                  { id: 17592210682339, name: 'Graph Settings' },
                  { id: 17592210681113, name: 'Graph Example Code' },
                  { id: 17592210681216, name: 'Graph Sessions Dashboard' },
                ],
                [
                  { id: 17592210681300, name: 'Graph Services Menu' },
                  { id: 17592210684196, name: 'Graph Services Catalog' },
                ],
              ]}
            />
            <p className="space">
              The biggest challenge that Graph’s design initially offered was a
              cumbersome onboarding wizard users were dragged through before
              they were able to see any services Graph had to offer. The first
              thing I experimented with was a unified interface that previewed
              what Graph had to offer right away, but still offered a
              step-by-step process to onboard into very technical product.
            </p>

            <h1>Solutions</h1>

            <h4>Graph services list</h4>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/graph-new-3.png" alt="" />
                <div className="media-caption">Graph Services List</div>
              </div>
            </div>
            <p className="space">
              My first priority was putting the various API partners front and
              center. Focusing on these established brands helped build trust
              with new users and immediately gave partners a sense of belonging
              in the app.
            </p>

            <h4>Graph code examples</h4>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/graph-new-8.png" alt="" />
                <div className="media-caption">Graph Code Examples</div>
              </div>
            </div>
            <p className="space">
              Searching for new services which were previously hidden became
              delightfully simple, and exploring code examples became fun enough
              to incentivize users to explore.
            </p>

            <h4>Graph toolbar options</h4>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/graph-new-12.png" alt="" />
                <div className="media-caption">Graph Toolbar Options</div>
              </div>
            </div>
            <p className="space">
              From there I built a toolbar to house many of the features that
              were previously left floating on the page. This became Netlify’s
              first foray into an app-oriented design, rather than a
              content-oriented design.
            </p>

            <h4>Graph onboarding</h4>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/graph-new-15.png" alt="" />
                <div className="media-caption">Graph Onboarding</div>
              </div>
            </div>
            <p className="space">
              Finally, I created a step-by-step onboarding flow that explained
              the most important features, without ever removing you from the
              product itself.
            </p>
          </div>

          <div className="content-highlight">
            <div className="content">
              <h1>Challenge</h1>

              <h4>A fractured ecosystem</h4>
              <div className="media two">
                <div className="media-image">
                  <img src="/netlify/integrations-old-1.png" alt="" />
                  <div className="media-caption">Old Integrations Plugins</div>
                </div>
                <div className="media-image">
                  <img src="/netlify/integrations-old-2.png" alt="" />
                  <div className="media-caption">Old Integrations Plugins</div>
                </div>
              </div>
              <p className="space">
                The future of Netlify is bringing developers closer to their
                tools. With hundreds of partners, plugins, services, and
                tutorial articles, Netlify has a vast ecosystem. They needed to
                create a centralized location to maintain current integrations,
                encourage innovation, and track usage. I was tasked with
                creating the design for their marketplace.
              </p>
            </div>
          </div>

          <div className="content">
            <h1>Process</h1>

            <h4>Prototyping a vast ecosystem</h4>
            <Docs
              docs={[
                [
                  {
                    id: 17592210683186,
                    name: 'Integrations Toolshop Homepage',
                  },
                  { id: 17592210683010, name: 'Integrations Details' },
                ],
                [
                  { id: 17592210682946, name: 'Integrations Simple Homepage' },
                  { id: 17592210682405, name: 'Integrations API Services' },
                ],
              ]}
            />
            <p className="space">
              For their marketplace, Netlify needed a gallery view with partner
              logos, a details page with instructions, and a button to initiate
              the integration. Integration marketplaces are fairly common today,
              so I focused on what could differentiate us: the story. By
              promoting all of these different tools, Netlify was, in a sense,
              building a hardware store for people’s software; so I melded these
              ideas to create the toolshop.
            </p>

            <h1>Solutions</h1>

            <h4>A new hub for integrations</h4>
            <div className="media">
              <div className="media-image flat">
                <img src="/netlify/integrations-mobile-1.png" alt="" />
                <div className="media-caption">GitHub Integration Mobile</div>
              </div>
            </div>
            <p className="space">
              Discovery and innovation became my main priority for integrations,
              so search was key. The amount of integrations could be
              overwhelming to a user, so designing an easy to use search would
              encourage exploration. You could even search for integrations
              using the global CommandBar, which worked great on mobile.
            </p>

            <h4>Integration discovery</h4>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/integrations-new-2.png" alt="" />
                <div className="media-caption">Integration Discovery</div>
              </div>
            </div>
            <p className="space">
              While I didn’t want to completely overhaul the marketplace
              paradigm, I designed and built several micro-interactions and
              delightful details to help Netlify’s offering stand out against
              its competitors.
            </p>

            <h4>Integrations search</h4>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/integrations-new-3.png" alt="" />
                <div className="media-caption">Integrations Search</div>
              </div>
            </div>
            <p className="space">
              Search queries do a deep dive into each integration's metadata to
              find recommendations that are relevent on a technical level.
            </p>

            <h4>Partner details</h4>
            <div className="media">
              <div className="media-image">
                <img src="/netlify/integrations-new-5.png" alt="" />
                <div className="media-caption">Partner Details</div>
              </div>
            </div>
            <p className="space">
              I designed and built a backend interface, using Sanity, to enable
              select partners to customize their details using a simple,
              drag-and-drop interface.
            </p>
          </div>
        </div>

        <div className="hero small black outro">
          <div className="hero-background">
            <video src="netlify/broll-1.mp4" muted autoPlay loop playsInline />
            <div className="hero-background-shade"></div>
          </div>
          <div className="hero-content content">
            <h1>Results</h1>
            <div className="breakdown">
              <div className="breakdown-cell">
                <div className="breakdown-title">Product Integrations</div>
                <div className="breakdown-subtitle">{'>'}320</div>
              </div>
              <div className="breakdown-cell">
                <div className="breakdown-title">Pull Requests</div>
                <div className="breakdown-subtitle">+ 134</div>
              </div>
              <div className="breakdown-cell">
                <div className="breakdown-title">Lines of Code</div>
                <div className="breakdown-subtitle">{'>'}60,000</div>
              </div>
              <div className="breakdown-cell">
                <div className="breakdown-title">Innovation</div>
                <div className="breakdown-info">
                  Netlify Graph's onboarding interaction was Netlify's first
                  interactive onboarding user-experience.
                </div>
              </div>
              <div className="breakdown-cell">
                <div className="breakdown-title">Efficiency</div>
                <div className="breakdown-info">
                  Graph's five-year-old interface received a 90% rewrite and
                  redesign in three months.
                </div>
              </div>
            </div>
            <div className="hero-actions">
              <Link className="link" href="/">
                <Icon arrow-left /> Back home
              </Link>
              <Link className="link" href="/precursor">
                Next project: Precursor <Icon arrow-right />
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
