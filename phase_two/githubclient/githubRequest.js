// file: githubRequest.js

// Load the `get` function.
const { get } = require("callback-fetch");

// Create a "handler" callback function.
// const handleReceivedResponse = (body) => {
//   console.log('body:', body);
// }

const handleReceivedResponse = (body) => {
  const responseObject = JSON.parse(body);
  console.log(responseObject);
};

// Call `get` and provide the handler callback function.
// This will get called by `get` when the response is received.
get("https://api.github.com/repos/sinatra/sinatra", handleReceivedResponse);

// get(url, (body) => {
//   console.log("body:", body);
// });
