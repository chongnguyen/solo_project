var express = require('express');
var router = express.Router();

import newsController from '../controllers/newsController';

router.get(
    '/',
    (req, res, next) => {
        next();
    },
    newsController.index,
);
export default router;
