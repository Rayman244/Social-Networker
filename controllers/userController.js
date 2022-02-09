const User = require('../models/User')
module.exports = {
        getUsers(req,res){
        User.find()
        .lean()
        .populate('thoughts', '-username')
        .populate('friends', '_id username')
        .then((users) => res.status(200).json(users))
        .catch((err) => res.status(500).json(err));
    },
    getById(req,res){
        User.findById(req.params.id)
        .lean()
        .populate('thoughts', '-username')
        .populate('friends', '_id username')
        .then((users) => res.status(200).json(users))
        .catch((err) => res.status(500).json(err));
    },
    async createUser(req,res){
        try {
            const { username, email } = await req.body;
            const newUser = await new User({ username: username, email: email });
            if (!username || !email) {
              res.status(500).json({ error: "Please enter a valad email or password" });
            } else {
              newUser.save();
              res.status(201).json(newUser);
            }
          } catch (error) {
            console.log(error);
          }
    },
    async updateUser(req,res){
        try{
            const { username, email } = await req.body;
           const updatedUser = await User.findByIdAndUpdate(req.params.id, { username: username, email: email });
           if (!username || !email) {
            res.status(500).json({ error: "Please enter a valad email or password" });
          } else {
            updatedUser.save();
            res.status(201).json(updatedUser);
          }
          } catch (error) {
          console.log(error);
          }
    },
    deleteUser(req,res){
        User.findByIdAndDelete(req.params.id)
        .then((user)=>res.status(200).json(user))
        .catch((err)=>res.status(500).json(err))
       
    },
    addFriend(req,res){
        User.findByIdAndUpdate(req.params.id,{$addToSet:{friends: req.body.id}})
        .then((friend)=>res.status(200).json(friend))
        .catch((err)=>res.status(500).json(err))
        
        User.findByIdAndUpdate(req.body.id,
            { $addToSet: { friends: req.params.id } }
          )
        .catch((err)=>res.status(500).json(err))
    },
    deleteFriend(req,res){
        User.findByIdAndUpdate(req.params.id,{$pull:{friends: req.body.id}})
        .then((friend)=>res.status(200).json(friend))
        .catch((err)=>res.status(500).json(err))
        
        User.findByIdAndUpdate(req.body.id,
            { $pull: { friends: req.params.id } }
          )
        .catch((err)=>res.status(500).json(err))
    },
}