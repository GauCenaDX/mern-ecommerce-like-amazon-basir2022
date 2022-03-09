# React Course 2022 - MERN ECommerce Like Amazon In 6 Hours

Author: Coding with Basir  
Date: Mar 02, 2022  

Started: Mar 06, 2022  
End: TBU  

This is a code along session from a YouTube tutorial by Coding with Basir:
https://www.youtube.com/watch?v=CDtPMR5y0QU  

## Backend:

### Packages:

### Notes:

## Frontend:

### Packages:

### Setting up whitelist for the localhost

### Notes:


## Lessons:

### 1. Introduction

### 2. Tools

### 3. Create React app
### 4. Push to GitHub

### 5. List Products

1. Create product array
2. Add product images
3. Render products
4. Style products

### 6. Add routing

1. npm i react-router-dom
2. create route for home screen
3. create router for product screen

### 7. Create Node.JS Server

1. Run npm init in backend's root folder
2. Update package.json set type: module to use 'import module' in ES6 instead of 'require'
3. Create Server.js
4. 'npm install express' for web server
5. Imports express from 'express'
6. Move data.js from frontend to backend
7. Create route for /api/products. This return products' data to the frontend
8. Optional: install JSON Viewer (tulios) for Chrome browser.
9. npm install nodemon --save-dev
10. Add "start": "nodemon server.js"
11. Run npm start

### 8. Fetch products from backend

Get access to the backend API from the HomeScreen component, and use Axios to fetch data from backend.

1. Set proxy in package.json -> enable frontend to access backend
    * Add "proxy": "http://localhost:3001" to package.json in frontend
2. 'npm install axios' in frontend -> to fetch data from backend
3. Use state hook
4. Use effect hook
5. Use reducer hook