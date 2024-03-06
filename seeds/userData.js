const { User } = require('../models');
const userData = [
    {
        name: "Keri",
        email: "keri@gmail.com",
        password: "get123456"
    },
    {
        name: "Benita",
        email: "benita@gmail.com",
        password: "get123456"
    },
    {
        name: "Evelyn",
        email: "evelyn@gmail.com",
        password: "get123456"
    },
    {
        name: "Sarun",
        email: "sarun@gmail.com",
        password: "get123456"
    },
    {
        name: "Sarah",
        email: "sarah@gmail.com",
        password: "get123456"
    },
    {
        name: "Stephen",
        email: "stephen@gmail.com",
        password: "get123456"
    },
    {
        name: "Manya",
        email: "manya@gmail.com",
        password: "get123456"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;