import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {!isHome && (
          <button
            onClick={() => navigate("/")}
            className="text-blue-500 font-medium"
          >
            ← Back
          </button>
        )}

        <Link to="/">
          <h1 className="text-xl font-bold">RoomMart 🏪</h1>
        </Link>
      </div>

      <Link to="/cart" className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13l-1.5-7M7 13h10"
          />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
