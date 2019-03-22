'use strict';

class GoogleMapDirectionsQuery {

  constructor(routeOptimizerQuery) {
    const waypoints = routeOptimizerQuery.tasks.map(function (task) {
      return {
        lat: task.lat,
        lng: task.lng,
      };
    });

    let tasklen = routeOptimizerQuery.tasks.length;
    let routingType = routeOptimizerQuery.routingType;
    this.origin = routeOptimizerQuery.home;
    if (!routingType) {
      this.destination = routeOptimizerQuery.home;
    } else if (routingType === 'AtoZ') {
      this.destination = routeOptimizerQuery.tasks[tasklen - 1];
    } else if (routingType === 'RoundTrip') {
      this.destination = routeOptimizerQuery.home;
    } else {
      this.destination = routeOptimizerQuery.home;
    }
    this.waypoints = waypoints;
    this.optimize = true;
    this.mode = 'driving';
  }
}

module.exports = GoogleMapDirectionsQuery;
