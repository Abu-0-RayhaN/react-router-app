import { useParams } from "react-router-dom";
import { services } from "../constant";

const Card_details = () => {
  const { id } = useParams();
  const serviceId = parseInt(id, 10);

  // Find the service object in the services array based on the id
  const selectedService = services.find((service) => service.id === serviceId);

  // Check if the service with the given id exists
  if (!selectedService) {
    return <div>Service not found.</div>;
  }

  return (
    <div className="card-details">
      <img src={selectedService.imgURL} alt={selectedService.label} />
      <h1>{selectedService.label}</h1>
      <p>{selectedService.subtext}</p>
    </div>
  );
};

export default Card_details;
