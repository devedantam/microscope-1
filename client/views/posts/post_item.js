Template.postItem.helpers({


  url: function(){
    //return Posts.findOne(this.url);
    return Posts.findOne(this._id);
  },
  title:function(){
    return Posts.findOne(this._id);
  },

  message: function(){
    return Posts.findOne(this._id);
  }

});


/* Template.postItem.onCreated({
  var template = this;
  template.autorun(function() {
    template.subscribe('posts');
  })
});
*/
