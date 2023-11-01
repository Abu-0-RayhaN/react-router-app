import { services } from "../constant";
const Home = () => {
  return (
    <>
      <div className="flex mx-20 flex-row gap-10 ">
        {services.map((service) => (
          <div className="card w-96 glass" key={service.id}>
            <figure>
              <img src={service.imgURL} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.label}</h2>
              <p>Wanna be Passionate about Art?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
