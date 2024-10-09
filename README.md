# Social Network API

## Description

This is a back-end application designed to manage the social networking needs of a platform. It allows the platform to store user data, thoughts (posts), reactions (replies to thoughts), and maintain friendships between users. The application uses MongoDB and is managed through the Mongoose ODM (Object Data Modeling) library to handle data storage. While this is a back-end application, it can be paired with front-end interfaces or tested through tools like Insomnia to interact with the API routes.

This project demonstrates how a MongoDB-based system can efficiently store and manage social networking data, offering a solid foundation for applications seeking scalability and flexibility in handling relationships and interactions between users.

## Usage

Before using this application, make sure you have the necessary dependencies installed, including MongoDB and Mongoose. You can follow the steps below to set up and run the project:

1. Install Dependencies

To install the required dependencies, run:

    npm install

2. Create a `.env` File

You should create a .env file in the root directory of the project to store your MongoDB connection string and other sensitive information. Add the following:

    MONGODB_URI='mongodb://localhost:27017/socialNetworkDB'

Once the server is running, you can start interacting with the API using a tool like Insomnia.

3. Start the Server

To start the server and sync the Mongoose models to the MongoDB database, run:

    npm start

Once the server is running, you can start interacting with the API using a tool like Insomnia.

4. API Routes and Functionality

You can use Insomnia to interact with the following routes. The application includes full CRUD functionality for users, thoughts, and reactions:

- Users

    - GET all users: `GET http://localhost:3001/api/users`

    - GET user by ID: `GET http://localhost:3001/api/users/:id`

    - Create a new user: `POST http://localhost:3001/api/users`

        - Example body:

    {
    "username": "johndoe",
    "email": "johndoe@example.com"
    }

    - Update a user: `PUT http://localhost:3001/api/users/:id`

    - Delete a user: `DELETE http://localhost:3001/api/users/:id`

- Thoughts

    - GET all thoughts: `GET http://localhost:3001/api/thoughts`

    - GET thought by ID: `GET http://localhost:3001/api/thoughts/:id`

    - Create a thought: `POST http://localhost:3001/api/thoughts`

        - Example body:

    {
    "thoughtText": "This is a thought",
    "username": "johndoe"
    }

    - Update a thought: `PUT http://localhost:3001/api/thoughts/:id`

    - Delete a thought: `DELETE http://localhost:3001/api/thoughts/:id`

- Reactions

    - Add a reaction to a thought: `POST http://localhost:3001/api/thoughts/:thoughtId/reactions`

        - Example body:

    {
    "reactionBody": "This is a reaction",
    "username": "johndoe"
    }
   
    - Remove a reaction: `DELETE http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`

- Friends

    - Add a friend: `POST http://localhost:3001/api/users/:userId/friends/:friendId`

    - Remove a friend: `DELETE http://localhost:3001/api/users/:userId/friends/:friendId`

## Features

- User and Thought Models: The application uses Mongoose models for User and Thought schemas, allowing users to store information like usernames, emails, thoughts, and reactions.

- Friendship Management: Users can add other users as friends, allowing for a connection between profiles. You can add and remove friends via API routes.

- Thought Reactions: Users can post reactions (replies) to other users' thoughts, stored as subdocuments within the Thought model.

- Formatted Timestamps: All dates and times are formatted to ensure a readable and user-friendly display when querying data.

### Sample CRUD Operations

- Create a User:

`POST http://localhost:3001/api/users`

- Request Body:

`{
  "username": "johndoe",
  "email": "johndoe@example.com"
}`

- Create a Thought:

`POST http://localhost:3001/api/thoughts`

- Add a Reaction to a Thought:

`POST http://localhost:3001/api/thoughts/:thoughtId/reactions`

- Request Body:

`{
  "reactionBody": "This is a reaction",
  "username": "johndoe"
}`

- Add a friend:

`POST http://localhost:3001/api/users/:userId/friends/:friendId`

## Installation and Setup

1. nstall Dependencies: After cloning the repository, run npm install to install all required packages.

2. Setup MongoDB: Make sure MongoDB is installed and running locally or provide a MongoDB Atlas connection string.

3. Environment Variables: Configure your .env file with the necessary MongoDB connection string.

## Credits

### Third-Party Assets

- Insomnia (Optional) for testing API routes

- npm Packages:

    - mongoose

    - express

    - dotenv

All code is original and written by Jedediah Craig Orullian