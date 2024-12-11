import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import WhiteLogo from "../../assets/newlogo.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const handleLogin = () => {
    navigate("/sign-in");
  };
  return (
    <header className=" p-3 cursor-pointer mt-[-40px]">
      <div className="container mx-auto flex justify-between items-center">
        <img src={WhiteLogo} alt="ExpTrackr logo" className="w-48 " />
        <nav>
          <ul className="flex space-x-6">
            <li>
              <div
                className=" text-white font-sans"
                onClick={() => navigate("/about")}
              >
                Features
              </div>
            </li>
            <li>
              <div
                className=" text-white font-sans"
                onClick={() => navigate("/pricing")}
              >
                Pricing
              </div>
            </li>
            <li>
              <div
                className=" text-white font-sans"
                onClick={() => navigate("/faqs")}
              >
                FAQs
              </div>
            </li>
          </ul>
        </nav>
        <div className="flex gap-3 cursor-pointer">
          <Button label="Sign Up" variant="outline" onClick={handleSignUp} />
          <Button label="Login" variant="primary" onClick={handleLogin} />
        </div>
      </div>
    </header>
  );
};

export default Header;
