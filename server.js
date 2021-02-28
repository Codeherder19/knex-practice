const { response } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
var faker = require('faker');
const knex = require('knex')('development');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const db = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'me',
        password: '',
        database: 'knextest'
    }
});

// app.use(express.static(knexpractice));

app.set('db', db);

app.set('port', 3000  );


app.listen(app.get('port'), () => {
    console.log(`Server is running on http://localhost:${app.get('port')}`);
});

const getAllUsers = (db) => {
    return db
    .select('*')
    .from('users')
    .then(rows => rows);
};

// router.get("/", (req, res) => {
//     const db = req.app.get("db");
//     getAllUsers(db).then(data => {
//       res.json().send(data);
//     })
//   });
  
app.get('/', async (req, res) => {
    try {
        const users = await database('users').select();
        res.status(200).json(users);
    } catch(error) {
        res.status(500).json({ error });
    }
});