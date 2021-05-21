var express = require('express');
var router = express.Router();

import siteController from '../controllers/siteController';

router.get('/', siteController.home);
router.get('/search', siteController.search);

export default router;
