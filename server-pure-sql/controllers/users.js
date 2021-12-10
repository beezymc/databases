var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.get((err, results) => {
      if (err) {
        throw (err);
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    const params = [req.body[username]];
    models.messages.create(params, (err, results) => {
      if (err) {
        throw (err);
      } else {
        res.json(results);
      }
    });
  }
};
