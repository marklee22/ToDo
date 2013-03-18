var app = app || {};

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  initialize: function() {
    console.log('The Todo model has been initialized');
  }
});

app.TodoList = Backbone.Collection.extend({
  model: Todo,

  initialize: function() {
    console.log("Initialized TodoList");
  },

  addOne: function(todo) {
    var view = new TodoView({model: todo});
    $('#todo').append(view.render().el);
  }
});

app.Todos = new TodoList();

app.TodoView = Backbone.View.extend({
  tagName: 'div',
  template: _.template($('#todo-item').html()),  //"hello: <%= title %>"), //

  initialize: function() {
    this.listenTo(this.model,'change',this.render);
    console.log('Initialized TodoView');
  },

  render: function() {
    $('#todo-list').append(this.template(this.model.toJSON()));
    return this;
  }
});

app.AppView = Backbone.View.extend({
  el: '#todoapp',

  initialize: function() {
    this.listenTo(app.Todos, 'add', 'addOne');
  },

  addOne: function(todo) {
    var view = new app.TodoView({model: todo});
    $('#todo-list').append(view.render().el);
  }
});

$(function() {
  console.log('started ready');
  todo1 = new Todo();
  todo1.set('title','THIS IS A TEST');
  todoView = new TodoView({model: todo1});
  todoView.render();
  todo2 = new Todo();
  todo2.set('title','THIS IS A TEST2');
  todoView2 = new TodoView({model: todo2});
  todoView2.render();
  console.log('end ready');
  app = new App();
  console.log(app.TodoList);
  app.initialize();
});