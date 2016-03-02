/* Flow.Router('/',{
  subscriptions: function(){

    this.register('',Meteor.subscribe('posts'));
  }
});

*/

FlowRouter.route('/',{
  name:'postList',
  action: function(){
    BlazeLayout.render('layout',{ content: 'postList'});
  }
});


FlowRouter.route('/posts/:postId',{
  name: 'postListEach',
  action: function(params){
    console.log("post Id is "+params.postId);
    BlazeLayout.render('layout',{ content:'postPage',params:  Posts.findOne(params.postId)});
  }

});


FlowRouter.route('/submit',{
  name: 'submit',
  action: function(params){
    BlazeLayout.render('layout',{ content:'postSubmit',params: params});
  }
});
