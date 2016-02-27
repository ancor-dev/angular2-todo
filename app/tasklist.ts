import {Task} from "./task";

export class Tasklist {

  public tasks: Task[] = [];

  public get count():number {
    return this.tasks.length;
  }
  public get countCompleted():number {
    return this.tasks.filter(task => task.done).length;
  }

  public add(task: Task):void {
    this.tasks.push(task);
  }

  public removeCompleted():void {
    this.tasks = this.tasks.filter(task => !task.done);
  }
}