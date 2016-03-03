Template.postsList.onCreated(function() {
  var instance = this;
  instance.autorun(function () {
    instance.subscribe('posts')
     });
  
});

Template.postsList.helpers({
  posts: function(){
    //return Posts.find({}, {sort: {submitted: -1}});
    return Posts.find().fetch();

  }
});
