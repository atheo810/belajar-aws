const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("selamat Datang");
});

module.exports = router;
