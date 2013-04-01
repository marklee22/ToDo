describe("TodoViewSpec", function() {
  var todoView;

  beforeEach(function() {
    var todoData = {
      completed: false,
      text: 'this is a todo'
    };

    todoView = new TodoView({ model: new Todo(todoData) });
  });

  xit("re-renders when view is clicked", function() {

  });
});