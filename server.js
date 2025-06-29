const express = require('express');
const session = require('express-session');
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).send("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");

  const existingUser = await User.findOne({ username });
  if (existingUser) return res.status(400).send("ชื่อผู้ใช้นี้ถูกใช้แล้ว");

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword,
    point: 0,
    role: "user",
  });

  await newUser.save();
  res.status(200).send("สมัครสมาชิกสำเร็จ");
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

const User = require('./backend/models/User');
const Product = require('./backend/models/Product');

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'));

// register/login/logout routes here...
// admin update product route...
// get products, buy product, history route...

app.listen(3000, () => console.log('Server started on port 3000'));
