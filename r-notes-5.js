/***************************************************************************
Course Title: React Front to back 2022
Author: Traversy Media
Description: Project 5, Desktop support app. Building to help practice MERN stack and Redux
***************************************************************************/

// MongoDB Compass: GUI that allows us to communicate and update MongoDB collections
npm i express dotenv mongoose colors bcryptjs //bcryptjs is used to hash passwords, mongoose is ODM, express is framework for js environment, dotenv is for environment variables, colors is for editor styling?

npm i -D nodemon // allows server to hot reload
"server": "nodemon backend/server.js" //add to scripts in package.json

// it is cleaner to have route that points to controller function that provides functionality rather than having all of the business logic inside the route
