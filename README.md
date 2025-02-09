# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: a lack of error handling for invalid input.  The `bug.js` file shows an example of a route that can crash if it receives an invalid user ID.  The `bugSolution.js` file shows how to fix the issue by adding proper error handling.

## Bug

The `bug.js` file contains an Express.js route that attempts to access a user from an array using the `userId` from the request parameters.  If the `userId` is not valid (e.g., not a number, or out of bounds), this will cause an error.  This error will crash the application unless it's properly caught.

## Solution

The `bugSolution.js` file shows how to improve the code by adding error handling. This version checks if `userId` is a valid number and within the bounds of the `users` array before attempting to access the user data. If not, it sends a 404 response.