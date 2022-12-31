class Github {
  constructor(client) {
    this.client = client;
    this.repositoryData = null;
  }

  fetch(repoName) {
    this.client.fetchRepositoryData(repoName, (repoData) => {
      this.repositoryData = repoData;
    });
  }

  getRepoData() {
    return this.repositoryData;
  }
}

module.exports = Github;
