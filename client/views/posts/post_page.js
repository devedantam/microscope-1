Template.postPage.helpers({
  post: function(){
    return Posts.findOne(this._id);
  }

});


/*Template.postPage.onCreated({
  instance.autorun()(function() {
    var limit = instance.limit.get();
    var subscription = instance.subscribe('Posts',limit);
    if(subscription.ready())
    {
      console.log("> Received "+limit+" posts. \n\n")
      instance.loaded.set(limit);
    }
    else {
      console.log("> Subscription is not ready yet. \n\n");
    }
});
  });
*/
