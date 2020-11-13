class EntryController {
  async create(req, res) {
    return res.send('teste!');
  }
}

module.exports = new EntryController();
