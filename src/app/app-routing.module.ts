import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { BorrowersComponent } from './admin/borrowers/borrowers.component';
import { AuthorsComponent } from './admin/authors/authors.component';
import { BranchesComponent} from './admin/branches/branches.component';

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
      },
      {
        path: 'authors',
        component: AuthorsComponent
      },
      {
        path: 'branches',
        component: BranchesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
