const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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