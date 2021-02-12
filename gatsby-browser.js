"use strict";

exports.onRouteUpdate = function (_ref, pluginOptions) {
  var location = _ref.location;

  // Don't track while developing.
  if (process.env.NODE_ENV === "production" && typeof window.ym !== "undefined" && location) {
    var pathname = location.pathname,
        search = location.search,
        hash = location.hash;

    window.ym(pluginOptions.trackingId, "hit", pathname + search + hash);
  }
};