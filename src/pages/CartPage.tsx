import { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import { CartItem } from "../store/useCartStore";
import Select from "react-select";
import waLogo from "../assets/img/WA_Logo.png";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    // clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const [roomNumber, setRoomNumber] = useState("");
  const [tower, setTower] = useState("");
  const [touched, setTouched] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentError, setPaymentError] = useState(false);
  const [note, setNote] = useState("");

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const towerOptions = [
    { value: "WEST01", label: "WEST01" },
    { value: "WEST02", label: "WEST02" },
    { value: "WEST03", label: "WEST03" },
    { value: "WEST04", label: "WEST04" },
    { value: "WEST05", label: "WEST05" },
    { value: "WEST06", label: "WEST06" },
  ];

  const generateWhatsAppLink = (
    cart: CartItem[],
    total: number,
    roomNumber: string,
    tower: string
  ) => {
    const phoneNumber = "6285156593494"; // Ganti dengan nomor admin (awali dengan kode negara, contoh: 62 untuk Indonesia)
    const message = cart
      .map(
        (item) =>
          `- ${item.name} x ${item.quantity} = Rp ${(
            item.price * item.quantity
          ).toLocaleString()}`
      )
      .join("\n");

    const fullMessage = `Halo Admin, saya ingin memesan:\n\n${message}\n\nAlamat Kamar: ${tower} ${roomNumber} \nTotal Belanja: Rp ${total.toLocaleString()}\n\nPembayaran: ${paymentMethod} ${
      note ? `\nCatatan: ${note}` : ""
    }`;
    const encodedMessage = encodeURIComponent(fullMessage);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const cartValidation = () => {
    if (!tower || !roomNumber) setTouched(true);
    if (!paymentMethod) setPaymentError(true);
    return;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Keranjang</h1>
      {cart.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="mb-4 flex items-center justify-between bg-white p-4 rounded shadow"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Rp {item.price.toLocaleString()} / pcs
                  </p>
                  <p className="mt-1 text-sm">
                    Total: Rp {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 px-2 py-1 border border-red-500 text-red-500 text-xs rounded hover:bg-red-500 hover:text-white transition"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Input Nomor Kamar */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {/* Dropdown Tower */}
            <div>
              <label className="block font-medium mb-1">Tower</label>
              <Select
                options={towerOptions}
                value={towerOptions.find((opt) => opt.value === tower)}
                onChange={(selected) => setTower(selected?.value || "")}
                placeholder="Pilih Tower"
                className="w-full"
                menuPlacement="top" // 🔥 bikin dropdown ke atas
              />
              {touched && !tower && (
                <p className="text-red-500 text-sm mt-1">
                  Nama Tower wajib dipilih.
                </p>
              )}
            </div>

            {/* Input Nomor Kamar */}
            <div>
              <label className="block font-medium mb-1">Nomor Kamar</label>
              <input
                type="text"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                onBlur={() => setTouched(true)}
                className="w-full border border-gray-300 p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Contoh: 101"
                required
              />
              {touched && !roomNumber && (
                <p className="text-red-500 text-sm mt-1">
                  Nomor kamar wajib diisi.
                </p>
              )}
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-4">
            <label className="block font-medium mb-2">Metode Pembayaran</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="QRIS"
                  checked={paymentMethod === "QRIS"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                QRIS
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                COD
              </label>
            </div>
            {!paymentMethod && paymentError && (
              <p className="text-red-500 text-sm mt-1">
                Silakan pilih metode pembayaran.
              </p>
            )}
            {paymentMethod === "COD" && (
              <div className="mt-4">
                <label className="block font-medium mb-1">
                  Catatan untuk Admin (Pecahan Uang)
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full border p-2 rounded"
                  rows={2}
                  placeholder="Contoh: Saya bayar pakai Rp100.000"
                />
              </div>
            )}
          </div>

          {/* Total dan WA Button */}
          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">
              Total Belanja: Rp {totalPrice.toLocaleString()}
            </p>
            {cart.length > 0 && (
              <button
                onClick={() => {
                  cartValidation();

                  if (!tower || !paymentMethod || !roomNumber) return;

                  const waLink = generateWhatsAppLink(
                    cart,
                    totalPrice,
                    roomNumber,
                    tower
                  );
                  window.open(waLink, "_blank");
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 border border-green-600 bg-white text-black rounded hover:bg-green-50 transition w-full"
              >
                <img src={waLogo} alt="Chat WhatsApp" className="w-5 h-5" />
                <span className="text-sm font-medium">Pesan via WhatsApp</span>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
