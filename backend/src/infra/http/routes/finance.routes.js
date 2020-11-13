const { Router } = require('express');
const entryController = require('../../../modules/finance/controllers/MovimentController');
const authenticatted = require('../middlewares/authenticatted');

const financeRoutes = Router();

financeRoutes.post('/moviment', authenticatted, entryController.create);
financeRoutes.delete('/moviment/:id', authenticatted, entryController.delete);

module.exports = financeRoutes;
