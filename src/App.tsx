import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      {/* Navbar atau tombol ke keranjang */}
      <Navbar />

      {/* Main content */}
      <main className="pt-20">
        <Routes>
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
