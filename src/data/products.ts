export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Air Mineral 600ml",
    price: 3500,
    category: "Minuman",
    image: "aqua.jpeg",
  },
  {
    id: 2,
    name: "Mie Goreng Instan",
    price: 2500,
    category: "Makanan",
    image: "indomie.png",
  },
  {
    id: 3,
    name: "Snack Rasa Keju",
    price: 4500,
    category: "Lain - lain",
    image: "snack_keju.jpg",
  },
  {
    id: 4,
    name: "Good day Cappucino",
    price: 7000,
    category: "Minuman",
    image: "goodday.jpeg",
  },
  {
    id: 5,
    name: "Susu Uht Ultramilk",
    price: 4500,
    category: "Minuman",
    image: "susuuht.jpg",
  },
  {
    id: 6,
    name: "Pop Mie",
    price: 4500,
    category: "Makanan",
    image: "popmie.png",
  },
  
];
