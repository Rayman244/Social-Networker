const router = require('express').Router()
const {User} = require('../../../models')

router.get('/all-users', (req, res) => {
    // Using model in route
    User.find({}, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  });
  router.get("/:id",(req,res)=>{
      User.findById(req.params.id,(err,result)=>{
          if(err){
            res.status(500).json({ error: 'Something went wrong' });
          }else{
            res.status(200).json(result);
          }
      })
  })
  router.post("/", async(req,res)=>{
      console.log();
      try {
      const {username,email} = await req.body
      const newUser = await new User ({username:username,email:email})
      if( !username || !email ){
        res.status(500).json({ error: 'Please enter a valad email or password' });;
      }else{
        newUser.save()
        res.status(201).json(newUser);
      }

  } catch (error) {
      console.log(error);
  }
      
  })
module.exports = router