const User = require("../models/User");
class NewsController {
  // [get] / news
  index(req, res) {
    User.find({}, function (err, courses) {
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: "Error" });
      }
    });
  }

  //[get] /news/:slug
  show(req, res) {
    res.send("news detail");
  }
}

module.exports = new NewsController();
