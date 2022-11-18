import "./Brochure.css";
import bradford1 from "../../assets/images/bradford1.jpg";
import bradford2 from "../../assets/images/bradford2.jpg";
import cedarview1 from "../../assets/images/cedarview1.jpg";
import cedarview2 from "../../assets/images/cedarview2.jpg";
import arepo2 from "../../assets/images/arepo2.jpg";
import bulk1 from "../../assets/images/bulk1.jpg";
import abuja1 from "../../assets/images/abuja1.jpg";
import abuja2 from "../../assets/images/abuja2.jpg";
import ikeja1 from "../../assets/images/ikeja1.jpg";

function Brochure() {
  return (
    <div className="brochure">
      <div className="brochure-container">
        <h2>EXCITING INVESTMENT OPPORTUNITIES IN REAL ESTATE WITHIN ASEESE</h2>
        <div className="brochure-grid brochure1">
          <div className="brochure-grid-left">
            <h3>BRADFORD COURT BY RCCG NEW AUDITORIUM</h3>
            <p>
              Bradford Court is a residential estate development in a serene
              environment by RCCG New Auditorium. The property is suitable
              personal use and short let apartment.
            </p>
            <h4>Available model types:</h4>
            <ul>
              <li>Studio Apartments,</li>
              <li>One Bedroom Apartments and</li>
              <li>Two-Bedroom Terraced Duplexes.</li>
            </ul>
            <h4>Location</h4>
            <p>7 minutes' drive to Loveworld Crusade Ground.</p>
            <h4>Estate features</h4>
            <ul>
              <li>Dry Land</li>
              <li>Good and accessible road network</li>
              <li>Good drainage system</li>
              <li>Steady power supply</li>
              <li>24 hours security</li>
            </ul>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/kgpl-461fa.appspot.com/o/BRADFORD%20COURT%20BROCHURE.pdf?alt=media&token=9515c0a7-80c9-4074-9a12-495fcedb88dd"
              download
            >
              <button>Download Brochure</button>
            </a>
          </div>
          <div className="brochure-grid-right">
            <img src={bradford1} alt="" />
            <img src={bradford2} alt="" />
          </div>
        </div>
        <div className="brochure-grid brochure2">
          <div className="brochure-grid-left">
            <h3>CEDARVIEW ESTATE BY RCCG NEW AUDITORIUM, BOUN</h3>
            <p>
              Cedar View Estate is a fast-selling residential site and service
              estate sharing fence with RCCG New Auditorium
            </p>
            <h4>Location</h4>
            <p>7 minutes' drive to Loveworld Crusade Ground.</p>
            <h4>Estate features</h4>
            <ul>
              <li>Perimeter fencing,</li>
              <li>Good road network,</li>
              <li>Good drainage system</li>
              <li>Green areas and playgrounds</li>
              <li>24 hours security, and</li>
              <li>Steady power supply, </li>
            </ul>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/kgpl-461fa.appspot.com/o/CEDARVIEW%20BROCHURE.pdf?alt=media&token=2ba8a4bf-ff7f-4d7a-8480-ba2a67c48cb9"
              download
            >
              <button>Download Brochure</button>
            </a>
          </div>
          <div className="brochure-grid-right">
            <img src={cedarview1} alt="" />
            <img src={cedarview2} alt="" />
          </div>
        </div>
        <div className="brochure-grid brochure3">
          <div className="brochure-grid-left">
            <h3>BRADFORD ESTATE, AREPO</h3>
            <p>
              Bradford Estate, Arepo is an elite residential site and service
              estate located in the heart of Arepo Town, a well-developed area,
              just 15 minutes' drive from the Central Business District, Alausa
              Ikeja and 15 minutes' drive to Loveworld Crusade Ground, Aseese.
            </p>
            <h4>Estate features</h4>
            <ul>
              <li>Perimeter fencing,</li>
              <li>Good road network,</li>
              <li>24 hours security, and</li>
              <li>Steady power supply,</li>
              <li>Green areas and playgrounds</li>
            </ul>
          </div>
          <div className="brochure-grid-right">
            <img src={arepo2} alt="" />
          </div>
        </div>
        <div className="brochure-grid brochure4">
          <div className="brochure-grid-left">
            <h3>BULK LAND FOR SALE IN ASEESE</h3>
            <p>
              We have bulk land suitable for development of Apartments, Site and
              Service Estate or Residential Estate development starting from
              14,000 Sqm. Bulk lands for sale within Aseese environs include:
            </p>
            <ul>
              <li>
                14,345 Sqm parcel of Land at Maba Town, Aseese (5 minute from
                Loveworld Crusade Ground Aseese)
              </li>
              <li>
                21,456 Sqm of Land in Aseese (4 minutes' drive from Loveworld
                Crusade Ground Aseese)
              </li>
              <li>
                14,646 Sqm of Land in Oseese (10 minutes' drive from Loveworld
                Crusade Ground, Aseese)
              </li>
              <li>
                126,527 Sqm of land at Cedarview Estate Simawa (25 minutes from
                Loveworld Crusade Ground)
              </li>
              <li>
                29,505 Sqm of Land in Arepo (15 minutes' drive to Loveworld
                Crusade Ground, Aseese).
              </li>
            </ul>
          </div>
          <div className="brochure-grid-right">
            <img src={bulk1} alt="" />
          </div>
        </div>
        <h2>ESTATES IN OTHER LOCATIONS:</h2>
        <div className="brochure-grid brochure1">
          <div className="brochure-grid-left">
            <h3>BRADFORD ESTATE, ABUJA:</h3>
            <p>
              Bradford estate, Abuja is an elite estate located within Wumbai
              district F.C.T. Abuja comprising residential and commercial areas
              with amazing support facilities.
            </p>
            <h4>Housing Types:</h4>
            <ul>
              <li>Fully detached duplexes,</li>
              <li>Semi-detached duplexes,</li>
              <li>Terraced apartments, and</li>
              <li>3-bedroom apartments</li>
            </ul>
            <h4>Estate features</h4>
            <ul>
              <li>Good road network,</li>
              <li>Good drainage,</li>
              <li>Steady power distribution network,</li>
              <li>24-hour security,</li>
              <li>Full street lighting,</li>
              <li>Water supply system,</li>
              <li>Emergency services.</li>
            </ul>
            <p>
              The estate presents commercial, retail and leisure conveniences to
              the occupant.
            </p>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/kgpl-461fa.appspot.com/o/BRADFORD%20ESTATE%20ABUJA%20BROCHURE.pdf?alt=media&token=658f2042-3e20-42fd-b756-1a2bc364bceb"
              download
            >
              <button>Download Brochure</button>
            </a>
          </div>
          <div className="brochure-grid-right">
            <img src={abuja1} alt="" />
            <img src={abuja2} alt="" />
          </div>
        </div>
        <div className="brochure-grid brochure2">
          <div className="brochure-grid-left">
            <h3>KINGS' COURT, IKEJA:</h3>
            <p>
              Kings Court Phase 2, Ikeja is a mini luxury private residential
              estate comprising of 4 Bedroom Terraced Duplexes located at Esomo
              off Toyin Street, Ikeja Lagos. This location is about 10 minutes'
              drive to Ikeja Airport and 15 minutes' drive to Alausa,
              Secretariat.
            </p>
            <p>
              Kings Court Ikeja provides brand new Terraced Duplexes in a court
              with luxury auxiliary building as supporting facilities. Homes are
              built to high standards, and delivered as finished units for sale.
            </p>
            <h4>Estate features</h4>
            <ul>
              <li>Steady Electricity Supply</li>
              <li>Gated Estate</li>
              <li>Interlocked compounds</li>
              <li>Ample Parking Space</li>
              <li>24 Hours Security</li>
              <li>Good Water Supply System</li>
              <li>Good Drainage System</li>
              <li>Lawn/Children Play Area</li>
            </ul>
            <p>
              Kings' Court Ikeja is exclusively designed with facilities to
              enable you and your loved ones enjoy the perfect lifestyle in a
              Luxurious Family Home.
            </p>
          </div>
          <div className="brochure-grid-right">
            <img src={ikeja1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brochure;
