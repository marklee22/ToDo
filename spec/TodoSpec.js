describe("Todo", function() {
  var todo;
  beforeEach(function() {
    todoData = {
      completed: true,
      text: 'This task is complete'
    }
    todo = new Todo(todoData);
  });

  it("has functions: 'toggle'", function() {
    expect(todo.toggle).toEqual(jasmine.any(Function));
  });

  it("has default properties", function() {
    todo = new Todo();
    expect(todo.get('completed')).toBe(false);
    expect(todo.get('text')).toBe('Default note');
  });

  it("constructor works", function() {
    expect(todo.get('completed')).toEqual(true);
    expect(todo.get('text')).toEqual('This task is complete');
  });

  it("toggles the status from true to false", function() {
    todo.toggle();
    expect(todo.get('completed')).toBe(false);
  });

  it("toggles the status from false to true", function() {
    todo.set('completed', false);
    todo.toggle();
    expect(todo.get('completed')).toBe(true);
  });

});
