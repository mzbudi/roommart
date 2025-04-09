import { useNavigate } from "react-router-dom";
import { useTutorialStore } from "../store/useTutorialStore";

import { ShoppingCart, CheckCircle, ArrowRight } from "lucide-react"; // Icon dari lucide-react

const TutorialPage = () => {
  const navigate = useNavigate();
  const setHasSeenTutorial = useTutorialStore(
    (state) => state.setHasSeenTutorial
  );

  const handleFinish = () => {
    setHasSeenTutorial(true);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <ShoppingCart className="w-12 h-12 mx-auto text-blue-600" />
        <h1 className="text-2xl font-bold mt-2">Cara Memesan 🛍️</h1>
        <p className="text-gray-500 mt-1">
          Langkah mudah untuk belanja di RoomMart
        </p>
      </div>

      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start gap-3">
          <span className="text-blue-500 mt-1">🛒</span>
          <span>Pilih barang dari halaman utama</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-500 mt-1">➕</span>
          <span>Tekan tombol “Tambah ke Keranjang”</span>
        </li>
        <li className="flex items-start gap-3">
          <span className=" mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13l-1.5-7M7 13h10"
              />
            </svg>
          </span>
          <span>Buka halaman keranjang untuk lihat belanjaan</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-pink-500 mt-1">📱</span>
          <span>Tekan tombol “Pesan” untuk lanjut ke WhatsApp</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-pink-500 mt-1">🤵</span>
          <span>Admin Kami akan memproses dan mengantarkan pesanan anda</span>
        </li>
      </ul>

      <button
        onClick={handleFinish}
        className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        <CheckCircle className="w-5 h-5" />
        Mulai Belanja
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TutorialPage;
