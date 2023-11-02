import { useParams, Link, useNavigate } from "react-router-dom";
import { services } from "../constant";
const Card_details = () => {
  const { id } = useParams();
  const serviceId = parseInt(id, 10);
  const history = useNavigate();
  // Find the service object in the services array based on the id
  const selectedService = services.find((service) => service.id === serviceId);

  // Check if the service with the given id exists
  if (!selectedService) {
    return <div className="text-red-500">Service not found.</div>;
  }

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
      <button onClick={() => history(-1)} className="p-5 rounded-lg bg-white">
        Go Back
      </button>
      <img
        src={selectedService.imgURL}
        alt={selectedService.label}
        className="w-[40%] h-[35%] mb-4 rounded-lg"
      />
      <h1 className="text-3xl font-semibold mb-2">{selectedService.label}</h1>
      <p className="text-gray-700 mb-4">{selectedService.subtext}</p>
      <Link to="checkout">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default Card_details;
