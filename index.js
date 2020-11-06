const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimeForMyLocation } = require('./iss');


const printPasses = (flyovers) => {
  for (const pass of flyovers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimeForMyLocation((error, flyovers) => {
  if (error) {
    console.log("It didn't work.", error);
    return;
  } else {
    printPasses(flyovers.response);
  }
});


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