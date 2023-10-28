// Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "file:../db/data.db",
    },
  },
});

// Class HandleBook
class BookController {
  // listing book
  static async listBook(req, res) {
    const result = await prisma.book.findMany({});

    res.json(result);
  }

  // get detail of books
  static async getDetailBook(req, res) {
    const result = await prisma.book.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (result === null) {
      res.status(404).json({ message: "Data not found" });
    } else {
      res.status(200).json(result);
    }
  }
  //add books
  static async addbook(req, res) {
    const result = await prisma.book.create({
      data: {
        title: req.body.title,
        price: req.body.price,
      },
    });
    res.status(201).json(result);
  }

  // editBook
  static async editBook(req, res) {
    const result = await prisma.book.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title: req.body.title,
        price: req.body.price,
      },
    });
  }

  // delete Books by Id
  static async deleteBook(req, res) {
    const result = await prisma.book.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.json(result);
  }
}

module.exports = BookController;
