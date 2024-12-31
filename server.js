const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config({
    path: './.env-local'
});

const PORT = process.env.PORT | "3000";

const app = express();


/**
 * middleware
 */
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/**
 * routes
 */
app.get('/', (request, response) => {
    response.status(200).send("This is not why you're here. Head to /user/:id and replace :id with your user id");
});


const userRouter = require('./routes/user');
app.use('/user', userRouter);
/**
 * start listening 
 */
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`);
})