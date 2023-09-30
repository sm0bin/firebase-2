import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleLogIn = () => {
    navigate("/login");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary mr-5" onClick={handleSignUp}>
            Sign Up
          </button>
          <button className="btn btn-outline btn-primary" onClick={handleLogIn}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
