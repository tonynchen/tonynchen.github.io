import './App.css';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import WinningProject from './WinningProjects';
import Project from './Projects';
import Skill from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import { faUser, faAddressCard, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import backgroundJson from './background.json';
import { init } from 'emailjs-com';

function App() {
  const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;

  library.add(fab, faUser, faAddressCard, faEnvelope, faPhoneSquare);
  init('user_UJdsRqUdPt6gVajZYAFwN');

  return (
    <div className='App'>
      <Particles options={backgroundJson} style={{ zIndex: -1 }} />
      <StyledContent id='content'>
        <Header />
        <About />
        <Experience />
        <Skill />
        <WinningProject />
        <Project />
        <Contact />
        <Footer />
      </StyledContent>
    </div>
  );
}

export default App;
