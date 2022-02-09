const {Schema, model} = require('mongoose')
const {users} = require('../utils/data')


const userSchema = new Schema({
    username: {type: String, required: true, unique: true, trim:true },
    email:{ type:String, required:true, unique:true },
    thoughts:[{
      type: Schema.Types.ObjectId,
      ref:'Thought'
    }],
    friends:[{
      type: Schema.Types.ObjectId,
      ref:'User'
    }]

}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
})
userSchema.virtual('friendCount').get(function(){
  return this.friends.length
})
const User = model('User', userSchema)
// const handleError = (err) => console.error(err);

// User.find({}).exec((err, collection) => {
//     if (err) {
//       return handleError(err);
//     }
//     if (collection.length === 0) {
//       return User.insertMany(
//         users,
//         (insertError) =>
//           insertError ? handleError(insertError) : console.log('Inserted Users')
//       );
//     }
//     return console.log('Already populated Users');
//   });
module.exports = User