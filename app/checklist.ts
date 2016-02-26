import {Task} from "./Task";

export class Checklist {

  public tasks: Task[] = [];

  public get count():number {
    return this.tasks.length;
  }
  public get countCompleted ():number {
    return this.tasks.filter((task) => task.done).length;
  }

  public add(task: Task):void {
    this.tasks.push(task);
  }

  public removeCompleted():void {
    this.tasks = this.tasks.filter(task => !task.done);
  }
}