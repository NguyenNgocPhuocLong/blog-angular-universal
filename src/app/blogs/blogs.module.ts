import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './blog.router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';



@NgModule({
  declarations: [BlogListComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogsModule { }
