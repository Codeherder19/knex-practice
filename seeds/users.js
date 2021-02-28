const express = require('express');
const router = express.Router();
const app = express();
const faker = require('faker');
// exports.seed = function(knex, Promise) {
//   const recordsLength = Array.from(Array(100).keys());
//     const records = recordsLength.map(rec => ({
//         name: faker.name.findName(),
//         email: faker.internet.email()
//       }));
//   // Deletes ALL existing entries
// return router.get('/seed', function(req, res, next) {
//     const db = req.app.get('db')
//     .then(function() {
//     return db('users')
//     .insert(records)
//     .then(() => {
//         res.send('Seeded data');
//     });
// });
// })};

exports.seed = function(knex, Promise) {
  const recordsLength = Array.from(Array(100).keys());
      const records = recordsLength.map(rec => ({
          name: faker.name.findName(),
          email: faker.internet.email()
        }));
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert(records);
  });
};
