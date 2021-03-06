const express = require("express");
let members = require("../../members");
const uuid = require("uuid");

const router = express.Router();

// This route gets all members
router.get("/", (req, res) => res.json(members));

// Gets single member
router.get("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res
      .status(404)
      .json({ error: `No member with the ID of ${req.params.id} found` });
  }
});

// Create member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email!" });
  }

  members.push(newMember);
  res.json(members);
  //res.redirect("/");
});

// Update member
router.put("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    const updatedMember = req.body;

    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updatedMember.name ? updatedMember.name : member.name;
        member.email = updatedMember.email ? updatedMember.email : member.email;

        res.json({ msg: "Member updated", member: member });
      }
    });
  } else {
    res
      .status(404)
      .json({ error: `No member with the ID of ${req.params.id} found` });
  }
});

// Delete member
router.delete("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "Member deleted",
      member: members.filter(member => member.id !== parseInt(req.params.id))
    });
  } else {
    res
      .status(404)
      .json({ error: `No member with the ID of ${req.params.id} found` });
  }
});

module.exports = router;
