class TodoListView {
  constructor(container) {
    this.taskList = new TodoList(container);

    this.createElements(container);
    this.bindEvents();
    this.render();
  }

  createElements(container) {
    this.container = document.querySelector(container);
    this.form = this.container.querySelector(container + '-form');
    this.form.taskText = this.form.querySelector('input');
    this.list = this.container.querySelector(container + '-list');
  }

  bindEvents() {
    this.form.addEventListener('submit', this.addTask.bind(this));
  }

  clearForm() {
    this.form.taskText.value = '';
  }

  addTask(event) {
    event.preventDefault();
    var text = this.form.querySelector('input').value;
    var task = new Todo(text);
    this.taskList.addTask(task);

    this.clearForm();
    this.render();
  }

  toggleTask(event) {
    event.preventDefault();
    var li = event.target.closest('li');

    this.taskList.toggleTask(li.dataset.id);

    this.render();
  }

  removeTask(event) {
    event.preventDefault();
    if (!event.target.dataset.id) {
      alert('The task ID is required');
      return;
    }

    var task = this.taskList.getTask(event.target.dataset.id);
    if (!task) {
      return;
    }

    var sure = confirm('Delete task "' + task.text + '"?');
    if (sure) {
      this.taskList.removeTask(task);
      this.render();
    }
  }

  render() {
    this.list.innerHTML = '';

    var tasks = this.taskList.getTasks();

    tasks.forEach(
      function(task) {
        this.renderTask(task);
      }.bind(this)
    );
  }

  renderTask(task) {
    var li = document.createElement('li');
    li.classList.add('d-flex');
    li.classList.add('justify-content-between');
    li.classList.add('box');
    li.dataset.id = task.id;

    if (task.isComplete) {
      li.classList.add('complete');
    }

    var div = document.createElement('div');

    var span = document.createElement('span');
    span.textContent = task.text;
    div.appendChild(span);

    var btnRemove = this.renderButton('removeTask', task.id, 'delete');
    btnRemove.classList.add('secondary-content');

    li.appendChild(div);
    li.appendChild(btnRemove);

    this.list.appendChild(li);

    li.addEventListener('click', this.toggleTask.bind(this));
    btnRemove.addEventListener('click', this.removeTask.bind(this));
  }

  renderButton(action, id, text) {
    var btn = document.createElement('button');
    btn.dataset.action = action;
    btn.dataset.id = id;
    btn.textContent = text;

    return btn;
  }
}
