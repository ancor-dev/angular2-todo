import {Component, OnInit} from 'angular2/core';
import {TasklistComponent} from "./tasklist.component";
import {Tasklist} from "./tasklist";
import {Task} from "./task";
import {NewTaskComponent} from "./new-task.component";

@Component({
  selector:    'my-app',
  templateUrl: 'app/app.component.html',
  directives:  [TasklistComponent, NewTaskComponent],
})

export class AppComponent implements OnInit {

  public tasklist: Tasklist = new Tasklist();

  public ngOnInit():any {
    this.tasklist.add(new Task('Task 1'));
    this.tasklist.add(new Task('Task 2', true));
    this.tasklist.add(new Task('Task 3'));
  }
}