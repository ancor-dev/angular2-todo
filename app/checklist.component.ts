import {Component, OnInit} from 'angular2/core';
import {Checklist} from "./checklist";
import {Task} from "./Task";

@Component({
  selector: 'checklist',
  templateUrl: 'app/checklist.component.html',
})

export class ChecklistComponent implements OnInit {

  public checklist: Checklist = new Checklist();

  public newTask: Task = new Task();

  public ngOnInit():any {
    this.checklist.add(new Task('Task 1'));
    this.checklist.add(new Task('Task 2', true));
    this.checklist.add(new Task('Task 3'));
  }

  public addTask() {
    this.checklist.add(this.newTask);
    this.newTask = new Task();
  }
}