import newsRouter from './new';
import siteRouter from './site';

export default function(app){
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
};