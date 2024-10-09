const mongoose = require('mongoose');
const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find().select("-__v");
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Get a single user by userId
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("thoughts")
        .populate("friends");

      if (!user) {
        return res.status(404).json({ message: "No user found with that ID" });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Update a user by userId
  async updateUser(req, res) {
    try {
      const userId = new mongoose.Types.ObjectId(req.params.userId);
  
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: req.body },
        { new: true, runValidators: true }
      );
  
      if (!user) {
        return res.status(404).json({ message: "No user found with that ID." });
      }
  
      res.json({ message: "User updated successfully", user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },  

  // Delete a user and associated thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Delete the user's associated thoughts
      await Thought.deleteMany({ userId: user._id });

      res.json({
        message: "User and associated thoughts deleted successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add a friend by userId
  async addFriend(req, res) {
    try {
      // Ensure friendId is cast to ObjectId
      const friendId = new mongoose.Types.ObjectId(req.params.friendId);

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user found with that ID." });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Remove a friend by userId
  async removeFriend(req, res) {
    try {
      // Ensure friendId is cast to ObjectId
      const friendId = new mongoose.Types.ObjectId(req.params.friendId);

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user found with that ID." });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
