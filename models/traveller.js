const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allTransport = this.journeys.map((journey) => {
    return journey.transport;
  });

// const uniqueTransports = [];
// for (transport of allTransport){
//   if (!uniqueTransports.includes(transport)){
//     uniqueTransports.push(transport);
//   };
// }

const uniqueTransports = []

allTransport.forEach((transport) => {
  if (!uniqueTransports.includes(transport)){   uniqueTransports.push(transport);
  };
});

return uniqueTransports;



};


module.exports = Traveller;
