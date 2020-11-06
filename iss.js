const request = require('request');

const fetchMyIP = (callback) => {
  request('https://geo.ipify.org/api/v1?apiKey=at_baQ5AaOLZcatvi0LyLMGNPHdCWu7A', (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(Error(`Status code ${response.statusCode} when fetching IP. Response: ${body}`), null);
    } else {
      callback(null, data.ip);
    }
  });
};

const fetchCoordsByIP = (callback) => {
  request('https://geo.ipify.org/api/v1?apiKey=at_baQ5AaOLZcatvi0LyLMGNPHdCWu7A', (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(Error(`Status code ${response.statusCode} when fetching lat/long. Response: ${body}`), null);
    } else {
      const obj = {
        latitude: data.location.lat,
        longitude: data.location.lng,
      };
      callback(null, obj);
    }
  }
  );
};

const fetchISSFlyOverTimes = (coords, callback) => {
  const latitude = coords.latitude;
  const longitude = coords.longitude;
  request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(Error(`Status code ${response.statusCode} when fetching ISS flyovers. Response ${response}`), null);
    } else {
      const data = JSON.parse(body);
      callback(null, data);
    }
  });
};

const nextISSTimeForMyLocation = (callback) => {
  fetchCoordsByIP((error, coords) => {
    if (error) {
      return callback(error, null);
    }
    fetchISSFlyOverTimes(coords, (error, nextPasses) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, nextPasses);
    });
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimeForMyLocation };