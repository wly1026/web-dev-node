const model = require('./tweet-model');

const findAllTweets = () => model.find();
const createTweet = (tweet) => model.create(tweet);
const deleteTweet = (id) => model.deleteOne({_id: id});
const updateTweet = (id, tweet) => {
    console.log("id： " + id+"updating in dao:");
    console.log(tweet);
    return model.updateOne({_id: id}, {$set: tweet});
};
const findTweetById = (id) => model.findById(id)
module.exports = {
    findAllTweets, createTweet,
    deleteTweet, updateTweet, findTweetById
};


