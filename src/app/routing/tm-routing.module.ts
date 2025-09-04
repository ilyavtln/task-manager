import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMasterpageComponent} from '@masterpages/main-masterpage/main-masterpage.component';
import {MainMasterpageModule} from '@masterpages/main-masterpage/main-masterpage.module';

const TM_ROUTES: Routes = [
  {
    path: '',
    component: MainMasterpageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@pages/home-page.module').then(m => m.HomePageModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    MainMasterpageModule,
    RouterModule.forChild(TM_ROUTES),
  ],
  exports: [RouterModule]
})
export class TmRoutingModule { }
