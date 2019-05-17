import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { PublishersComponent } from './admin/publishers/publishers.component';
import { BooksComponent } from './admin/books/books.component';
import { fromEventPattern } from 'rxjs';
import { LayoutComponent } from './admin/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent,
    children:[]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'publishers', component: PublishersComponent},
      {path: 'books', component: BooksComponent}
  ]}
];
  
  
    

  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
