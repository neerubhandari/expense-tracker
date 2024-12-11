import Loader from "@/components/loader";
import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";
import LandingPage from "@/pages/LandingPage";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("@/pages/dashboard"));
export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Suspense>
  );
}
