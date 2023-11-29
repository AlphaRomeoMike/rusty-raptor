const { PrismaClient } = require("@prisma/client");
const env = require("./config");

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: env.DATABASE_URL
        }
    }
});

module.exports = prisma;