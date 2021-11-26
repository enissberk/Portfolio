import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsPage } from '../blog-details/blog-details.page';

import { BlogPage } from './blog.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogPage
      },
      {

        path: ':id',
        component: BlogDetailsPage

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPageRoutingModule { }
