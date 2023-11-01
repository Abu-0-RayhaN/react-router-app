import { useParams } from "react-router-dom";
import { services } from "../constant";
const Card_details = (id = 2) => {
  const singleService = services.filter((service) => service.id === id);
  //   const params = useParams()
  return (
    <>
      <div className="flex">
        <div>
          <h3>Hello from details cards</h3>
          <img src={singleService.imgURL} alt="" />
          <h2>{services.label}</h2>
        </div>
      </div>
    </>
  );
};

export default Card_details;
