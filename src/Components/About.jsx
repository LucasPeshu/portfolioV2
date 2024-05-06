import Container from './Container';
import Utn from './Utn';
import GoogleMaps from './GoogleMaps';
import AboutMe from './AboutMe';
import SpotifyPlaylist from './SpotifyPlaylist'
import GithubLogoComponent from './GithubLogoComponent ';
import Projects from './Projects';
import Tech from './Tech';
import Profile from './Profile';

const About = () => {
  return (
    <div className="bg-neutral-900 py-8">
      <Container>
        <div className=''>
          <AboutMe />
          <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-3">
            <Profile />
            <GoogleMaps />
            <Tech />
            <SpotifyPlaylist />
            <GithubLogoComponent />
            <Projects />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
