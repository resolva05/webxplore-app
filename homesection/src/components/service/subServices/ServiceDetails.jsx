import { useParams } from 'react-router-dom';
import { data } from './OtherServicesData.jsx';
import './ServiceDetails.css'
const ServiceDetails = () => {
  const { servicekey } = useParams(); // Retrieve the service key from the URL params
  const serviceData = data[servicekey];
//   const post = data.find((post) => post.id === parseInt(dataId));
  if (!serviceData) {
    return <p>Service not found!</p>;
  }

  return (
    <div className="service-details-container">
      <h2>{servicekey.replace(/_/g, ' ')}</h2>
      <div className="service-details">
        {serviceData.map((item, index) => (
          <div key={index} className="service-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
