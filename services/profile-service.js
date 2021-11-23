const dao = require('../db/profile/profile.dao')

module.exports = (app) => {

    const findProfileById = (req, res) => {
        dao.findProfileById()
            .then(profile => res.json(profile))
    }
    app.get('/api/profile', findProfileById);

    const updateProfile = (req, res) => {
        const id = req.params['id'];
        dao.updateProfile(id, req.body.profile)
            .then(status => res.json(status));
    }
    app.put('/api/profile/:id', updateProfile);
}