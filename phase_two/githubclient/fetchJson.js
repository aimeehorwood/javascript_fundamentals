const { get } = require("callback-fetch");

const handleReceivedResponse = (url) => {
  const response = JSON.parse(url);
  console.log(response);
};

get("https://jsonplaceholder.typicode.com/todos", handleReceivedResponse);
