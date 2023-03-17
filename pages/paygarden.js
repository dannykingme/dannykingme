import { useState, useRef } from 'react';

import Link from 'next/link';
import Icon from '../components/icon';
import { Footer, Header } from '../components/nav';
import Docs from '../components/docs';

const Paygarden = () => {
  return (
    <div className="main">
      <div className="hero small black intro">
        <div className="hero-background">
          <video src="/paygarden/broll-1.mp4" muted autoPlay loop playsInline />
          <div className="hero-background-shade"></div>
        </div>
        <Header />
        <div className="hero-content content">
          <div className="breakdown">
            <div className="breakdown-cell full">
              <div className="breakdown-title">Company</div>
              <div className="breakdown-subtitle">PayGarden</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Projects</div>
              <div className="breakdown-subtitle">Payflow 2.0</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Summary</div>
              <div className="breakdown-info">
                I redesigned PayGarden's gift card payflow to make it more
                trustworthy and perform well on mobile devices.
              </div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Role</div>
              <div className="breakdown-info">Head of Product</div>
            </div>
          </div>
        </div>
      </div>
      <div className="article">
        <div className="content">
          <h1>Introduction</h1>

          <h4>The billion dollar gift card garden</h4>
          <p>
            There’s over $45 billion in unused retail gift cards in the world.
            PayGarden enables companies to accept gift cards from retail stores
            like Starbucks, Target, and Walmart as payment for products and
            services. In 2017 they approached me to help them improve their
            payflow product, redesign their visual language, and break into the
            gaming industry with a new product offering.
          </p>
          <div className="media space">
            <div className="media-frame">
              <div className="media-frame-inner">
                <img src="/paygarden/mobile-start.png" alt="" />
              </div>
              <div className="media-frame-outer">
                <img src="/paygarden/iphone.png" alt="" />
              </div>
            </div>
            <div className="media-frame">
              <div className="media-frame-inner">
                <video
                  src="/paygarden/mobile-details.mov"
                  muted
                  autoPlay
                  loop
                  playsInline
                ></video>
              </div>
              <div className="media-frame-outer">
                <img src="/paygarden/iphone.png" alt="" />
              </div>
            </div>
            <div className="media-caption">Payflow Overview</div>
          </div>
        </div>
        <div className="content-highlight">
          <div className="content">
            <h1>Challenge</h1>

            <h4>How to earn trust</h4>
            <div className="media two">
              <div className="media-image">
                <img src="/paygarden/payflow-old-1.png" alt="" />
                <div className="media-caption">Old Start Page</div>
              </div>
              <div className="media-image">
                <img src="/paygarden/payflow-old-2.png" alt="" />
                <div className="media-caption">Old Gift Card Details</div>
              </div>
            </div>
            <p>
              PayGarden acts as an alternative payment method for partners, so
              the opportunity to build user trust is inherently limited. The old
              payflow’s visual aesthetic was becoming increasingly dated, it
              didn’t adapt well to mobile, and our research pointed to the fact
              that our users didn’t trust the product handling their gift card
              balance.
            </p>
          </div>
        </div>

        <div className="content">
          <h1>Process</h1>

          <h4>Userflow wireframes</h4>
          <Docs
            docs={[
              [
                { id: 17592210700934, name: 'End-to-end Userflow' },
                { id: 17592210700296, name: 'Multi-card Userflow' },
              ],
              [
                { id: 17592210701663, name: 'Card Details' },
                { id: 17592210701590, name: 'Example Trades' },
              ],
            ]}
          />
          <p>
            We had a lot of analytics telling us most of our users were on their
            phones, but there was no mobile version for the payflow. We had a
            lot of data on what gift card brands perform better with which
            partners, but no way to promote them.
          </p>
          <p className="space">
            My first step was to start experimenting with how we could promote
            the right gift cards with the right partners and make sure every
            feature, old and new, performed well on mobile.
          </p>

          <h1>Solutions</h1>

          <h4>Building trust</h4>
          <div className="media">
            <div className="media-video">
              <video
                src="/paygarden/payflow.mp4"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
            <div className="media-caption">PayGarden Payflow</div>
          </div>
          <p className="space">
            My strategy for building trust with our users started by leveraging
            the brand recognition they already had for popular retail stores. We
            curated a list of the six highest-performing gift card brands for
            each partner and put them right in front of the user. This gave us
            an opportunity to optimize our user experience based on user
            expectation and regional constraints.
          </p>

          <h4>Improving search</h4>
          <div className="media">
            <div className="media-video">
              <video
                src="/paygarden/search.mp4"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
            <div className="media-caption">Search</div>
          </div>
          <p className="space">
            While most users were able to complete their transaction using one
            of the six gift card brands we promoted, the others needed a simple
            and efficient way to find the brand they needed. This led to a new
            search feature that empowers users to find the retail brand matching
            their gift card 10x faster than the old payflow.
          </p>

          <h4>Attention to details</h4>
          <div className="media">
            <div className="media-video">
              <video
                src="/paygarden/details.mp4"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
            <div className="media-caption">Gift Card Details</div>
          </div>
          <p>
            The retail branding experience extends itself to the second page of
            the payflow where users enter details from their gift card. I
            created adaptive inputs and responsive animations to give users
            feedback about what’s coming next, and I created illustrations to
            show users where to find their gift card numbers.
          </p>
          <p className="space">
            The level of polish and our attention to detail further enhances the
            amount of trust we establish at the beginning of the transaction.
          </p>

          <h4>Adapting to mobile</h4>
          <div className="media">
            <div className="media-frame">
              <div className="media-frame-inner">
                <video
                  src="/paygarden/mobile-start.mov"
                  muted
                  autoPlay
                  loop
                  playsInline
                ></video>
              </div>
              <div className="media-frame-outer">
                <img src="/paygarden/iphone.png" alt="" />
              </div>
            </div>
            <div className="media-frame">
              <div className="media-frame-inner">
                <img src="/paygarden/mobile-details.png" alt="" />
              </div>
              <div className="media-frame-outer">
                <img src="/paygarden/iphone.png" alt="" />
              </div>
            </div>
            <div className="media-caption">Mobile Payflow</div>
          </div>
          <p>
            To solve PayGarden’s performance issues on mobile devices, I
            inverted our entire design process and designed every feature with a
            mobile-first approach. Instead of designing things on desktop and
            adjusting them to mobile, I designed them on mobile and adjusted
            them to desktop.
          </p>
        </div>
      </div>

      <div className="hero small black outro">
        <div className="hero-background">
          <video src="/paygarden/broll-2.mp4" muted autoPlay loop playsInline />
          <div className="hero-background-shade"></div>
        </div>
        <div className="hero-content content">
          <h1>Results</h1>
          <div className="breakdown">
            <div className="breakdown-cell">
              <div className="breakdown-title">Conversion rate</div>
              <div className="breakdown-subtitle">+10%</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Partner sign ups</div>
              <div className="breakdown-subtitle">+5.2%</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Annual Recurring Revenue</div>
              <div className="breakdown-subtitle">{'>'} $1.4 million</div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Pioneer</div>
              <div className="breakdown-info">
                PayGarden Payflow 2.0 marked the product's first major rewrite
                since its inception.
              </div>
            </div>
            <div className="breakdown-cell">
              <div className="breakdown-title">Customer Service</div>
              <div className="breakdown-info">
                Support tickets related to checkout decreased after launching
                Payflow 2.0.
              </div>
            </div>
          </div>
          <div className="hero-actions">
            <Link className="link" href="/">
              <Icon arrow-left /> Back home
            </Link>
            <Link className="link" href="/netlify">
              Next project: Netlify <Icon arrow-right />
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Paygarden;
