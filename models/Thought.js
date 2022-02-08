const mongoose = require('mongoose');
const { thoughts } = require('./data');

const thoughtSchema = new mongoose.Schema({
    thoughtText:{type:String, required: true, min: 1,max:280 },
    createdAt: {type:Date, date:Date},
    username:{type:String, required:true},
    reactions:{type:Array}
})

const handleError = (err) => console.error(err);
const Thought = mongoose.model('Thought',thoughtSchema)
Thought.find({}).exec((err,collection)=>{
    if (err) {
        return handleError(err)
    } else {
        if (collection.length === 0) {
            return Thought.insertMany(
              thoughts,
              (insertError) =>
                insertError ? handleError(insertError) : console.log('Inserted Thoughts')
            );
          }
          return console.log('Already populated Thoughts');
    }
})
module.exports = Thought