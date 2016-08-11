var axios = require('axios')

var id = "client_id"
var sec = "client_secret"
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos'+ param + '&per_page=100')
}

function getTotalStars(repos) {
    return repos.data.reduce(function(prev, curr) {
        return prev + curr.stargazers_count
    }, 0)
}

function getPlayersData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function(totalStars) {
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
}

function calculateScores(players) {
    return players.map(function(p) {
        return p.followers * 3 + p.totalStars
    })
}


var helpers = {
    getPlayersInfo: function(players) {
        return axios.all(players.map(function(username) {
            return getUserInfo(username)
        })).then(function(info) {
            return info.map(function(user) {
                return user.data
            })
        }).catch(function(err) {
            console.warn('Error in getPlayersInfo', err);
        })
    },

    battle: function(players) {
        return axios.all(players.map(function(player) {
            return getPlayersData(player)
        })).then(calculateScores)
          .catch(function(err) {
                console.warn('Error in battle', err);
            })
    }
}

module.exports = helpers
