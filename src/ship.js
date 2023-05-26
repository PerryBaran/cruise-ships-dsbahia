function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
}

Ship.prototype.setSail = function (currentPort) {
  const itinerary = this.itinerary;
  const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

  if (currentPortIndex === itinerary.ports.length - 1) {
    throw new Error("Cannot set sail. End of itinerary reached.");
  }

  this.previousPort = this.currentPort;
  this.currentPort = null;
};

Ship.prototype.dock = function (newPort) {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

  this.currentPort = itinerary.ports[previousPortIndex + 1];
};

module.exports = Ship;
