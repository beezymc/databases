var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // db.query(
    //   'SELECT * FROM users',
    //   function (err, results, fields) {
    //     if (err) {
    //       throw (err);
    //     } else {
    //       callback(err, results);
    //     }
    //   }
    // );
    const queryStr = 'SELECT * FROM users';
    db.query(queryStr, (err, results) => {
      if (err) {
        throw (err);
      } else {
        callback(err, results);
      }
    });
  },
  create: function (params, callback) {
    const queryStr = 'INSERT INTO users(username) VALUES (?)';
    db.query(queryStr, params, (err, results) => {
      if (err) {
        throw (err);
      } else {
        callback(err, results);
      }
    });
  }
};
