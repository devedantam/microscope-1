Template.postSubmit.events({
  'submit form': function(e) {

    e.preventDefault();
  //  console.log("template data is"+template.data);
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    };
    post._id = Posts.insert(post);
    console.log('inserted and id is '+post._id);
    FlowRouter.go('/posts/:post._id');
  }
});
