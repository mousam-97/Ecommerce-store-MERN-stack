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
      name: "Samsung TV",
      category: "electronics",
      image: "/images/samsungtv.jpg",
      price: 1200,
      countInStock: 20,
      brand: "Samsung",
      rating: 4,
      numReviews: 25,
      description:
        "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz. Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices. Display : LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
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
    {
      name: "Nike slim shirt",
      category: "shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 20,
      brand: "Nike",
      rating: 4,
      numReviews: 10,
      description: "High quality products",
    },
    {
      name: "Addidas slim shirt",
      category: "shirts",
      image: "/images/p2.jpg",
      price: 130,
      countInStock: 12,
      brand: "Addidas",
      rating: 3,
      numReviews: 8,
      description: "Great T shirt",
    },
    {
      name: "Nike Trousers",
      category: "pants",
      image: "/images/p4.jpg",
      price: 80,
      countInStock: 0,
      brand: "Nike",
      rating: 4,
      numReviews: 10,
      description: "High quality products",
    },
    {
      name: "Puma Trousers",
      category: "pants",
      image: "/images/p5.jpg",
      price: 150,
      countInStock: 15,
      brand: "Puma",
      rating: 5,
      numReviews: 6,
      description: "High quality products",
    },
  ],
};

export default data;
