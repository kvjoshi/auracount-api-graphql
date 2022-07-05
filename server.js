const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
var corsOptions = {
    origin: '*',methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
};

const mongoString = process.env.DATABASE_URL;

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

global.__basedir = __dirname;

//Connect to MongoDB
mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
//Import Routes
const routes = require('./app/routes/routes');


// Listen To Routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Aura Count Api." });
});
app.use('/api', routes)





// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
