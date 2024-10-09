const mongoose = require('mongoose');
const { Thought, User } = require("../models")

// Aggregate function to get the total number of thoughts
const totalCount = async () => {
  const numberOfThoughts = await Thought.countDocuments();
  return numberOfThoughts;
};

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();

      const thoughtObj = {
        thoughts,
        totalCount: await totalCount(),
      };

      res.json(thoughtObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Get single thought by thoughtId
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId }).select(
        "-__v"
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      // Use userId to find the user
      const user = await User.findOne({ _id: thought.userId });

      res.json({
        thought,
        user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

// Create thought and add it to user by username
async createThought(req, res) {
  try {
    // Create a new thought document
    const thought = await Thought.create(req.body);

    // Find the user by username and add the thought to their 'thoughts' array
    const user = await User.findOneAndUpdate(
      { username: req.body.username }, // Query by username, not _id
      { $addToSet: { thoughts: thought._id } }, // Add the thought's _id to the user's thoughts array
      { new: true, runValidators: true } // Return the updated document and apply validation
    );

    // If no user is found, return a 404 error
    if (!user) {
      return res.status(404).json({ message: 'No user found with that username' });
    }

    // Respond with a success message, including the created thought and updated user
    res.json({ message: 'Thought created and added to user', thought, user });
  } catch (err) {
    res.status(500).json(err); // Handle errors
  }
},

  // Update thought
  async updateThought(req, res) {
    try {
      const thoughtId = new mongoose.Types.ObjectId(req.params.thoughtId);
      
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true, runValidators: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that ID.' });
      }

      res.json({ message: 'Thought updated successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }

      res.json({ message: "Thought deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add a reaction to the thought's reaction list
  async addReactionToThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought found with that ID" });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Remove a reaction from the thought's reaction list
  async removeReactionFromThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought found with that ID" });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
