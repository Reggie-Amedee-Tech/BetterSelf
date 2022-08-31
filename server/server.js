const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 5002
const connectDB = require('./config/mongoose.config');
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



require('./routes/post.routes')(app)
app.listen(PORT, () => console.log('Server Is Now Listening On Port: 5002'));


