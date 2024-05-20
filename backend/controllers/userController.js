
const User = require("../models/User")

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(err)

        }
    },

    //Delete user
    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json("Delete Successfully")

        } catch (err) {
            res.status(500).json(err)
        }
    },

    forgotPasswordUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

module.exports = userController;