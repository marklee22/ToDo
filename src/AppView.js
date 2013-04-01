AppView = Backbone.View.extend({
  el: '#todo-app',

  initialize: function() {

  },

  addOne: function(todo) {
    var view = new TodoView({model: todo});
    $('#todo-list').append(view.render().el);
  },

  render: function() {
    // console.log(this.model.get('todos'));
    this.$el.html(new TodoListView({collection: this.model.get('todos')}).render());
  }
});
