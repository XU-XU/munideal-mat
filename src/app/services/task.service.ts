import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../modals/task.modal';
import { TASKS } from '../core/mock-orders';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
  constructor() { }
}
