const router = require('express').Router();
const authController = require('../auth-controller');

router.route("/login").post(authController.login);
router.route("/register").post(authController.register);
router.route("/logout").get(authController.logout);

module.exports = router;