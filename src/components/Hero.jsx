import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-card">
        <h1 className="main-text">
          Luis Emilio Arce Ruvalcaba
          <span className='secondary-text'>
            Software Engineer
          </span>
        </h1>   

        <p className='description-text'>
          Software engineering student focused on building interactive projects, from modern web applications with React to exploring game development concepts. I enjoy solving problems through code and working across different areas like C++, Python, and networking, combining creativity with technology to bring ideas to life.
        </p>
      </div>
    </section>
  );
};

export default Hero;