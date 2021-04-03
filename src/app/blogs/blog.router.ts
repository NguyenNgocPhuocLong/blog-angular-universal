import { Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogsComponent } from './blogs.component';

export const routes: Routes = [
    {
        path: '',
        component: BlogsComponent,
        children: [
            {
                path: '',
                component: BlogListComponent
            },
            {
                path: ':id',
                component: BlogDetailComponent
            }
        ]
    }
];