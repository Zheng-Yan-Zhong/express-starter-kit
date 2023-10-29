const express = require("express");
const router = express.Router();

const users = [
  {
    name: "Dennis",
  },
];
/**
 * For test
 * GET localhost:3003/user?name=Dennis
 **/

router.get("/", (req, res) => {
  const user = users.find((user) => user.name == req.query.name);
  res.status(200).json(user);
});

/**
   * [
    {
      "name": "Dennis"
    },
    {
      "name": "Ivy"
    }
  ]
 */
router.post("/", (req, res) => {
  users.push({ name: req.body.name });
  res.status(200).json(users);
});

module.exports = router;
