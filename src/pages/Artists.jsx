
import fairuzImg from "../assets/images/fairuz4.jpeg";
import ummImg from "../assets/images/umm2.jpeg";
import abdImg from "../assets/images/abd1.jpeg";

function Artists(){
    return (
        <section className="artists-sec">
            
            <h1>The Legendary Arabic Artists of The 20th Century</h1>

            <div className="artists-box">

                <div className="artist-card">
                <img src={fairuzImg} alt="Fairuz"/>
                <h2>فيروز - Fairuz</h2>
                <p>The voice of Lebanon and one of the most iconic singers in the Arab world.</p>
                <div className="artist-details">
                        <p><strong>Born:</strong> November 21, 1935 (age 89)</p>
                        <p><strong>Origin:</strong> Beirut, Lebanon</p>
                        <p><strong>Famous Songs:</strong> "Habaitak Ta Neseet Al Nome", "Kifak Inta", "Sa'alouni El Nas"</p>
                        <p><strong>Style:</strong> Lebanese folk, romantic ballads, patriotic songs</p>
                        <p><strong>Legacy:</strong> Over 800 songs, known for her pure voice and emotional depth</p>
                    </div>
                </div>

                
                <div className="artist-card">
                <img src={ummImg} alt="UmmKalthum"/>
                <h2>ام كلثوم - UmmKalthum</h2>
                <p>Known as the star of the East, her music shaped generations.</p>
                <div className="artist-details">
                        <p><strong>Born:</strong> December 31, 1904</p>
                        <p><strong>Died:</strong> February 3, 1975 (age 70)</p>
                        <p><strong>Origin:</strong> Tamay, Egypt</p>
                        <p><strong>Famous Songs:</strong> "Alf Leila Wa Leila", "Enta Omri", "Al Atlal"</p>
                        <p><strong>Style:</strong> Classical Arabic music, emotional powerful performances</p>
                        <p><strong>Legacy:</strong> Her songs average 45 minutes, iconic voice of Egypt</p>
                    </div>
                </div>

                <div className="artist-card">
                <img src={abdImg} alt="Abdel Halim Hafez"/>
                <h2>عبد الحليم - Abdel Halim Hafez</h2>
                <p>A legendary romantic singer famous for emotional classics.</p>
                <div className="artist-details">
                        <p><strong>Born:</strong> June 21, 1929</p>
                        <p><strong>Died:</strong> March 30, 1977 (age 47)</p>
                        <p><strong>Origin:</strong> El Haway, Egypt</p>
                        <p><strong>Famous Songs:</strong> "Ahwak", "Zay El Hawa", "Gana El Hawa"</p>
                        <p><strong>Style:</strong> Romantic ballads, emotional and passionate</p>
                        <p><strong>Legacy:</strong> Known as "The Nightingale", romantic icon of Arab cinema</p>
                    </div>
                </div>


            </div>
</section>
    );   
}
export default Artists;