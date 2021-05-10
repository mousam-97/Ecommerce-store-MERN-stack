import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "john123@Gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Chirstopher",
      email: "chris@Gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "Nike slim shirt",
      category: "shirts",
      image: "/images/shirt1.jpg",
      price: 120,
      countInStock: 20,
      brand: "Nike",
      rating: 4,
      numReviews: 10,
      description: "High quality product.",
    },
    {
      name: "Addidas slim shirt",
      category: "shirts",
      image: "/images/shirt2.jpg",
      price: 130,
      countInStock: 12,
      brand: "Addidas",
      rating: 3,
      numReviews: 8,
      description: "High Quality product.",
    },
    {
      name: "Puma Tshirt",
      category: "Tshirt",
      image: "/images/tshirt1.jpg",
      price: 80,
      countInStock: 0,
      brand: "Puma",
      rating: 4,
      numReviews: 10,
      description: "High quality Tshirt",
    },
    {
      name: "Apple MacBook Pro",
      category: "electronics",
      image: "/images/macbook_pro.jpg",
      price: 999,
      countInStock: 50,
      brand: "Apple",
      rating: 5,
      numReviews: 150,
      description:
        "Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance. Get more done with up to 20 hours of battery life, the longest ever in a Mac. 8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever",
    },
    {
      name: "Xbox One(1TB)",
      category: "electronics",
      image: "/images/xbox.jpg",
      price: 900,
      countInStock: 11,
      brand: "Microsoft",
      rating: 5,
      numReviews: 30,
      description:
        "The 1TB limited edition console encapsulates the urban decay and vibrant Tech of night city with glowing elements, bright panels, color shift effects, and textures",
    },
    {
      name: "Sony Headphone",
      category: "electronics",
      image: "/images/headphone.jpg",
      price: 400,
      countInStock: 20,
      brand: "Sony",
      rating: 4,
      numReviews: 25,
      description:
        "30mm dynamic driver unit for clear sound. High energy neodymium magnets deliver powerful sound. Slim, folding design for easy portability.",
    },

    {
      name: "Apple iPhone 12 Pro",
      category: "electronics",
      image: "/images/iphone.jpg",
      price: 899,
      countInStock: 40,
      brand: "Apple",
      rating: 4,
      numReviews: 100,
      description:
        "6.1-inch (15.5 cm diagonal) Super Retina XDR display. Ceramic Shield, tougher than any smartphone glass. A14 Bionic chip, the fastest chip ever in a smartphone.",
    },
  ],
};

export default data;
