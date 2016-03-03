Accounts.onLogin(function(){
  var redirect = Session.get("redirectAfterLogin");
  console.log("redirect on login " + redirect);

  if(redirect && redirect !== '/login')
    FlowRouter.go('/');

});
