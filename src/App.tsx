import { Outlet } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import { Toaster } from "sonner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
