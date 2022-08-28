import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sensorData : Object= [];
  destroy$ : Subject<boolean> = new Subject<boolean>();


  constructor(private appService: AppService) { }

  ngOnInit() {

    this.appService.getSensorData().pipe(takeUntil(this.destroy$)).subscribe((value:Object) => {
      this.sensorData = value;
    });
  }

  title = 'sensor-readig-app';
}
