const express = require('express');

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
    response.status(200).json({ name: "garyc", doing:"coding"});
});

/**
 * start listening 
 */
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`);
})