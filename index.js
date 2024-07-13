const data = require("./package.json")

module.exports = (router) => {
    router.get("/journey-plugin/info", (_req, res) => res.send({ version: data.version }));

    router.get("/journey-plugin/start", (_req, res) => res.redirect("/journey-plugin/name"));

    router.post("/journey-plugin/name", (_req, res) => res.redirect("/journey-plugin/date-of-birth"));

    router.post("/journey-plugin/date-of-birth", (_req, res) => res.redirect("/journey-plugin/nino"));

    router.post("/journey-plugin/nino", (_req, res) => res.redirect("/journey-plugin/check-your-answers"));
}