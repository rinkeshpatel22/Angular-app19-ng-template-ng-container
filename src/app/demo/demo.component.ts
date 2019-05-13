import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  // set property for ng-template demo
  public isValid: boolean = false;
  public changeValue(value): void{
    this.isValid = value;
  }

  // set property for ng-container demo
  public dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  public selectedDay: string;
  public onSelectDay(day: any): void{
    this.selectedDay = day.target.value;
  }
}
