const express = require('express');
const pool = require('../helpers/database');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/:id', async function(req, res) {
    try {
        const sqlQuery = 'SELECT id, email, password, create_time FROM user WHERE id=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/register', async function(req, res) {
    try {
        const { email, password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = await bcrypt.hashSync(password, salt)

        const sqlQuery = 'INSERT INTO user(email, password) VALUES(?, ?)';
        const result = await pool.query(sqlQuery, [email, encryptedPassword]);

        res.status(200).json({userId: result.insertId});
    }
    catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/login', async function(req, res) {
    try {
        const { id, password} = req.body;

        const sqlGetUser = "SELECT password FROM user WHERE id=?";
        const rows = await pool.query(sqlGetUser, id);
        if (rows) {
            const isValid = await bcrypt.compare(password, rows[0].password);
            res.status(200).json({loginValid: isValid});
        } else {
            res.status(200).send(`User with id ${id} was not found`);
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;