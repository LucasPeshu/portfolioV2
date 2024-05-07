import Container from './Container';
import Utn from './Utn';
import GoogleMaps from './GoogleMaps';
import AboutMe from './AboutMe';
import GithubLogoComponent from './GithubLogoComponent ';
import Projects from './Projects';
import Tech from './Tech';
import Profile from './Profile';
import Spotify from './Spotify';
import Twitter from './Twitter';
const About = () => {
  return (
    <div className="bg-neutral-900 py-8">
      <Container>
        <div className=''>
          <AboutMe />
          <div className="grid grid-cols-2 gap-8 pt-8 lg:grid-cols-3">
            <Profile />
            <Tech />
            <Spotify />
            <Twitter />
            <GithubLogoComponent />
            <Projects/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
