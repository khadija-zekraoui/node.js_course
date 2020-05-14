class HomeController {
  async index(req, res) {
    return res.send({ message: "Hello World!!" });
  }
}

module.exports = new HomeController();
