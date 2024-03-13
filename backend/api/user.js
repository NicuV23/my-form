const router = require("express").Router();

router.get("/test", async (req, res) => {
  try {
    const test = { test1: "test" };
    return res.status(200).send(test);
  } catch (error) {
    console.log("Error");
  }
});

module.exports = router;
