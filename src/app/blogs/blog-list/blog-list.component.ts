import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { SeoService } from 'src/app/service/seo.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  postList$ = this.blogService.getPostList();
  constructor(private readonly blogService:BlogService,
    private readonly seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.setData({
      title: "Blogs",
      description: "Blog List",
      author: "Ngoc Long",
      type: 'article',
      published: (new Date()).toISOString()
    })
  }

}
