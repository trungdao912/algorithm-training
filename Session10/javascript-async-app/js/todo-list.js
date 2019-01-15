class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    if (!task.validate()) {
      return;
    }

    this.tasks.push(task);

    return task;
  }

  removeTask(task) {
    var idx = this.tasks.indexOf(task);
    this.tasks.splice(idx, 1);
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id) {
    return this.tasks.find(function(task) {
      return task.id === id;
    });
  }

  toggleTask(id) {
    var task = this.getTask(id);
    if (task) {
      task.toggleComplete();
    }
  }
}
