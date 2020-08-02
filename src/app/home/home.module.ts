// home.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

// Calendar UI Module
import { CalendarModule } from 'ion2-calendar';


//import { MsgeventComponent } from "../msgevent/MsgeventComponent";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    CalendarModule,
    //MsgeventComponent
  ],
  declarations: [HomePage]
})

export class HomePageModule {}