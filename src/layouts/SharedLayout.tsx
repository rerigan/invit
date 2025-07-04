import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

const SharedLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default SharedLayout;