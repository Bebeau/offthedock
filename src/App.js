import React from 'react';

import './assets/css/style.css';
import logo from './assets/img/main-logo.svg';
import waves from './assets/video/waves.webm';
import poster from './assets/video/waves-poster.jpg';

import image1 from './assets/img/1.jpg';
import image2 from './assets/img/2.jpg';
import image3 from './assets/img/3.jpg';

import facebook from './assets/img/facebook.svg';
import instagram from './assets/img/instagram.svg';
import youtube from './assets/img/youtube.svg';
import envelope from './assets/img/envelope.svg';
import tripadvisor from './assets/img/tripadvisor.svg';

function App() {
  const contentSectionRef = React.useRef(null);
  const scrollDownSection = () => contentSectionRef.current.scrollIntoView();
  return (
    <>
      <section className="Hero">
        <video autoPlay loop muted playsInline poster={poster}>
          <source src={waves} type="video/webm" />
        </video>
        <div className="Brand" >
          <img src={logo} alt="Off The Dock Adventures" />
          <div className="links">
            <a href="https://www.facebook.com/OffTheDockAdventures" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com/OffTheDockAdventures" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCrfWvjSi62nwwqZZiEy0mqw/videos" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="Youtube" />
            </a>
            <a href="https://www.tripadvisor.com/Attraction_Review-g292020-d17737473-Reviews-Off_the_Dock_Customized_Ocean_Adventures-Utila_Bay_Islands.html" target="_blank" rel="noopener noreferrer">
              <img src={tripadvisor} alt="TripAdvisor" />
            </a>
            <a href="mailto:bookings@offthedockadventures.com">
              <img src={envelope} alt="Email" />
            </a>
          </div>
        </div>
        <div className='Scroll' onClick={()=>scrollDownSection()}></div>
      </section>
      <section className="Content" ref={contentSectionRef}>
        <div className="Images">
          <img src={image3} alt="" />
          <img src={image2} alt="" />
          <img src={image1} alt="" />
        </div>
        <div className="Copy">
          <p>
            Welcome to Off The Dock …we’re working behind the scenes to complete our website.
          </p>
          <p>
            We offer customized ocean and island excursions in the Bay Islands of Honduras. Our trips are focused on scuba diving and fishing, in a private setting ideal for small groups. 
          </p>
          <p>
            Our season in Honduras runs from December through April. Come as our guest, leave as our family!
          </p>
          <cite>Sabina + Captain Joe</cite>
        </div>
      </section>
      <section className="CTA">
        <div className="linksWrap">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScnVZlnbH0QW1X2xOMFmp0ufBqlqx1gouI2zQJw_2Zu9f7ZJA/viewform" target="BLANK">Inquire about our trips</a>
          <a href="https://www.youtube.com/channel/UCrfWvjSi62nwwqZZiEy0mqw/videos" target="BLANK">View videos from the islands</a>
          <a href="mailto:bookings@offthedockadventures.com">Get in touch for more info</a>
        </div>
        <div className="links">
          <a href="https://www.facebook.com/OffTheDockAdventures" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://instagram.com/OffTheDockAdventures" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCrfWvjSi62nwwqZZiEy0mqw/videos" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="Youtube" />
          </a>
          <a href="https://www.tripadvisor.com/Attraction_Review-g292020-d17737473-Reviews-Off_the_Dock_Customized_Ocean_Adventures-Utila_Bay_Islands.html" target="_blank" rel="noopener noreferrer">
            <img src={tripadvisor} alt="TripAdvisor" />
          </a>
          <a href="mailto:bookings@offthedockadventures.com">
            <img src={envelope} alt="Email" />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
