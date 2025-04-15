import Sidebar from "../components/Sidebar";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {


  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden barlow-font">
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;