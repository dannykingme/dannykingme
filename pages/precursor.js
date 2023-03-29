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
            <div className="breakdown-cell">
              <div className="breakdown-title">Company</div>
              <div className="breakdown-subtitle">Precursor</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Projects</div>
              <div className="breakdown-subtitle">Startup</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Impact</div>
              <div className="breakdown-subtitle">+200k new users</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Summary</div>
              <div className="breakdown-info">
                I built Precursor to improve my own workflow and nearly 200k
                designers and developers came looking for the same solution.
              </div>
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
          <p>
            Precursor is a wireframing tool that helps teams focus on their
            ideas. I started the company in 2014 with my cofounder, Daniel
            Woelfel. After launch, Precursor was featured as the #1 story on{' '}
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
            , and reached 200k new users after six months of development, with
            no marketing.
          </p>
          <p>
            I built Precursor to solve problems in my own workflow. I was tired
            of holding pencil sketches up to my webcam and getting distracted by
            my wireframing tools.
          </p>
          <p className="space">
            Precursor became one of the first multiplayer design tools. Fast
            forward a decade, and the multiplayer features that made Precursor
            unique are now very common in tools like Figma, Adobe XD, and
            InVision.
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
            <p>My goal was to change the way people shared their ideas.</p>
          </div>
        </div>

        <div className="content">
          <h1>Process</h1>

          <h4>Dogfood inception</h4>
          <div className="media">
            <div className="media-image">
              <img src="/precursor/dogfood.png" alt="" />
              <div className="media-caption">Dogfood Inception</div>
            </div>
          </div>
          <p>
            I’ve always prioritized dogfooding my own products but Precursor
            brought this to another level. In this alpha version of Precursor,
            Daniel and I are discussing a significant UI change. I’m waiting in
            Chrome, with my Devtools, to prototype it. Precursor provided the
            static wireframe but it also served as a dynamic guide for my
            development workflow.
          </p>
          <p className="space">
            We didn’t use Precursor to simulate our users’ needs. We relied on
            Precursor to collaborate with each other and build our product.
          </p>

          <h4>Evolution of menus</h4>
          <div className="media two">
            <a
              className="media-image"
              href="/precursor/menu-1.png"
              target="_blank"
            >
              <img src="/precursor/menu-1.png" alt="" />
              <div className="media-caption">Menu Version 1</div>
            </a>
            <a
              className="media-image"
              href="/precursor/menu-2.png"
              target="_blank"
            >
              <img src="/precursor/menu-2.png" alt="" />
              <div className="media-caption">Menu Version 2</div>
            </a>
            <a
              className="media-image"
              href="/precursor/menu-3.png"
              target="_blank"
            >
              <img src="/precursor/menu-3.png" alt="" />
              <div className="media-caption">Menu Version 3</div>
            </a>
            <a
              className="media-image"
              href="/precursor/menu-4.png"
              target="_blank"
            >
              <img src="/precursor/menu-4.png" alt="" />
              <div className="media-caption">Menu Version 4</div>
            </a>
          </div>
          <p>
            The earliest version of the main menu was simply a list of users in
            the document. We needed a chat feature so the list of users and the
            chat squeezed into a single sidebar. Then, I added a new menu that
            slid over the top of the canvas.
          </p>
          <p className="space">
            The final version of the menu simply pushes the canvas over. Once I
            realized that the menu was a distraction from your ideas, I changed
            the background color and kept the canvas in-view so you never get
            too far away from your idea.
          </p>

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
          <p>
            Precursor was one of the first design tools that was built with
            real-time, multiplayer collaboration. With multiplayer, every user
            has a shared sense of place. Users can manipulate each other’s
            designs in real-time, but they could also see each other’s cursors
            while changes were being made, and even chat via voice or text.
          </p>
          <p className="space">
            For most of our users this was their first time experiencing a
            design process like that, and it really added to their sense of
            teamwork, especially those working remotely.
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
            simplicity is due to its lack of distractions; you can’t fill in
            shapes, you can’t add color or images. I make wireframes to get
            ideas out of my head as quickly as possible. Other wireframing tools
            have too many options that persuade me to spend more time playing
            with their tool than solving the problem I’m working on.
          </p>
          <p>
            For Precursor, I limited the tools to the necessities. Rather than
            house them in a normal toolbar, away from your attention, I wanted
            them to be always within reach and easy to swap. That’s why I came
            up with the radial menu.
          </p>
          <p className="space">
            I liked the concept of radial menus after seeing them in video
            games, but while radial menus were somewhat common in video games
            back then, they were non-existent in the productivity/design space.
            Since Precursor’s launch, radial menus have become a popular design
            editor feature, making it’s way into other prototyping tools like
            Figma’s FigJam.
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
          <p>
            Precursor used a lot of cutting edge technology at the time of its
            launch including React, WebRTC, and immutable database structures.
            This led to some unique product features like Replay.
          </p>
          <p>
            Every action you make in Precursor is stored in our database as a
            part of an immutable data structure. This means we have data on
            which actions happened in which order, for every event, which gave
            us the ability to replay wireframes being built by users
            automatically.
          </p>
          <p className="space">
            We used this feature to create a time-lapse mode, that any user can
            activate by typing “/replay” in their chat menu. This is a feature
            that continues to provide value to users even today. It enabled me
            to build the hover animations on my portfolio’s homepage.
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
              <div className="breakdown-subtitle">+200k</div>
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
              <div className="breakdown-title">Innovation</div>
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
                Precursor was listed as one of Clojure’s official{' '}
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
