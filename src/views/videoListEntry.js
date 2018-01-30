var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
    //this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
