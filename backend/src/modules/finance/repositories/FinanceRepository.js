const mongo = require('../../../infra/database/mongoose');

class FinanceRepository {
  async add(data) {
    const moviment = await mongo.collection('moviments').insertOne(data);

    const movimentFormatted = {
      id: moviment.ops[0]._id,
      ...moviment.ops[0],
    };

    delete movimentFormatted._id;

    return movimentFormatted;
  }

  async movimentbyUser(id, type, frequency) {
    const moviments = await mongo
      .collection('moviments')
      .find({
        user_id: { $eq: id },
        type: { $eq: type },
        frequency: { $eq: frequency },
      })
      .toArray();

    return moviments;
  }
}

module.exports = FinanceRepository;
