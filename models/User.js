const mongoose = require('mongoose')
const {users} = require('./data')
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim:true },
    email:{ type:String, required:true, unique:true },
    thoughts:{type:Array},
    friends:{type:Array}

})
const User = mongoose.model('User', userSchema)
const handleError = (err) => console.error(err);

User.find({}).exec((err, collection) => {
    if (err) {
      return handleError(err);
    }
    if (collection.length === 0) {
      return User.insertMany(
        users,
        (insertError) =>
          insertError ? handleError(insertError) : console.log('Inserted Users')
      );
    }
    return console.log('Already populated Users');
  });
module.exports = User