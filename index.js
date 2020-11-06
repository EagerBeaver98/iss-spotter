const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work.", error);
//     return;
//   } else {
//     console.log("Returned IP:", ip);
//   }
// });

// fetchCoordsByIP("75.158.1.235", (error, data) => {
//   if (error) {
//     console.log("It didn't work: ", error);
//     return;
//   } else {
//     console.log(data);
//   }
// });

// const staticCoordinates = { latitude: 51.0314, longitude: -114.133 };

// fetchISSFlyOverTimes(staticCoordinates, (error, ISSTimes) => {
//   if (error) {
//     console.log("It didn't work: ", error);
//     return;
//   } else {
//     console.log(ISSTimes.response);
//   }
// });