# React Course 2022 - MERN ECommerce Like Amazon In 6 Hours

Author: Coding with Basir  
Date: Mar 02, 2022  

Started: Mar 06, 2022  
End: TBU  

This is a code along session from a YouTube tutorial by Coding with Basir:
https://www.youtube.com/watch?v=CDtPMR5y0QU  

Git Repository:
https://github.com/basir/mern-amazona/blob/master/backend/data.js

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

### 8. Fetch Products from Backend

Get access to the backend API from the HomeScreen component, and use Axios to fetch data from backend.

1. Set proxy in package.json -> enable frontend to access backend
    * Add "proxy": "http://localhost:3001" to package.json in frontend
2. 'npm install axios' in frontend -> to fetch data from backend
3. Use state hook
4. Use effect hook

### 9. Manage State by Reducer Hooks

Replace useState with useReducer to manage complex state in HomeScreen component.

Manage State by Reducer Hook:

  1. Define reducer
  2. Update fetch data
  3. Get state from useReducer
  4. Install use-reducer-logger in frontend to keep track of states
      > npm install use-reducer-logger --force
  5. Show loading box | error message | products

### 10. Add bootstrap UI Framework

1. 'npm install react-bootstrap bootstrap' in frontend
2. 'npm install react-router-bootstrap' in frontend for LinkContainer
3. Update App.js (using Layout and Components from react-bootstrap)
    1. Change to Navbar in header using bootstrap Container
    2. Remove css for header in index.css
    3. Import bootstrap css in index.js
    4. Put main contents in bootstrap Container
4. Add footer
5. Apply bootstrap css classes: text-center, d-flex, flex-column

### 11. Create Product and Rating Component

1. Create Product component
    - Change product list from simple <div> to bootstrap <Card>
2. Create Rating component
3. Import font awesome in index.html
    > https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css

### 12. Create Product Details Screen

1. Fetch product from backend
    - Create new backend API to get product info based on slug
2. Create 3 columns for product image, info and action
3. 'npm install react-helmet-async' to change website metadata such as title

### 13. Create Loading and Message Component

1. Create LoadingBox component using Spinner component from bootstrap
2. Create MessageBox component using Alert component from bootstrap
3. Create utils.js to define getError function
4. Use LoadingBox and MessageBox in HomeScreen and ProductScreen

### 14. Implement Add to Cart

1. Create React Context to store cart items in global state
    1. Create Store.js
2. Define reducer
3. Create store provider
4. Implement add to cart button click handler

### 15. Complete Add to Cart Functionality

Now, when we add the same item into cart, the item won't be added as a duplicated item, instead the quantity of the exist item in cart will increase.

1. Add unique id for each product in data.js
2. Check cart's current items before add the item into cart
    1. Check exist item in the cart
    2. Check count in stock in backend
3. Use reduce() to calculate item quantity

    > // a = accumulator, c = current item, 0 = accumulator default value <br />
    > reduce((a, c) => a + c.quantity, 0)

### 16. Create Cart Screen

<img src="./images/cart-screen-img-v1.jpg" alt="cart-screen-image" width="600" />

1. Create CartScreen.js
2. Create 2 columns:
    - Display items list
    - Create action column
3. Create a route to Cart Screen in App.js
4. Update addToCartHandler() in ProductScreen.js to redirect user to Cart Screen
    - Use useNavigate from react-router-dom

### 17. Complete Cart Screen

1. Click handler for inc/dec item
2. Click handler for remove item
3. Save cart Item in local storage
4. Click handler for checkout
5. Activate 'add to cart' button on Home Screen
6. On Home Screen, if product is out of stock, change 'add to cart' button to 'out of stock'

### 18. Create Sign in Screen

1. Create sign in form
2. Add email and password
3. add sign in button

<img src="./images/signin-screen.jpg" alt="signin-screen-image" width="600" />

### 19. Connect to MongoDB Database

1. create atlas MongoDB database (option 1)
    - amazona - theAMAzona.21
    - My Local Environment
    - IP Address: 0.0.0.0/0 -> access from anywhere
    - Browse Collections -> Add My Own Data
    - DB name: amazona, Collection name: test-collection -> Create
    - Create connection URI: Database -> Connect -> Connect your application -> Driver: Node.js, Version: 4.0 or later -> Copy the connection string
    - Create .env in /backend -> Add connection string here
    - Add .env to .gitignore
