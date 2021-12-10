var { User, Message } = require('../db');

module.exports = {
  get: function (req, res) {
    User.findAll()
      .complete((err, results) => {
        res.json(results);
      })
      .catch((err) => {
        console.log(err);
      });

    // models.users.get((err, results) => {
    //   if (err) {
    //     throw (err);
    //   } else {
    //     res.json(results);
    //   }
    // });
  },
  post: function (req, res) {
    User.create( { username: req.body.username } )
      .complete(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(err);
      });
    // const params = [req.body[username]];
    // models.messages.create(params, (err, results) => {
    //   if (err) {
    //     throw (err);
    //   } else {
    //     res.json(results);
    //   }
    // });
  }
};
