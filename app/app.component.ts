import {Component} from 'angular2/core';
import {ChecklistComponent} from "./checklist.component";

@Component({
  selector:    'my-app',
  templateUrl: 'app/app.component.html',
  directives:  [ChecklistComponent],
})

export class AppComponent {

}