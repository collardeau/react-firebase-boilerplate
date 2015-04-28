var appConstants = require('../constants/appConstants');
var axios = require('axios');

var id = "3ea6bfb963ab17f181d4";
var sec = "ea6ce34062a17c9026559fd240393acf8c4230e6";
var param = "?client_id=" + id + "&client_secret=" + sec;

var githubUtils = {
  getBio: function(username){
    var url = "https://api.github.com/users/" + username + param;
    return axios.get(url);
  },
  getRepos: function(username){
    var url = "https://api.github.com/users/" + username + "/repos" + param;
    return axios.get(url);
  }
};

module.exports = githubUtils;