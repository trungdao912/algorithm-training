class Todo {
  constructor(text) {
    this.id = new Date().getTime().toString();
    this.text = text;
    this.isCompleted = false;
  }

  validate() {
    if (!this.text || typeof this.text !== 'string' || this.text === '') {
      return false;
    }

    return true;
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}
