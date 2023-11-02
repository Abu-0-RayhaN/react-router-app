import { useNavigate, useParams } from "react-router-dom";
const Checkout = () => {
  const { id } = useParams();
  const history = useNavigate();

  return (
    <div>
      <h2>Checkout Page for ID: {id}</h2>
      <button onClick={() => history(-1)}>Go Back</button>
      {/* Rest of your Checkout component */}
    </div>
  );
};

export default Checkout;
