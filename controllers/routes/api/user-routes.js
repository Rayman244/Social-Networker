const router = require("express").Router();
const { User } = require("../../../models");
const {getUsers, getById,createUser,updateUser,deleteUser,addFriend,deleteFriend} = require('../../userController')
// /api/users
// Get All Users
router.route("/all-users").get(getUsers);

// Get by User Id
router.route("/:id").get(getById)


// Create a new User
router.route("/").post(createUser)

// Update User
router.route('/:id').put(updateUser).delete(deleteUser)

router.route('/:id/friends').post(addFriend).delete(deleteFriend)
module.exports = router;
