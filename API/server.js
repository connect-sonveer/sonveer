const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
const options = { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  };

mongoose.connect(uri, options);

mongoose.connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

mongoose.connection.on('error', err => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1); // eslint-disable-line no-process-exit
});

//----------------add the routes----------------//

const contactRouter = require('./routes/contacts');
const categoryRouter = require('./routes/categories');

app.use('/contacts', contactRouter);
app.use('/categories', categoryRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
