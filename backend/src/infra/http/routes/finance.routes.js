const { Router } = require('express');
const entryController = require('../../../modules/finance/controllers/entryController');
const authenticatted = require('../middlewares/authenticatted');

const financeRoutes = Router();

financeRoutes.post('/entry', authenticatted, entryController.create);

module.exports = financeRoutes;
