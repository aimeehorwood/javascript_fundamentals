const { get } = require("callback-fetch");

fetchRepositoryInfo = (body) => {
  const receivedResponse = JSON.parse(body);
  console.log(receivedResponse);
};

get("https://api.github.com/repos/sinatra/sinatra", fetchRepositoryInfo);

module.exports = fetchRepositoryInfo;
