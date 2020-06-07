const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs')

const URI = process.env.ATLAS_URI;
mongoose.connect(URI, { 
  useUnifiedTopology: true, 
  useNewUrlParser: true, 
  useCreateIndex: true  
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connction establised successfully');
});

const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
