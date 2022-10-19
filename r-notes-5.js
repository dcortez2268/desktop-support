/***************************************************************************
Course Title: React Front to back 2022
Author: Traversy Media
Description: Project 5, Desktop support app. Building to help practice MERN stack and Redux
***************************************************************************/

// MongoDB Atlas: MongoDB in the cloud as opposed to being installed locally
// Compass: desktop application that you can use to access and update your MongoDB databases
// Redux: global state manager for React, installed Redux DevTools for Chrome


npm i express dotenv mongoose colors bcryptjs //bcryptjs is used to hash passwords, mongoose is ODM, express is framework for js environment, dotenv is for environment variables, colors is for lines in console to be different colors

npm i -D nodemon // allows server to hot reload for development env
"server": "nodemon backend/server.js" //add to scripts in package.json

// it is cleaner to have routes file that lists route and points to controller function that provides functionality rather than having all of the business logic inside the routes file

// JSON web tokens: 
// allows you to protect routes
npm i jsonwebtoken

npx create-react-app frontend --template redux 
//creates react app with redux boilerplate
rm -rf .git //removes git repository created by create-react-app

npm i concurrently//allows us to run two npm scripts at same time

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' // toolkit allows us to not have to handle everything manually like when using redux only

slices:
// are a way to keep all of the state in one place, and any actions or functions
createAsyncThunk() // allows you to make calls to backend asynchronously and does a lot more
//has reducers to manipulate state 
//has extraReducers to manipulate state further and add cases

// actions, like registering a user
// diff, whenever state changes

import { useSelector, useDispatch } from 'react-redux'
useSelector() // useSelector reducer allows us to bring values from global state
const dispatch = useDispatch()
dispatch(fnName) // allows us to send function call w args back to authService.js file

// todo: document flow from page to slice to service 

