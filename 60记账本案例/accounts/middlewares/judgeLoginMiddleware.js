// 定义一个中间件，判断用户是否登录
module.exports = function judgeLoginMiddleware(req,res,next){
    if(!req.session.username){
      // 跳转到登录页面
      res.render('login');
    }
    next();
  }