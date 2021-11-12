let tweets = require('../data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }
    app.get('/api/tweets', findAllTweets);

    const createTweet = (req, res) => {
        const newTweet = {
            _id: (new Date()).getTime() + '',
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
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }
    app.post('/api/tweets', createTweet);

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }
    app.delete('/api/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.commentTransferLove.love--;
                } else {
                    tweet.liked = true;
                    tweet.commentTransferLove.love++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }
    app.put('/api/tweets/:id/like', likeTweet);

};
