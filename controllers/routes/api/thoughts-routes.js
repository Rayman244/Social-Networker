const router = require("express").Router();
const { Thought } = require("../../../models");

router.get("/", (req, res) => {
  Thought.find({}, (err, result) => {
    if (err) {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
});
router.get("/:id", (req, res) => {
  Thought.findById(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Something went wrong" });
    } else {
      res.status(200).json(result);
    }
  });
});
router.post("/", async (req, res) => {
  try {
    const { thoughtText, username } = await req.body;
    const newThought = await new Thought({
      thoughtText: thoughtText,
      username: username,
    });
    if (!thoughtText || !username) {
      res.status(500).json({ error: "Please enter a valad email or password" });
    } else {
      newThought.save();
      res.status(201).json(newThought);
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
