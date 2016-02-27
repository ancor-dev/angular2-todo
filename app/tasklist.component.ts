import {Component, Input} from 'angular2/core';
import {Tasklist} from "./tasklist";
import {Task} from "./task";

@Component({
  selector: 'tasklist',
  templateUrl: 'app/tasklist.component.html',
})

export class TasklistComponent {

  @Input() public tasklist: Tasklist;
}