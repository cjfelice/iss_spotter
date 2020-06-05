// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });


// fetchCoordsByIP('162.245.144.188', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Coords:' , coords);
// });

// fetchISSFlyOverTimes({ latitude: '37.37620', longitude: '-122.18260' }, (error, data) => console.log(error, data));
const timeTranslate = function(times) {
  for (const time of times) {
    const calendar = new Date(0);
    calendar.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${calendar} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  timeTranslate(passTimes);
});