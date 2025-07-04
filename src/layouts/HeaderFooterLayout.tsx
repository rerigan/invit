
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div className="h-screen max-w-screen flex flex-col">
    
      <div className="mx-5 md:mx-20">
        <main className="main-content flex-1">
          <Outlet />
        </main>

      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
