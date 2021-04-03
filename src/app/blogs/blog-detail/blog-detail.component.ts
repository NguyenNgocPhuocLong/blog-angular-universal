import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { SeoService } from 'src/app/service/seo.service';
import {map, switchMap, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/blog.interface';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  post$: Observable<Post>;
  constructor(private readonly blogService:BlogService,
    private readonly seoService: SeoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.post$ = this.activatedRoute.paramMap.pipe(
      map(param => param.get('id')),
      switchMap(id => this.blogService.getPostListById(id)),
      tap(post =>{
        this.seoService.setData({
          title: post.title,
          description: post.body
        });
      })
      
    )
  }

}
