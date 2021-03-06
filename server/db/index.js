var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();

Message.sync();

module.exports.User = User;
module.exports.Message = Message;