import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    console.log("Sign Up clicked");
  };

  const handleLogin = () => {
    console.log("Login clicked");
  };
  return (
    <header className=" p-8 cursor-pointer">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl" onClick={() => navigate("/")}>
          Exp<span className="text-primary">Trackr</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <div
                className=" transition-colors font-sans"
                onClick={() => navigate("/about")}
              >
                Features
              </div>
            </li>
            <li>
              <div
                className=" transition-colors font-sans"
                onClick={() => navigate("/pricing")}
              >
                Pricing
              </div>
            </li>
            <li>
              <div
                className=" transition-colors font-sans"
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
