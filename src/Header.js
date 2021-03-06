import React, { useState, useEffect } from 'react';
import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScrollDirection from './UseScrollDirection';
import styled, { css } from 'styled-components';
import GetAppIcon from '@material-ui/icons/GetApp';
import NavMenu from './NavMenu';

const NavBar = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100px;
  padding: 0px 50px;
  background-color: rgba(10, 25, 47, 0.85);

  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
      `};

    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(calc(70px * -1));
        box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
      `};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: #ccd6f6;
  counter-reset: item 0;
  z-index: 12;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 5px;
      position: relative;
      font-size: 13px;
      float: left;

      a {
        padding: 10px;

        &:before {
          margin-right: 5px;
          color: #64ffda;
          font-size: 12px;
          text-align: right;
        }
      }
    }
  }
`;

const StyledResumeButton = styled.a`
  background-color: transparent;
  border: 1px solid #eee;
  border-radius: 10px;
  color: #eee;
  font-size: 12px;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const social = [
  {
    name: 'mail',
    url: 'mailto: hello@tonychen.me',
    icon: 'fas envelope',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/tonychen47/',
    icon: 'fab linkedin',
  },
  {
    name: 'github',
    url: 'http://github.com/tonynchen',
    icon: 'fab github-square',
  },
];

export default function Header() {
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [arrIndex, setArrIndex] = useState(0);
  const [typingElement, setTypingElement] = useState(' ');

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var descriptionArr = ['Software Engineer', 'Researcher', 'Gamer'];

  const updateDisplayedInfo = () => {
    if (arrIndex === descriptionArr.length - 1) setArrIndex(0);
    else setArrIndex(arrIndex + 1);

    setTypingElement(
      <>
        <span>{descriptionArr[arrIndex]}</span>
        <Typing.Backspace count={descriptionArr[arrIndex].length + 1} delay={2000} />
      </>
    );
  };

  return (
    <>
      {/* Header */}
      <NavBar scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
        <Nav id='nav' name='nav'>
          <img style={{ height: '50%', padding: '1rem' }} src={'images/logo.png'} alt='logo'></img>
          <Links>
            <ol>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#experience'>Experience</a>
              </li>
              <li>
                <a href='#portfolio'>Projects</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
              <li>
                <StyledResumeButton
                  style={{ padding: '8px' }}
                  href='https://drive.google.com/file/d/14Nupb9SvA5LyGL-Xim8aMUYpDO2EsH5_/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <GetAppIcon></GetAppIcon>
                  <div style={{ marginLeft: '8px' }}>Resume</div>
                </StyledResumeButton>
              </li>
            </ol>
          </Links>
          <NavMenu />
        </Nav>
      </NavBar>
      <div id='home'>
        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>Hi, I'm Tony!</h1>
            <h3>
              <Typing onFinishedTyping={updateDisplayedInfo} loop>
                {typingElement}
              </Typing>
            </h3>
            <ul className='social'>
              {social.map(function (network) {
                return (
                  <li key={network.name}>
                    <a href={network.url} target='_blank' rel='noreferrer'>
                      <FontAwesomeIcon icon={[network.icon.split(' ')[0], network.icon.split(' ')[1]]} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <p className='scrolldown'>
          <a href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </div>
    </>
  );
}
