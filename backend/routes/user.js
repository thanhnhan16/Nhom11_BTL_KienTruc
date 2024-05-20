const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

//Get All User
router.get("/", middlewareController.verifyToken, userController.getAllUsers);

//Delete user
router.delete("/:id", middlewareController.verifyTokenAndAdmin, userController.deleteUser);

//Forgot Password
router.post("/forgotPassword/:id", userController.forgotPasswordUser);


module.exports = router;