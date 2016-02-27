import {Component, EventEmitter, Output} from 'angular2/core';
import {Task} from "./task";

@Component({
  selector: 'new-task',
  templateUrl: 'app/new-task.component.html',
})
export class NewTaskComponent {

  public task: Task = new Task();

  @Output() public newTask: EventEmitter<Task> = new EventEmitter<Task>();

  public create() {
    this.newTask.emit(this.task);
    this.task = new Task();
  }
}