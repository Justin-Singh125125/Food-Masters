const router = require("express").Router();
const usersController = require("../../controllers/usersController");


router.route("/")
        .get(usersController.getUser)
        .post(usersController.signUp)
        .delete(usersController.signOut);

router.route("/login")
        .post(usersController.signIn);


module.exports = router;
