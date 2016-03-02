Template.postItem.helpers({


  url: function(){
    return Posts.findOne(this.url);
  },
  title:function(){
    return Posts.findOne(this.title);
  },

  domain: function(){
    return Posts.findOne(this.message);
  }

});


/* Template.postItem.onCreated({
  var template = this;
  template.autorun(function() {
    template.subscribe('posts');
  })
});
*/
