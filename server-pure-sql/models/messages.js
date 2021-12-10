var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // db.query(
    //   'SELECT * FROM messages INNER JOIN users',
    //   function (err, results, fields) {
    //     if (err) {
    //       throw (err);
    //     } else {
    //       callback(err, results);
    //     }
    //   }
    // );
    // get a message id, its text, and the username.
    const queryStr = 'SELECT messages.id, messages.text, messages.roomname, users.username FROM messages LEFT OUTER JOIN users ON (messages.userId = users.id) ORDER BY messages.id DESC';
    db.query(queryStr, (err, results) => {
      if (err) {
        throw (err);
      } else {
        callback(err, results);
      }
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    // db.query(
    //   'INSERT INTO users (username) VALUES (?)',
    //   [content.username]
    // );
    // db.query(
    //   'INSERT INTO messages (text, userId, roomname) VALUE (?, (SELECT id FROM users WHERE username = ?), ?)',
    //   [content.text, content.username, content.roomname]
    // );
    const queryStr = 'INSERT INTO messages(text, userId, roomname) VALUES (?, (SELECT id FROM users WHERE username = ? limit 1), ?)';
    db.query(queryStr, params, (err, results) => {
      if (err) {
        throw (err);
      } else {
        callback(err, results);
      }
    });
  } // a function which can be used to insert a message into the database
};
