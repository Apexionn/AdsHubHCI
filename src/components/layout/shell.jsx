import { Outlet } from "react-router-dom";
import Navbar from "./parts/nav";
import Footer from "./parts/footer";

export default function Shell() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
