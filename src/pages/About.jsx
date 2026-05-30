function About() {

  return (
    <section className="about-sec">

      <h1>About صوت وصدى</h1>
      <p className="about-intro">
        صوت وصدى is an interactive Arabic music and poetry platform
        that celebrates the beauty of classical Arabic art,
        legendary singers, and timeless poetry.
      </p>
      <div className="about-box">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To introduce users to the emotional depth,
            cultural richness, and artistic heritage
            of Arabic music and poetry.
          </p>
        </div>

        <div className="about-card">
          <h2>Features</h2>
          <p>
            Explore legendary artists, discover songs
            based on your mood, and take interactive
            quizzes to find your musical personality.
          </p>

        </div>


        <div className="about-card">
          <h2>Technologies Used</h2>
          <p>
            This project was built using ReactJS,
            React Router, CSS, and responsive design principles.
          </p>
        </div>

      </div>

    </section>

  );
}

export default About;