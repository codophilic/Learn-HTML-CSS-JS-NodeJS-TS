const http = require('http');


// /**
//  * Client Side Scripting
//  */

// // GET Request Details
// const RequestDetails = {
//   hostname: 'jsonplaceholder.typicode.com', // Server address
//   path: '/users',                        // Resource path
//   method: 'GET',                           // HTTP method
// };

// // Sending the request
// const req = http.request(RequestDetails, (res) => {
//   console.log(`Status Code: ${res.statusCode}`); // Log the status code

//   // Collect response data
//   let data = '';
//   res.on('data', (chunk) => {
//     data += chunk; // Add each chunk of data to the 'data' variable
//   });

//   // When the entire response is received
//   res.on('end', () => {
//     console.log('Response Data:', data); // Log the complete response
//   });
// });

// // Handle errors
// req.on('error', (error) => {
//   console.error(`Error: ${error.message}`);
// });

// // End the request (important for POST/PUT)
// req.end();


// // POST Request Details
// const postData = JSON.stringify({ title: 'foo', body: 'bar', userId: 1 });

// const postReqDetails = {
//   hostname: 'jsonplaceholder.typicode.com',
//   path: '/posts',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': Buffer.byteLength(postData),
//   },
// };

// const postreq = http.request(postReqDetails, (res) => {
//   let data = '';
//   res.on('data', (chunk) => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     console.log('Response:', data);
//   });
// });

// postreq.on('error', (error) => {
//   console.error(`Error: ${error.message}`);
// });

// // Write data to request body
// postreq.write(postData,()=>{
//     console.log("POST Request Sent");
// });
// postreq.end();


/**
 * Server Side Scripting
 */

// // Create the server
// const server = http.createServer((req, res) => {
//   // `req` is the request from the client
//   // `res` is the response we send back to the client

//   // Log the request method and URL
//   console.log(`Request method: ${req.method}, URL: ${req.url}`);

//   // Send a response
//   res.statusCode = 200; // HTTP status code for "OK"
//   res.setHeader('Content-Type', 'text/plain'); // Set response type
//   res.end('Hello, this is your Node.js server!'); // Send response body
// });

// // Make the server listen on a port (e.g., 3000)
// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });


// Create the server
const server = http.createServer((req, res) => {
    // `req` is the request from the client
    // `res` is the response we send back to the client

    let clientdata=[]
    req.on('data',(contents)=>{
        clientdata.push(contents);
    });


    req.on('end', () => {
        console.log(clientdata);
        clientdata = Buffer.concat(clientdata).toString();
        console.log(clientdata);
        let userName = 'Unknown User';
        if (clientdata) {
          userName = clientdata.split('=')[1];
        }
        res.setHeader('Content-Type', 'text/html');
        res.write(
          `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
        );
        res.end();
      });
  });
  
  // Make the server listen on a port (e.g., 3000)
  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });