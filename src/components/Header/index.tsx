import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
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
          <button className="px-6 py-2 border border-primary text-white rounded-lg hover:bg-primary  ">
            Sign up
          </button>
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-hover ">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
