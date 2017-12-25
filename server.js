// In JavaScript that gets run by Node, you can import
// installed libraries using the require function. You
// can also import and export your own files as well —
// we'll do this in a future lesson.

// http is a library that lets listen for and respond to
// messages that follow the Hypertext Transfer Protocol.
const http    = require('http');

// Express is a framework that makes it easy to interpret
// HTTP requests and build and send HTTP responses.
const express = require('express');


// Calling express() returns a function that can handle any
// HTTP request that gets sent to our server.
//
// Remember, functions are just special objects. The function
// that express() returns actually has functions on it that
// you can call, like app.get and app.post.
const app = express();

// app.get allows us to handle GET requests to a certain path.
// We pass in two arguments — the path we want to handle get
// requests for and a function that handles the request.
//
// The function we pass in takes two arguments — req and res.
// These are passed to this function by Express.
app.get('/', (req, res) => {
  // res is an object that we can use to send responses back
  // to the requester. We can use res.send to send back raw
  // data — in this case, we send back a string.
  res.send('Hello, StreetCode 👋');
});

// We have to choose a "port" to run our server from. Programs
// that are connected to the Internet run out of a port on a
// computer's operating system.
//
// We'll learn about process.env later.
const port = Number(process.env.PORT || 4000);

// http.createServer is a function that takes in another function.
// The function passed to createServer (app, in this case), gets
// passed two special objects — req for reading an incoming request
// and res for sending back a response.
//
// On their own, these objects aren't super easy to work with.
// However, Express uses these objects to pass us enhanced req
// and res objects that make our job a lot easier.
const server = http.createServer(app).listen(port, () => {
  // The listen function calls his function after the
  // server starts running. We just print out a little
  // information about the server.
  const addr = server.address();
  console.log(`Listening at port ${addr.port}`);
});
