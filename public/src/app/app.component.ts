import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService){}

  title = 'Restful Tasks API';
  tasks = [];
  task = "";
  green = false;
  selectedTask;
  ngOnInit(){
    
  };

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data["task"]
    });
  };

  infoTask(id){
    console.log(id)
    this.selectedTask = this.tasks[id];
  }
}
