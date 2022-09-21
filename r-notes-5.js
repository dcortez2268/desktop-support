/***************************************************************************
Course Title: React Front to back 2022
Author: Traversy Media
Description: Project 5, Desktop support app. Building to help practice MERN stack and Redux
***************************************************************************/

// MongoDB Atlas: basically just MongoDB in the cloud as opposed to being installed locally
// Compass: desktop application that you can use to access and update your MongoDB databases
// Redux: helps us manage global state, installed Redux DevTools for Chrome


npm i express dotenv mongoose colors bcryptjs //bcryptjs is used to hash passwords, mongoose is ODM, express is framework for js environment, dotenv is for environment variables, colors is for editor styling?

npm i -D nodemon // allows server to hot reload
"server": "nodemon backend/server.js" //add to scripts in package.json

// it is cleaner to have route that points to controller function that provides functionality rather than having all of the business logic inside the route


