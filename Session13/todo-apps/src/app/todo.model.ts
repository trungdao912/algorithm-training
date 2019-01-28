export class Todo {
  public id: number;
  public taskName: string;
  public status: boolean;

  constructor(id: number, taskName: string, status: boolean) {
    this.id = id;
    this.taskName = taskName;
    this.status = status;
  }
}
