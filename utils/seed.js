const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usersData, thoughtsData } = require('./data');

// Error handler for MongoDB connection
connection.on('error', (err) => console.error(`Connection error: ${err}`));

connection.once('open', async () => {
    console.log('Database connected');

    try {
        // Drop existing collections if they exist
        let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
        if (userCheck.length) {
            await connection.dropCollection('users');
            console.log('Dropped users collection');
        }

        let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
        if (thoughtCheck.length) {
            await connection.dropCollection('thoughts');
            console.log('Dropped thoughts collection');
        }

        // Insert Users
        const createdUsers = await User.create(usersData);
        console.log('Users seeded successfully');

        const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
        const shuffledUsers = shuffleArray([...createdUsers]);

        // Assign random friends
        for (const user of createdUsers) {
            // Randomly select the number of friends (0 to 5)
            const numFriends = Math.floor(Math.random() * 6); // 0 to 5 friends

            // Assign friends from the shuffled list
            const friends = shuffledUsers.slice(0, numFriends).filter(friend => friend._id !== user._id);

            // Add friends to the user's friends array
            user.friends.push(...friends.map(friend => friend._id));
            await user.save();
        }

        // Insert Thoughts and associate them with Users
        const createdThoughts = [];

        for (const thoughtData of thoughtsData) {
            const user = createdUsers.find(user => user.username === thoughtData.username);
            if (user) {
                const thought = await Thought.create(thoughtData);
                // Push the thought's _id to the user's thoughts array
                user.thoughts.push(thought._id);
                await user.save();
                createdThoughts.push(thought);
            }
        }

        console.log('Thoughts seeded and associated with users successfully');
        console.table(createdUsers);
        console.table(createdThoughts);

        console.info('Seeding complete! 🌱');
    } catch (error) {
        console.error('Error during seeding:', error);
    } finally {
        process.exit(0);  // Ensure the process exits after seeding
    }
});