2. install local MongoDB database (option 2)
    - Install MongoDB locally
    - Install MongoDB Compass (GUI for MongoDB database)
    - Connectiong string: mongodb://localhost
    - Create the database
    - .env: MONGODB_URI=mongodb://localhost/amazona
3. 'npm install mongoose' in /backend to connect to mondodb database
4. 'npm install dotenv' in /backend to load .env file
5. connect to mongodb database

### 20. Generate Sample Products (Seed Sample Data)

1. Create Product model
2. Create Seed route: localhost:3001/api/seed to generate sample data
3. Create Product route:  to keep all apis related to product
4. Use Route in server.js

### 21. Seed Sample Users

1. Create User model to add user info to database
2. Seed user samples to localhost:3001/api/seed
3. Add user samples in data.js
4. 'npm i bcryptjs' in /backend to encrype password
5. Check users data at localhost:3001/api/seed

### 22. Implement Signin Backend API

http://localhost:3001/api/users/signin

When user send their login information from the frontend, we will do the authentication in the backend and send back a token for authorization.

1. Create user route
    - 'npm install express-async-handler' in /backend
    - Define error handler in server.js
2. Create signin api
3. 'npm install jsonwebtoken' in /backend to generate token
4. Define generateToken
    - Create utils.js in /backend
5. Use userRouter in server.js
6. Install Google Chrome's Advanced REST client to test authorization
    - Access the app here chrome://apps/ -> ARC
    - HTTP request:

      > Method: POST <br />
      > Request URL: http://localhost:3001/api/users/signin <br />
      > Body -> Body content type: application/json <br />
      > { <br />
      >     "email":"admin@example.com", <br />
      >     "password":"123456" <br />
      > }

    - SEND -> expect output:

      > { <br />
      >     "_id": "623c140961f67d45d003b71b", <br />
      >     "name": "admin", <br />
      >     "email": "admin@example.com", <br />
      >     "isAdmin": true, <br />
      >     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNjMTQM2I3MWIiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tI6dHJ1ZSwiaWF0IjoxNjQ4MTA5MTE3LCJleHAiOjE2NTA3MDExMTd9.w8BDCWqxTHo_GfzdUQK-G0CJodDvs8A59rQVo" <br />
      > }

### 23. Complete Signin Screen

1. Handle submit action
    - Create submitHandler function for Signin Form
    - Create 'email' and 'password' states
2. Save token in store and local storage
3. Redirect user to 'redirect' URL
4. Show user name in header
    - Get userInfo from Store's state in App.js
5. Add links to User Profile and Order History
6. Add Sign Out option
    - Remove userInfo in Store
    - Remove userInfo in local storage
7. Prevent logged in user from seeing the signin page by using navigate
8. Change alert style
    - 'npm i react-toastify' in /frontend
9. Replace static error message with error message from backend

### 24. Create Shipping Screen

1. Create form inputs
2. Handle save shipping address
3. Add checkout wizard bar

### 25. Create Sign Up Screen

1. Create input forms
2. Handle Submit
3. Create new backend api for signup in userRoutes.js
4. Add new signup route in App.js

### 26. Implement Select Payment Method Screen

1. Create input forms
2. Handle submit
    - Create submit handler function
    - Add SAVE_PAYMENT_METHOD case to Store
    - Add new payment route in App.js
    - Update signoutHandler to remove paymentMethod value from local storage in App.js
    - Update USER_SIGNOUT case in Store.js

### 27. Create Place Order Screen

1. Create Place Order Screen
2. Add new route to /placeorder in App.js
3. Show Preview Order (Shipping info, Payment method, Items list)
4. Calculate prices and show Order Summary

### 28. Implement Place Order Action

1. Handle Place Order action
2. Create Order Model
3. Create Order api
    - Create Order Route
    - Create isAuth middleware in /backend/utils.js
4. Use Order api in server.js

### 29. Create Order Screen

1. Create OrderScreen.js in frontend
2. Create backend api for order/:id
    - Create a route for Order Screen in App.js
3. Fetch order api in frontend
4. Show order information in 2 columns
5. Get order from backend using order id
