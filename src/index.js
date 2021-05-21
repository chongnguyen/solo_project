import path from 'path';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import handlebars from 'express-handlebars';

import router from './routers';

const app = express();
const port = 3000;

// logger http - middleware
app.use(morgan('dev'));
app.use(
    urlencoded({
        extended: true,
    }),
);
app.use(json());

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// router
router(app);

// middleware handle error
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// (ip - hostname)
// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
