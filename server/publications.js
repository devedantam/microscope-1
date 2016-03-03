Meteor.publish('posts',function(){
  return Posts.find({},{
    fields: {
      title: true
    }
  });
});
