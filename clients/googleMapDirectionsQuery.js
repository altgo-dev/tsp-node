'use strict';

class GoogleMapDirectionsQuery {

  constructor(routeOptimizerQuery) {
    const waypoints = routeOptimizerQuery.tasks.map(function(task) {
      return {
        lat: task.lat,
        lng: task.lng,
      };
    });

    let tasklen = routeOptimizerQuery.tasks.length;
    let lastWaypoint = routeOptimizerQuery.tasks[tasklen - 1];
    let routingType = routeOptimizerQuery.routingType;

    this.origin = routeOptimizerQuery.home;
    this.destination = this.origin;
    if (routingType === 'AtoZ') {
      this.destination = lastWaypoint;
    } else if (routingType === 'RoundTrip') {
      this.destination = this.origin;
    }
    this.waypoints = waypoints;
    this.optimize = routeOptimizerQuery.optimize || true;
    this.mode = routeOptimizerQuery.mode || 'driving';
  }
}

module.exports = GoogleMapDirectionsQuery;
