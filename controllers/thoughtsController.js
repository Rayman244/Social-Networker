const Thought = require("../models/Thought");
const User = require("../models/User");
module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .lean()
      .populate("reactions",'_id username')
      .then((thoughts) => res.status(200).json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getById(req, res) {
    Thought.findById(req.params.id)
      .then((thoughts) => res.status(200).json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  postThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        )
          .then((thought) => res.status(200).json(thought))
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  },
  async updateThought(req, res) {
    try {
      const { username, thoughtText } = await req.body;
      const updatedThought = await Thought.findByIdAndUpdate(req.params.id, {
        username: username,
        thoughtText: thoughtText,
      });

      updatedThought.save();
      res.status(201).json(updatedThought);
    } catch (error) {
      res.status(500).json({ error: "Please enter a valad username or text" });
      console.log(error);
    }
  },
  deleteThought(req, res) {
    Thought.findByIdAndRemove(req.params.id)
      .then((thought) => res.status(200).json(thought))
      .catch((err) => res.status(500).json(err));
  },

};
