import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-widget.component.html',
  styleUrl: './todo-widget.component.scss'
})
export class TodoWidgetComponent {

  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
