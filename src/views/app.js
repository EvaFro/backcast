var AppView = Backbone.View.extend({

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {

    
    this.$el.html(this.template());

    new VideoListView({
      el: $('.list'),
      collection: this.collection
    }).render();

    new VideoPlayerView({
      el: $('.player')
    }).render();

    new SearchView({
      el: $('.search')
    }).render();

    return this;
  },
  
  template: templateURL('src/templates/app.html')

});
