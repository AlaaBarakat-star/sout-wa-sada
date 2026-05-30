function Home() {
  return (
    <div>
      <section className="page">
        <div className="page-text">
          <h1>صوت وصدى</h1>
          <p>
            Discover the beauty of Arabic music,
            legendary singers, timeless poetry,
            and emotional melodies that live forever.
          </p>
        </div>
      </section>

      <section className="home-sec">
        <h2>Featured Legends</h2>
        <div className="home-cards">
          <div className="home-card">
            <h3>Fairuz</h3>
            <p>
              A timeless Lebanese voice filled with nostalgia and elegance.
            </p>
          </div>
          <div className="home-card">
            <h3>Umm Kulthum</h3>
            <p>
              The legendary Star of the East and icon of Arabic music.
            </p>
          </div>
          <div className="home-card">
            <h3>Abdel Halim Hafez</h3>
            <p>
              Romantic classics that shaped generations.
            </p>
          </div>
        </div>
      </section>

      <section className="home-sec">
        <h2>Match your mood with music</h2>
        <div className="home-cards">
          <div className="home-card">
            <h3>Nostalgic</h3>
            <p>
              Travel through timeless Arabic melodies and memories.
            </p>
          </div>
          <div className="home-card">
            <h3>Romantic</h3>
            <p>
              Emotional songs filled with passion and poetry.
            </p>
          </div>
          <div className="home-card">
            <h3>Happy</h3>
            <p>
              Bright melodies and uplifting rhythms for joyful moments.
            </p>
          </div>
          <div className="home-card">
            <h3>Sad</h3>
            <p>
              Emotional melodies that soothes the sorrowful souls.
            </p>
          </div>
        </div>
      </section>

      <section className="home-sec">
        <h2>Arabic Poetry Heritage</h2>
        <div className="home-cards">
          <div className="home-card">
            <p>
              "إذا الشعب يومًا أراد الحياة
              فلا بد أن يستجيب القدر"
            </p>
          </div>

          <div className="home-card">
            <p>
              "أحبك جدًا
              وأعرف أن الطريق إلى المستحيل طويل"
            </p>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Home;