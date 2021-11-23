const dao = require('../db/tweets/tweet-dao')
module.exports = (app) => {

    const findAllTweets = (req, res) => {
        dao.findAllTweets()
            .then(tweets => {
                res.json(tweets);
            })
    }
    app.get('/api/tweets', findAllTweets);

    const createTweet = (req, res) => {
        const newTweet = {
            "portrait": "../../../images/reactjs.png",
            "userName": "ReactJS",
            "handle": "ReactJs",
            "time": "23h",
            "title": "Amazing show about inspiration mission!",
            "content": {
                "title":"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                "prefix": "Previous info",
                "link": "netflix.com"
            },
            "commentTransferLove": {
                "comment": "123",
                "transfer": "234",
                "love": "343"
            },
            ...req.body.tweet,
        }
        dao.createTweet(newTweet)
            .then(tweet => res.json(tweet))
    }
    app.post('/api/tweets', createTweet);

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        dao.deleteTweet(id)
            .then(status => res.send(status));
    }
    app.delete('/api/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        dao.findTweetById(id)
            .then(tweet => {
                console.log("old Tweet: ");
                console.log(tweet);
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.commentTransferLove.love--;
                } else {
                    tweet.liked = true;
                    tweet.commentTransferLove.love++;
                }
                return tweet;
            })
            .then(tweet => {
                console.log("new Tweet: ");
                console.log(tweet);
                return dao.updateTweet(id, tweet);
            })
            .then(status => res.send(status));
    }
    app.put('/api/tweets/:id/like', likeTweet);
};
