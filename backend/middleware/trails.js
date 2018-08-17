

exports.addTrail = function(req, res, next) {
  res.render("addtrail");
}

exports.showTrails = function(req, res, next) {
  res.render("trails");
}

exports.showAllTrails = function(req, res, next) {
  res.render("showall");
}