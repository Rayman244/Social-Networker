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
userSchema.method('clearThoughts').get(function(){
  return this.thoughts = []
})
const User = model('User', userSchema)

module.exports = User