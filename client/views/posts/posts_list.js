var postsData = [
  {
    title: 'Introducing Telescope',
    author: 'sacha gerif',
    url: "http://sachagreif.com/introducing-telescope/"
  },
  {
    title: 'Meteor',
    author: 'Tom coleman',
    url: "http://meteor.com"
  },
  {
    title: 'The Meteor Book',
    author: 'Tom coleman',
    url: "http://themeteorbook.com"
  }
];
Template.postsList.helpers({
  posts: postsData
});
