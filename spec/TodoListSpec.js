describe("TodoList", function() {
  var todo1, todo2, todos;

  beforeEach(function() {
    var todoData = [
      {
        completed: false,
        text: 'todo1 note'
      },
      {
        completed: true,
        text: 'todo2 note'
      }
    ];
    todos = new TodoList(todoData);
  });

  it("has the proper amount of notes", function() {
    expect(todos.length).toBe(2);
  });

  it("has all the todos in the collection", function() {
    expect(todos.at(0).get('completed')).toBe(false);
    expect(todos.at(0).get('text')).toBe('todo1 note');
    expect(todos.at(1).get('completed')).toBe(true);
    expect(todos.at(1).get('text')).toBe('todo2 note');
  });

});