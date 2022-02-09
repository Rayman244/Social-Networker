const router = require("express").Router();
const {getAllThoughts,getById,postThought,deleteThought,updateThought}= require('../../thoughtsController')
const {createReaction,deleteReaction} = require('../../reactionController')
router.route('/').get(getAllThoughts).post(postThought)

router.route('/:id').get(getById).put(updateThought).delete(deleteThought)

router.route('/:id/reactions').post(createReaction)
router.route('/:id/reactions/:reactionId').delete(deleteReaction)


module.exports = router;
