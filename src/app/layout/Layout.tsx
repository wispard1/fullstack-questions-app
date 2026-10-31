import { Outlet } from "react-router-dom";
import "./Layout.css";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export function Layout() {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}