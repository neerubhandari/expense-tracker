import { Button } from "@/components/ui/button";
import Banner from "../../components/Banner";

const LandingPage = () => {
  return (
    <div className="h-screen">
      <Button>Click me</Button>
      <Banner
        title="Welcome to Our Website"
        imageUrl="https://via.placeholder.com/1200x400"
        altText="Placeholder Banner"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default LandingPage;
