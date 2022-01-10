const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Eddy Omero",
    email: "eddy-o@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "774-888-0052",
  },
  {
    name: "Helga Helon",
    email: "helon.h@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "455-312-7448",
  },
  {
    name: "Ersin",
    email: "ersin.e@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "535-555-2845",
  },
  {
    name: "Samuel",
    email: "samuel@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "307-202-3590",
  },
];

module.exports = users;
