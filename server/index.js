if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const userRouter = require('./routes/users');
app.use(userRouter);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));