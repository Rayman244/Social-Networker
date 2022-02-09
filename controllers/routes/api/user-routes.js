const router = require("express").Router();
const { User } = require("../../../models");

// Get All Users
router.get("/all-users", async (req, res) => {
  // Using model in route
  try {
     const users = await User.find({}, (err, result) => {
    if (err) {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  })
  .populate('Thought');
  } catch (error) {
    
  }

});

// Get by User Id
router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Something went wrong" });
    } else {
      res.status(200).json(result);
    }
  });
});

// Create a new User
router.post("/", async (req, res) => {
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
});

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
