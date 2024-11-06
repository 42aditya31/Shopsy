const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const config = require('./config');

const app = express();

const cors = require('cors');

// app.use(cors({
//   origin: 'http://localhost:8000',
//   methods: ['GET','POST','PUT','DELETE'],
//   credentials: true
// })); 

// Connect to MongoDB
mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Set view engine and middlewares
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: config.sessionSecret, resave: true, saveUninitialized: true }));

app.get("/getData", (req,res) => {
  res.send("http://localhost:8000/");
});

// Use routes
const routes = require('./routes/index');
app.use('/', routes);

// Start server
app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});