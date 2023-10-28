const { Router } = require("express");

// import Book Controller
const BookController = require("../controllers/bookApiController");

// Destruct Controller
const { listBook } = BookController;

const router = Router();

router.get("/books", listBook);

module.exports = router;
