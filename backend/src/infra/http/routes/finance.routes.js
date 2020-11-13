const { Router } = require('express');
const entryController = require('../../../modules/finance/controllers/entryController');
const authenticatted = require('../middlewares/authenticatted');

const financeRoutes = Router();

financeRoutes.post('/moviment', authenticatted, entryController.create);

module.exports = financeRoutes;
