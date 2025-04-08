export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Air Mineral 600ml",
    price: 3500,
    image: "aqua.jpeg",
  },
  {
    id: 2,
    name: "Mie Goreng Instan",
    price: 2500,
    image: "indomie.png",
  },
  {
    id: 3,
    name: "Snack Rasa Keju",
    price: 4500,
    image: "snack_keju.jpg",
  },
];
