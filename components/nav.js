import Icon from '../components/icon';
import Link from 'next/link';

export const Header = () => (
  <div className="header">
    <div className="nav">
      <div className="nav-items content">
        <Link className="nav-item nav-brand" href="/">
          <Icon dkme />
        </Link>
        <Link className="nav-item" href="/about">
          About
        </Link>
        <Link className="nav-item" href="/press">
          Press
        </Link>
        <Link className="nav-item" href="/dannyking.pdf">
          Resume
        </Link>
        <Link className="nav-item" href="mailto:contact@dannyking.me">
          Contact
        </Link>
      </div>
    </div>
  </div>
);

export const Footer = () => (
  <div className="footer">
    <div className="nav">
      <div className="nav-items content">
        <Link
          className="nav-item nav-brand"
          href="https://precursorapp.com/blog"
        >
          {/* <Icon dkme /> */}
          Writings
        </Link>
        <Link
          className="nav-item"
          href="https://www.linkedin.com/in/dannykingme/"
          target="_blank"
        >
          <Icon linkedin />
        </Link>
        <Link
          className="nav-item"
          href="https://dribbble.com/dannykingme"
          target="_blank"
        >
          <Icon dribbble />
        </Link>
        <Link
          className="nav-item"
          href="https://github.com/dannykingme"
          target="_blank"
        >
          <Icon github />
        </Link>
        <Link
          className="nav-item"
          href="https://twitter.com/dannykingme"
          target="_blank"
        >
          <Icon twitter />
        </Link>
      </div>
    </div>
  </div>
);
