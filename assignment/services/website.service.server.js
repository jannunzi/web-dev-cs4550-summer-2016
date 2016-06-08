module.exports = function(app, models) {

    var websiteModel = models.websiteModel;

    app.get("/api/user/:userId/website", findWebsitesForUser);
    app.post("/api/user/:userId/website", createWebsite);

    function createWebsite(req, res) {
        var userId = req.params.userId;
        var website = req.body;

        websiteModel
            .createWebsite(userId, website)
            .then(
                function (website) {
                    res.json(website);
                },
                function (error) {
                    res.status(400).send(error);
                }
            )
    }

    function findWebsitesForUser(req, res) {
        var userId = req.params.userId;

        websiteModel
            .findAllWebsitesForUser(userId)
            .then(
                function(websites) {
                    res.json(websites);
                },
                function (error) {
                    res.status(404).send(error);
                }
            );
    }
}