const router = require("express").Router();
const api_router = require("./route.api");
const ui_router = require("./route.ui");

router.use("/api/v1", api_router);
router.use("/", ui_router);

module.exports = router;
