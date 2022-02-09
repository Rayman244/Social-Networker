const router = require("express").Router();
const { User } = require("../../../models");
const {getUsers, getById,createUser} = require('../../userController')

// Get All Users
router.route("/all-users").get(getUsers);

// Get by User Id
router.route("/:id").get(getById)


// Create a new User
router.route("/").post(createUser)

// Update User
router.put("/:id", async (req, res) => {
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
});

router.delete('/:id',(req,res)=>{
  User.findByIdAndDelete(req.params.id,(err,result)=>{
    if(result){
      res.status(200).json(result)
      console.log(`Successfully Deleted User`);
    }else{
      res.status(500).json({ error: `Something went wrong ${err}` });
    }
  })
})
module.exports = router;
