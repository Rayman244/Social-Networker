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
    }
}