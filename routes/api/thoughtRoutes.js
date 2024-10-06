const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReactionToThought,
    removeReactionFromThought
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getThoughts).post(createThought).put(updateThought);

// /api/users/:userId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/users/:userId/friends
router.route('/:thoughtId/reactions').post(addReactionToThought);

// /api/users/:userId/friends/:friendId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReactionFromThought);

module.exports = router;