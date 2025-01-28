import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgOptimizedImage
  ]
})
export class MainModule { }
