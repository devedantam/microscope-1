Template.postSubmit.events({
  'submit form': function(e) {

    e.preventDefault();
  //  console.log("template data is"+template.data);


    if(!$(e.target).find('[name=url]').val() == "" && !$(e.target).find('[name=title]').val() == "" &&
   !$(e.target).find('[name=message]').val() == "" )
  {
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    };

    Meteor.call('post',post, function(error,id){
      if(error)
        return alert(error.reason);

      //FlowRouter.go('/posts/' + post._id);
      console.log("the is is "+id);
    });


    FlowRouter.go('/');
  }

  else {
    alert('Fill all fields');
  }

}
});
