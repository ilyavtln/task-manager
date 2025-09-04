import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMasterpageComponent } from './main-masterpage.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    MainMasterpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainMasterpageComponent]
})
export class MainMasterpageModule { }
