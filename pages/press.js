import Link from 'next/link';
import { Header, Footer } from '../components/nav';
import moment from 'moment';
import press from '../data/press.json';

const pressTime = (string) => moment(string);

const Press = () => {
  return (
    <>
      <div className="main">
        <div className="hero dark">
          <Header />

          <div className="press-content content">
            <h1>Press</h1>
            <div className="press-items">
              {press.map((item, i) => [
                <h5 className="nth" key={item.section}>
                  {item.section}
                </h5>,
                item.articles
                  .sort((a, b) => a.date - b.date)
                  .map((item, i) => (
                    <div className="press-item" key={item.title + i}>
                      <span className="press-item-date">
                        {pressTime(item.date).format('DD MMM YYYY')}
                      </span>
                      <span> &raquo; </span>
                      <Link
                        className="link press-item-title"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </Link>
                    </div>
                  )),
              ])}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Press;
