import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/logo.png";

const Logo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src={LogoImage} alt="ExpTrackr logo" className="w-48 mb-[-60px]" />
    </div>
  );
};

export default Logo;
