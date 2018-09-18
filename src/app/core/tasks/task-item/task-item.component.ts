import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../modals/task.modal';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task; 
  constructor() { }

  ngOnInit() {
  }

}
