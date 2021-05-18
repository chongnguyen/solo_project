class siteController{
  home(req, res){
    res.render('home');
  }

  search(req, res){
    res.render('search');
  }
}
export default new siteController;