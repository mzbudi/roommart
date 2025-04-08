import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import TutorialPage from "./pages/TutorialPage";
import { useTutorialStore } from "./store/useTutorialStore";
import { useEffect } from "react";

const App = () => {
  const { hasSeenTutorial } = useTutorialStore();
  const navigate = useNavigate();
  const location = useLocation();
  const hideNavbar = location.pathname === "/tutorial";

  useEffect(() => {
    if (!hasSeenTutorial) {
      navigate("/tutorial");
    }
  }, [hasSeenTutorial, navigate]);

  return (
    <>
      {/* Navbar atau tombol ke keranjang */}
      {!hideNavbar && <Navbar />}

      {/* Main content */}
      <main className="pt-20">
        <Routes>
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>

      {/* Toaster */}
      <Toaster position="top-left" reverseOrder={false} />
    </>
  );
};

export default App;
