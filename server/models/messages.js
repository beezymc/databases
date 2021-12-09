var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query(
      'SELECT * FROM messages INNER JOIN users',
      function (err, results, fields) {
        if (err) {
          throw (err);
        } else {
          callback(err, results);
        }
      }
    );
  }, // a function which produces all the messages
  create: function (content, callbackOne, callbackTwo) {
    db.query(
      'INSERT INTO users (username) VALUES (?)',
      [content.username]
    );
    db.query(
      'INSERT INTO messages (text, userId, roomname) VALUE (?, (SELECT id FROM users WHERE username = ?), ?)',
      [content.text, content.username, content.roomname]
    );
  } // a function which can be used to insert a message into the database
};
