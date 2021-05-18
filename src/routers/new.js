var express = require('express')
var router = express.Router()

import newsController from '../controllers/newsController';

router.get('/', newsController.index);
export default router;