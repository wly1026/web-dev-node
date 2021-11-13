let profile = require('../data/profile.json')

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }
    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        profile = {
            ...profile,
            ...req.body
        }
        // console.log(profile);
        res.json(profile);
    }
    app.put('/api/profile', updateCurrentProfile);
}