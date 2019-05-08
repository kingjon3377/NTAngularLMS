import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorsComponent } from './admin/authors/authors.component';

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
        path: 'authors',
        component: AuthorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
