import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import {
  CalendarComponentOptions
} from 'ion2-calendar'

@Component({
  selector: 'app-home',
  templateUrl:'home.page.html',
  styleUrls: ['home.page.scss'],
  /*template: `
    <hr>
    <h3 style="text-align: center;">basic</h3>
    <ion-calendar [(ngModel)]="date"
                  (onChange)="onChange($event)"
                  [options]="options"
                  type="string"
                  format="YYYY-MM-DD">
    </ion-calendar>
  `*/
})
export class HomePage {
  type: 'string';
  date: string = '2018-01-01';
  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
  };
  dateNow: string;

  constructor(public modalCtrl: ModalController) {
  }

  onChange($event) {
    console.log($event)
  }
  onSelect($event) {
    console.log('onSelect', $event);

    this.dateNow = new Date($event['time']).toLocaleDateString();
  }
}