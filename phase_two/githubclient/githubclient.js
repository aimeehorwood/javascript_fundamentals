const { get } = require("callback-fetch");

class GithubClient {
  fetchRepositoryData = (repo, callback) => {
    get(`https://api.github.com/repos/${repo}`, (data) => {
      const responseObject = JSON.parse(data);
      callback(responseObject);
    });
  };
}

module.exports = GithubClient;
