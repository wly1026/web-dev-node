const mongoose = require('mongoose');
const schema = mongoose.Schema({
    liked: {type: Boolean, defaultValue: false},
    portrait: String,
    userName: String,
    handle: String,
    time: String,
    title: String,
    content: {
        image: String,
        title: String,
        prefix: String,
        link: String
    },
    commentTransferLove: {
        comment: {type: Number, defaultValue: 0},
        transfer: {type: Number, defaultValue: 0},
        love: {type: Number, defaultValue: 0}
    }
}, {collection: "tweets"});
module.exports = schema;
