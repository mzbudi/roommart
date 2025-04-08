import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* Navbar atau tombol ke keranjang */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
