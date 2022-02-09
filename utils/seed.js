const conntection = require('../config/connection')
const {User,Thought} = require('../models')
const {users, thoughts} = require('./data')

conntection.on('error', (err)=>err)
conntection.once('open', async ()=> {
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});
    await User.collection.insertMany(users)
    await Thought.collection.insertMany(thoughts)


})