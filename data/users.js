import bcrypt from "bcryptjs";

const users = [
  {
    firstName: "Serena",
    lastName: "van der Woodsen",
    email: "serenavdwoodsen@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    wishlist: [],
    orders: [],
    listings: [],
  },
  {
    firstName: "Chris",
    lastName: "Evans",
    email: "chrisevans123@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    wishlist: [],
    orders: [],
    listings: [],
  },
];
