loggedUsers = FlowRouter.group({
  triggersEnter: [function(){
    if(Meteor.loggingIn() || Meteor.userId())
    {
        //FlowRouter.go('/');
    }
  }]
});

 publicUsers = FlowRouter.group({
  triggersEnter: [function() {
    if(!Meteor.loggingIn() && !Meteor.userId()){



    //  BlazeLayout.render('layout',{ content: 'accessDenied'});


    }
  }]
});



FlowRouter.route('/',{
  name:'postList',
  action: function(){
    BlazeLayout.render('layout',{ content: 'postsList'});
  }
});



FlowRouter.route('/posts/:postId',{
  name: 'postListEach',
  action: function(params){
    console.log("post Id is "+params.postId);
    BlazeLayout.render('layout',{ content:'postPage',params:  params.postId});
  },



});

FlowRouter.route('/posts',{
  name: 'postpage',
  action: function(params){
    BlazeLayout.render('layout',{content: 'postPage'});
  }
});




FlowRouter.route('/submit',{
  name: 'submit',
  action: function(params){
    if(Meteor.loggingIn() || Meteor.userId())
    {

        BlazeLayout.render('layout',{ content:'postSubmit',params: params});
    }
    else
      {
          var route = FlowRouter.current();
          if(route.route.name !== 'login'){
            FlowRouter.go('/');
        
            Session.set('redirectAfterLogin', route.path);
          }
          BlazeLayout.render('layout',{ content:'accessDenied'});

      }


  }
});
