const MovimentRegister = require('../service/MovimentRegister');
const FinanceRepository = require('../repositories/FinanceRepository');

class MovimentController {
  async create(req, res) {
    const { title, type, date, frequency, amount, description } = req.body;

    if (!title) return res.json({ error: 'title is missing' });
    if (!type) return res.json({ error: 'type is missing' });
    if (!date) return res.json({ error: 'date is missing' });
    if (!frequency) return res.json({ error: 'frequency is missing' });
    if (!amount) return res.json({ error: 'amount is missing' });
    if (!description) return res.json({ error: 'description is missing' });

    const financeRepository = new FinanceRepository();
    const movimentRegister = new MovimentRegister(financeRepository);
    const finance = await movimentRegister.execute({
      ...req.body,
      user_id: req.user.id.sub,
    });

    return res.json(finance);
  }

  async delete(req, res) {
    const idMoviment = req.params.id;
    return res.json(idMoviment);
  }
}

module.exports = new MovimentController();
