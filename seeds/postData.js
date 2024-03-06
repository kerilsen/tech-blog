const { Post } = require('../models');
const postData = [
    {
        title: "Regex",
        post_body: "I feel like the Hardy Boys! Can we start speaking only in regular expression?",
        date_created: new Date(),
        user_id: 1
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;