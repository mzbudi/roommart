import { useCartStore } from "../store/useCartStore";
import { CartItem } from "../store/useCartStore";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    // clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const generateWhatsAppLink = (cart: CartItem[], total: number) => {
    const phoneNumber = "6285156593494"; // Ganti dengan nomor admin (awali dengan kode negara, contoh: 62 untuk Indonesia)
    const message = cart
      .map(
        (item) =>
          `- ${item.name} x ${item.quantity} = Rp ${(
            item.price * item.quantity
          ).toLocaleString()}`
      )
      .join("\n");

    const fullMessage = `Halo Admin, saya ingin memesan:\n\n${message}\n\nTotal: Rp ${total.toLocaleString()}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
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
                    className="ml-4 text-red-500 hover:underline text-sm"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">
              Total Belanja: Rp {totalPrice.toLocaleString()}
            </p>
            {cart.length > 0 && (
              <a
                href={generateWhatsAppLink(cart, totalPrice)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Pesan via WhatsApp
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
