import { useState } from "react";

function Mood() {
  const songs = {

    happy: [
        "Fairuz - Nassam Alayna El Hawa",
        "Nancy Ajram - Ah W Noss",
        "Amr Diab - Tamally Ma'ak",
        "Hamza Namira - Dari Ya Alby",
        "Cheb Khaled - Aicha",
        "Marwan Khoury - Kol El Qasayed",
        "Tamer Hosny - Ya Bent El Eh",
        "Ragheb Alama - Alby Asheqha"
    ],

    sad: [
        "Umm Kulthum - Enta Omri",
        "Kadim Al Sahir - Zidini Ishqan",
        "Fairuz - Habbaytak Bessayf",
        "Wael Kfoury - Law Hobna Ghalta",
        "Sherine - Mashaer",
        "Melhem Zein - Enti Mshiti",
        "George Wassouf - Kalam El Nass",
        "Assala - Mab'ash Ana"
    ],

    romantic: [
        "Abdel Halim Hafez - Ahwak",
        "Majida El Roumi - Kalimat",
        "Amr Diab - Nour El Ain",
        "Elissa - Ajmal Ihsas",
        "Kazem Al Saher - Ana Wa Laila",
        "Fairuz - Bahebak Ya Lebnan",
        "Wael Jassar - Ghariba El Nas",
        "Nassif Zeytoun - Mesh Aam Tezbat Maai"
],

    nostalgic: [
        "Fairuz - Kan Enna Tahoun",
        "Wadih El Safi - Lubnan Ya Outeit",
        "Sabah Fakhri - Qaduka Al Mayyas",
        "Abdel Halim Hafez - Zay El Hawa",
        "Asmahan - Layali El Ons",
        "Farid Al Atrash - Rabeeh",
        "Mohammed Abdel Wahab - El Gondol",
        "Fayza Ahmed - Sit El Habayeb"
]

  };

  const [selectedSong, setSelectedSong] = useState("");

  function chooseMood(moodType){
    const moodSongs = songs[moodType];
    const randomSong = moodSongs[Math.floor(Math.random() * moodSongs.length)];
    setSelectedSong(randomSong);
  }

  return (
    <section className="mood-sec">
      <h1>Choose Your Mood</h1>
      <div className="mood-buttons">
        <button onClick={() => chooseMood("happy")}>
          Happy
        </button>
        <button onClick={() => chooseMood("sad")}>
          Sad
        </button>
        <button onClick={() => chooseMood("romantic")}>
          Romantic
        </button>
        <button onClick={() => chooseMood("nostalgic")}>
          Nostalgic
        </button>

      </div>

      <div className="song-result">
        <h2>{selectedSong}</h2>
      </div>

    </section>

  );
}

export default Mood;