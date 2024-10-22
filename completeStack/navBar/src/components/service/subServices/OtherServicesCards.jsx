import { NavLink } from "react-router-dom";
import { data } from './OtherServicesData.jsx';
import { useEffect } from "react";

const OtherServicesCards = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  const services = [
    { name: "SEO", key: "SEO" },
    { name: "Payment Gateway Integration", key: "PaymentGatewayIntegration" },
    { name: "AI Integration Services", key: "AI_Integration_Services" },
    { name: "Social Media Marketing Services", key: "SocialMediaMarketing" }
  ];

  return (
    <div className="project-cards-container">
      {services.map((service) => (
        <div className="project-card" key={service.key}>
          <h3 className="projecttitle">{service.name}</h3>
          <p className="projectoverview">{data[service.key][0].description}</p>
          <NavLink to={`/services/${service.key}`}>
            <button className="read-more-button">Read More</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default OtherServicesCards;
