import path from 'path';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import handlebars from 'express-handlebars';

import router from './routers';

const app = express();
const port = 3000;

// logger http
app.use(morgan('combined'));
app.use(urlencoded({
  extended: true,
}));
app.use(json());

// static folder
console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));



// router 
router(app);

// (ip - hostname)
// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});