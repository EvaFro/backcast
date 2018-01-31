var VideoListView = Backbone.View.extend({
  // el: '.list',

  // initialize: function() {
  //   //this.render();
  //   //this.listenTo(this.collection, 'change', this.render);
  // },

  render: function() {
    //var videoListView = new VideoListView({model: video});
    this.$el.children().detach();
    this.collection.forEach(this.renderVideo, this);
    //this.collection.forEach(this.)
    this.$el.html(this.template());

    return this;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    //this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
