import "./Bookings.css";

function Bookings() {
  return (
    <div className="bookings">
      <div className="bookings-container">
        <div className="bookings-overlay" />
        <h3>Bookings</h3>
        <p>
          For expression of interest, click the link below:
          <br />
          <a
            href="https://kingsforms.online/kgpenquiryform"
            target="_blank"
            rel="noreferrer"
          >
            https://kingsforms.online/kgpenquiryform
          </a>
        </p>
        <p>
          For inspection bookings, click the link below:
          <br />
          <a
            href="https://kingsforms.online/kgpinspectionrequest"
            target="_blank"
            rel="noreferrer"
          >
            https://kingsforms.online/kgpinspectionrequest
          </a>
        </p>
      </div>
    </div>
  );
}

export default Bookings;
