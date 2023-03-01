import { useState, useRef } from 'react';
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
        <div className="hero">
          <div className="header">
            <div className="content">
              <div className="header-item">DK</div>
            </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    maximus tortor varius semper luctus. Maecenas pellentesque
                    lectus eget varius viverra. Fusce auctor porta libero nec
                    tincidunt.
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

            <p className="space">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              maximus tortor varius semper luctus. Maecenas pellentesque lectus
              eget varius viverra. Fusce auctor porta libero nec tincidunt.
              Maecenas pellentesque lectus eget varius viverra. Fusce auctor
              porta libero nec tincidunt.
            </p>
            {/* <div className="media">
              <img
                src="https://media.discordapp.net/attachments/684112676661755921/1079861698451751043/lANH7eKqhCmnXLgZUrlPwiyTJZUV4m62s9aaWbfN.png?width=1152&height=920"
                alt=""
              />
            </div> */}
            <h1>Challenges</h1>
            <p>
              Curabitur nunc tellus, euismod at lectus vitae, vestibulum
              efficitur libero. Mauris viverra lorem eget hendrerit imperdiet.
              Maecenas tincidunt dignissim facilisis. Quisque sit amet facilisis
              nibh. Aenean vulputate erat libero, tristique gravida nunc
              vestibulum in.
            </p>
            <div className="media two">
              <img
                src="https://media.discordapp.net/attachments/684112676661755921/1079861698451751043/lANH7eKqhCmnXLgZUrlPwiyTJZUV4m62s9aaWbfN.png?width=1152&height=920"
                alt=""
              />
              <img
                src="https://media.discordapp.net/attachments/684112676661755921/1079861698451751043/lANH7eKqhCmnXLgZUrlPwiyTJZUV4m62s9aaWbfN.png?width=1152&height=920"
                alt=""
              />
              <img
                src="https://media.discordapp.net/attachments/684112676661755921/1079861698451751043/lANH7eKqhCmnXLgZUrlPwiyTJZUV4m62s9aaWbfN.png?width=1152&height=920"
                alt=""
              />
              <img
                src="https://media.discordapp.net/attachments/684112676661755921/1079861698451751043/lANH7eKqhCmnXLgZUrlPwiyTJZUV4m62s9aaWbfN.png?width=1152&height=920"
                alt=""
              />
            </div>
            <h4>Consectetur Adipiscing</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              maximus tortor varius semper luctus. Maecenas pellentesque lectus
              eget varius viverra. Fusce auctor porta libero nec tincidunt.
            </p>
            <div className="media two">
              <img
                src="https://media.discordapp.net/attachments/684112676661755921/1079861698451751043/lANH7eKqhCmnXLgZUrlPwiyTJZUV4m62s9aaWbfN.png?width=1152&height=920"
                alt=""
              />
              <img
                src="https://media.discordapp.net/attachments/684112676661755921/1079861698451751043/lANH7eKqhCmnXLgZUrlPwiyTJZUV4m62s9aaWbfN.png?width=1152&height=920"
                alt=""
              />
            </div>
            <h4>Dolor Sit Amet</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              maximus tortor varius semper luctus. Maecenas pellentesque lectus
              eget varius viverra. Fusce auctor porta libero nec tincidunt.
            </p>
            <div className="media">
              <img
                src="https://media.discordapp.net/attachments/309172197090394112/1079982557103398972/J87dNckwY6on2cJ7XjmshjIXOS6rDavvC3YZKbh9.png?width=1795&height=920"
                alt=""
              />
            </div>
            <h4>Fusce Auctor</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              maximus tortor varius semper luctus. Maecenas pellentesque lectus
              eget varius viverra. Fusce auctor porta libero nec tincidunt.
            </p>

            <div className="quotes">
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
            </div>

            <div className="section">
              <div className="section-title">
                <h1>Wireframing</h1>
              </div>
              <div className="section-subtitle">
                <div className="section-dash"></div>
                <h5>Process</h5>
              </div>
            </div>
            <p>
              Curabitur nunc tellus, euismod at lectus vitae, vestibulum
              efficitur libero. Mauris viverra lorem eget hendrerit imperdiet.
              Maecenas tincidunt dignissim facilisis. Quisque sit amet facilisis
              nibh. Aenean vulputate erat libero, tristique gravida nunc
              vestibulum in.
            </p>
          </div>
        </div>

        <div className="hero black">
          <div className="hero-background">
            {/* <img
              src="https://media.discordapp.net/attachments/684112676661755921/1079920361556148244/BOgRX3za8ngo2WP4Jd3cI3WkLubYXMocXoYxt5rv.png?width=1840&height=920"
              alt=""
            /> */}
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
