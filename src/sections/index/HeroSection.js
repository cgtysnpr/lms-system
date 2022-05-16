import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <section className="banner pt-162">
        <div className="container">
          <div className="banner_text">
            <h1>
              A Better Learning Future <br />
              Start Here!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Link to={"/login"} className="btn btn-blue">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
