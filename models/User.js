const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim:true },
    email:{ type:String, required:true, unique:true }
})
const User = mongoose.model('User', userSchema)
const handleError = (err) => console.error(err);

User.find({}).exec((err, collection) => {
    if (err) {
      return handleError(err);
    }
    if (collection.length === 0) {
      return User.insertMany(
        [
            { username: 'rayhewitt42',email:"rayhewitt42@gmail.com" },
            { username: 'johnjones12',email:"martianmanhunter@mail.com" },
            { username: 'Hulk234',email:"bbscience@lab.com" },
            { username: 'IronmanMKIII',email:"rdj@mail.com"},
            { username: 'BlackWidow234',email:"scarletj@mail.com" },
            { username: 'HawlkEye08',email:"bullseye01@mail.com" },
            { username: 'ThorOdenson',email:"strongestavenger@.mail" },
        ],
        (insertError) =>
          insertError ? handleError(insertError) : console.log('Inserted')
      );
    }
    return console.log('Already populated');
  });
module.exports = User