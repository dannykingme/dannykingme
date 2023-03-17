import Link from 'next/link';
import Icon from '../components/icon';
import { Footer, Header } from '../components/nav';

const Precursor = () => {
  return (
    <div className="main">
      <div className="hero small black intro">
        <div className="hero-background">
          <video src="/precursor/broll-3.mp4" muted autoPlay loop playsInline />
          <div className="hero-background-shade"></div>
        </div>
        <Header />
        <div className="hero-content content">
          <div className="breakdown">
            <div className="breakdown-cell full">
              <div className="breakdown-title">Company</div>
              <div className="breakdown-subtitle">Precursor</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Projects</div>
              <div className="breakdown-subtitle">All Projects</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Summary</div>
              <div className="breakdown-info">
                I built Precursor to solve a need in my own workflow and ~200k
                designers and developers came looking for the same solution.
              </div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Role</div>
              <div className="breakdown-info">Founder</div>
            </div>
          </div>
        </div>
      </div>
      <div className="article">
        <div className="content">
          <h1>Introduction</h1>

          <h4>Fixing collaboration for product teams</h4>
          <div className="media">
            <div className="media-video">
              <video
                src="/precursor/app-tour.mp4"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
            <div className="media-caption">App Tour</div>
          </div>
          <p className="space">
            Precursor is a wireframing tool that helps people focus on their
            work and collaborate with their team. I started the company in 2014
            with my cofounder, Daniel Woelfel. After launch, Precursor was
            featured as the #1 story on{' '}
            <Link
              className="link"
              href="https://news.ycombinator.com/item?id=9659167"
              target="_blank"
            >
              Hacker News
            </Link>
            ,{' '}
            <Link
              className="link"
              href="https://twitter.com/producthunt/status/533630762168635392"
              target="_blank"
            >
              Product Hunt
            </Link>
            , and{' '}
            <Link
              className="link"
              href="https://www.designernews.co/stories/45124-precursor"
              target="_blank"
            >
              Designer News
            </Link>
            , and reached over 100k new users in its first six months with no
            marketing. In 2015 we decided to open-source the product and have
            kept it running for ourselves and many other users that are still
            active.
          </p>
        </div>
        <div className="content-highlight">
          <div className="content">
            <h1>Challenge</h1>

            <h4>Design tools chaos</h4>
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
          </div>
        </div>

        <div className="content">
          <h1>Solutions</h1>

          <h4>Multiplayer collaboration</h4>
          <div className="media">
            <div className="media-video">
              <video
                src="/precursor/multiplayer-collaboration.mp4"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
            <div className="media-caption">Multiplayer Collaboration</div>
          </div>
          <p className="space">
            Precursor was one of the first design tools that was built with
            real-time, multiplayer features in-mind. Multiplayer design, as
            opposed to collaboration design, allows all users to have a shared
            sense of place. Not only were users able to manipulate each others
            designs in real-time, but they could also see each other’s cursors
            while changes were being made, and even chat via voice or text. For
            most of our users this was their first time experiencing a design
            process like that, and it really added to their sense of teamwork,
            especially those working remotely.
          </p>

          <h4>Radial menu</h4>
          <div className="media">
            <div className="media-video">
              <video
                src="/precursor/radial-menu.mp4"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
            <div className="media-caption">Radial Menu</div>
          </div>
          <p>
            Precursor’s appeal lies in its simplicity, and much of that
            simplicity is due to the intentional lack of distracting features;
            you can’t fill in shapes, you can’t add color or images. I make
            wireframes to get ideas out of my head as quickly as possible, and a
            reason I don’t like wireframing tools is their abundance of options
            to play with that lead me to spend more time playing with their tool
            than solving the problem I’m working on. For Precursor, I limited
            the tools to the necessities, and rather than house them in a
            traditional toolbar, I wanted them as easy to access and swap
            between as possible.
          </p>
          <p className="space">
            I liked the concept of radial menus after seeing them in video
            games, but while radial menus were somewhat common in video games
            back then, they were non-existent in the productivity/design space.
            Since Precursor’s launch, radial menus have become a popular design
            editor feature, making it’s way into other prototyping tools like
            Figma.
          </p>

          <h4>Document replay</h4>
          <div className="media">
            <div className="media-video">
              <video
                src="/precursor/document-replay.mp4"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
            <div className="media-caption">Document Replay</div>
          </div>
          <p className="space">
            Precursor used a lot of cutting edge technology at the time of its
            launch including React, WebRTC, and immutable database structures.
            This led to some unique product features, including Replay. Every
            action you make in Precursor is stored in our database as a part of
            an immutable data structure. This means we have data on which
            actions happened in which order, for every event, which gave us the
            ability to replay wireframes being built by users automatically. We
            used this feature to create a time-lapse mode, that any user can
            activate by typing “/replay” in their chat menu. This is actually a
            feature I still use today, and it helped me build the hover
            animations on my portfolio’s homepage.
          </p>
        </div>
      </div>

      <div className="hero small black outro">
        <div className="hero-background">
          <video src="/precursor/broll-4.mp4" muted autoPlay loop playsInline />
          <div className="hero-background-shade"></div>
        </div>
        <div className="hero-content content">
          <h1>Results</h1>
          <div className="breakdown">
            <div className="breakdown-cell">
              <div className="breakdown-title">New users</div>
              <div className="breakdown-subtitle">~200k</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Sign ups</div>
              <div className="breakdown-subtitle">{'>'} 1,200</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Monthly growth</div>
              <div className="breakdown-subtitle">+110%</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Popularity</div>
              <div className="breakdown-info">
                Precursor was feature as the #1 trending story on Hacker News,
                Product Hunt, and Designer News.
              </div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Big teams</div>
              <div className="breakdown-info">
                Precursor was adopted by teams at Google, Facebook, Dropbox,
                Blizzard, and Ivy League schools.
              </div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Clojure success</div>
              <div className="breakdown-info">
                Precursor was listed as one of Clojure's official{' '}
                <Link
                  className="link"
                  href="https://clojure.org/community/success_stories"
                >
                  success stories
                </Link>
                .
              </div>
            </div>
          </div>
          <div className="hero-actions">
            <Link className="link" href="/">
              <Icon arrow-left /> Back home
            </Link>
            <Link className="link" href="/paygarden">
              Next project: PayGarden <Icon arrow-right />
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Precursor;
