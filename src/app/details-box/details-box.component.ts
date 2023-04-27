import { Component } from '@angular/core';

@Component({
  selector: 'app-details-box',
  templateUrl: './details-box.component.html',
  styleUrls: ['./details-box.component.css']
})
export class DetailsBoxComponent {

  tasklist = [
    {
      title: 'Humber',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      id: 1,
    },
    {
      title: 'MERN',
      tasks: ['Lab', 'Project', 'Quiz'],
      id: 2,
    },
    {
      title: 'Java',
      tasks: ['Group Discussion', 'Exam', 'Assignment'],
      id: 3,
    },
  ]

  hide = false;

  onButtonClick(taskId: number, task: { title: string, tasks: string[], id: number }) {

    this.tasklist = this.tasklist.map((obj, index) => {
      if (index === task.id - 1) {
        obj.tasks = obj.tasks.filter((task, taskIndex) => taskIndex !== taskId);
      }
      return obj
    }
    );

  }

  searchedItem = ""

  onSearchedData(searchedItem: string) {
    this.searchedItem = searchedItem;
  }

}
