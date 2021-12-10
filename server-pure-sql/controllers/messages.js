var models = require('../models');

module.exports = {
  get: function (req, res) {
    // models.messages.getAll((err, results) => {
    //   if (err) {
    //     throw (err);
    //   } else {
    //     res.status(200).send(results);
    //   }
    // });
    models.messages.getAll((err, results) => {
      if (err) {
        throw (err);
      } else {
        res.json(results);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // models.messages.create(req.body);
    const params = [req.body.text, req.body.username, req.body.roomname];
    models.messages.create(params, (err, results) => {
      if (err) {
        throw (err);
      } else {
        res.json(results);
      }
    });
  } // a function which handles posting a message to the database
};
