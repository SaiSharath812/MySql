const express = require('express');
const app = express();
const PORT = 5000;
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'passwordmanager',
});

app.post('/addpassword', (req, res) => {
    const { password, title } = req.body;

    const sql = 'INSERT INTO passwords (password, title) VALUES (?, ?)';

    db.query(sql, [password, title], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error in Inserting');
        } else {
            console.log('Successfully inserted');
            res.status(200).send('Success');
        }
    });
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
