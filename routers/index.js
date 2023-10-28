const { Router } = require("express");

// import Book Router
const bookRouter = require("./bookApiRouter");

const router = Router();

router.get("/", (req, res) => {
  res.send("selamat Datang");
});

router.use(bookRouter);

module.exports = router;
