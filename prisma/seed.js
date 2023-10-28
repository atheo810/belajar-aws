const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const books = [
  {
    title: "Kuzu no Honkai",
    price: 35000,
  },
  {
    title: "Redo Healer",
    price: 40000,
  },
  {
    title: "Mushoku Tensei",
    price: 37000,
  },
];

async function main() {
  for (const book of books) {
    await prisma.book.create({
      data: book,
    });
  }

  console.log("Seed data success");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
