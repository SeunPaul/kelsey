import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.jpg";
import service5 from "../../assets/images/service5.png";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="services-overlay" />
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-wrapper">
          <div className="service-card service1">
            <div className="service-frame">
              <h4>Real Estate Development</h4>
              <img src={service1} alt="" />
            </div>
          </div>
          <div className="service-card service2">
            <div className="service-frame">
              <h4>Property Sales</h4>
              <img src={service2} alt="" />
            </div>
          </div>
          <div className="service-card service3">
            <div className="service-frame">
              <h4>Property Management</h4>
              <img src={service3} alt="" />
            </div>
          </div>
          <div className="service-card service4">
            <div className="service-frame">
              <h4>Real Estate Brokerage for purchases, sales or lettings</h4>
              <img src={service4} alt="" />
            </div>
          </div>
          <div className="service-card service5">
            <div className="service-frame">
              <h4>Investment Consultancy Services</h4>
              <img src={service5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
