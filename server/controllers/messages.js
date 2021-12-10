var { User, Message } = require('../db');

module.exports = {
  get: function (req, res) {
    // models.messages.getAll((err, results) => {
    //   if (err) {
    //     throw (err);
    //   } else {
    //     res.status(200).send(results);
    //   }
    // });
    Message.findAll({ include: [User] })
      .complete((results) => {
        res.json(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // models.messages.create(req.body);
    User.findOrCreate( {username: req.body.username } )
      .complete((user) => {
        const params = {
          text: req.body.text,
          userId: user.id,
          roomname: req.body.roomname
        };
        Message.create(params)
          .complete((results) => {
            res.sendStatus(201);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    // models.messages.create(params, (err, results) => {
    //   if (err) {
    //     throw (err);
    //   } else {
    //     res.json(results);
    //   }
    // });
  } // a function which handles posting a message to the database
};
