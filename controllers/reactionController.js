const Thought= require('../models/Thought')
const Reaction = require('../models/Reaction')
module.exports = {
    getReaction(res,req){
        Reaction.find()
        .lean
        .then((reactions)=>res.status(200).json(reactions))
        .catch((err)=>{res.status(500).json(err)})
    },
    createReaction(req, res) {
        Thought.findByIdAndUpdate(
          req.params.id,
          { $addToSet: { reactions: req.body } },
       
        )
          .then((newReaction) => res.status(200).json(newReaction))
          .catch((err) => res.status(500).json(err));
      },
      deleteReaction(req,res){

        Thought.findByIdAndUpdate(
            req.params.id,
            { $pull: { reactions: {reactionId: req.params.reactionId} } },
          )
            .then((deletedReaction) => res.status(200).json(deletedReaction))
            .catch((err) => res.status(500).json(err));
      },
     
}