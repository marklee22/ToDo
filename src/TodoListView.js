var TodoListView = Backbone.View.extend({

  render: function() {

    // Detach jQuery handlers before replacing html
    this.$el.children().detach();

    // Re-render the list of all Todos
    return _.map(this.collection.models, function(item, index) {
      return new TodoEntryView({model: item}).render();
    }, this);
  }

});