import Image from 'next/image';
import React from 'react';
import styles from './header.module.css';

/**=============== Header ===============*/
export default function Header() {
  const Title = '동규라미 프로필';

  return (
    <header className={styles.header} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <Image
            src="/assets/img/favicon-32x32.png"
            alt="logo"
            className="nav__logo-img"
            width={24}
            height={24}
          />
          {Title}
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#career" className="nav__link">
                Career
              </a>
            </li>
            <li className="nav__item">
              <a href="#tech" className="nav__link">
                Tech
              </a>
            </li>
            <li className="nav__item">
              <a href="#activity" className="nav__link">
                Activity
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
          <Image
            src="/assets/img/nav-light.png"
            alt="logo"
            className="nav__logo-img"
            width="32"
            height="32"
          />
        </div>

        <div className="nav__btns">
          <i className="bx bx-moon change-theme" id="theme-button"></i>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
