import Container from './Container';
import Utn from './Utn';
import Lenguaje from './Lenguaje';
import GoogleMaps from './GoogleMaps';
import AboutMe from './AboutMe';
import Birthday from './Birthday';
import SpotifyPlaylist from './SpotifyPlaylist'
import GithubLogoComponent from './GithubLogoComponent ';

const About = () => {
  return (
    <div className="bg-neutral-900 py-8">
      <Container>
        <div className=''>
          <AboutMe />
          <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-3">
            <Utn />
            <Lenguaje />
            <GoogleMaps />
            <SpotifyPlaylist />
            <GithubLogoComponent />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
