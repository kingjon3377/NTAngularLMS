import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { BorrowersComponent } from './admin/borrowers/borrowers.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: []
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'borrowers',
        component: BorrowersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
