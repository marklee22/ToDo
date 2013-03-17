var ToDo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  initialize: function() {
    console.log('The ToDo model has been initialized');
  },

  // render: function() {

  // }
});
// debugger;
var ToDoList = Backbone.Collection.extend({
  model: ToDo,

  initialize: function() {
    console.log("Initialized ToDoList");
  },

  addOne: function(todo) {
    var view = new ToDoView({model: todo});
    $('#todo').append(view.render().el);
  },
});

var ToDoView = Backbone.View.extend({
  tagName: 'div',
  template: _.template($('#todo-item').html()),  //"hello: <%= title %>"), //

  initialize: function() {
    this.listenTo(this.model,'change',this.render);
    console.log('Initialized ToDoView');
  },

  render: function() {
    $('#todo').append(this.template(this.model.toJSON()));
    return this;
  }
});

var App = function() {
  $('button').bind()
}

$(function() {
  console.log('started ready');
  todo1 = new ToDo();
  todo1.set('title','THIS IS A TEST');
  todoView = new ToDoView({model: todo1});
  todoView.render();
  todo2 = new ToDo();
  todo2.set('title','THIS IS A TEST2');
  todoView2 = new ToDoView({model: todo2});
  todoView2.render();
  Todos = new ToDoList();
  console.log('end ready');
});