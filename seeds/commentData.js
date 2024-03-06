const { Comment } = require('../models');
const commentData = [
    {
        comment_body: "Sounds like a very bad idea",
        date_created: new Date(),
        user_id: 2,
        post_id: 1
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;