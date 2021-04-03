import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/blog.interface';
import { SeoService } from './seo.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  readonly url:string ="https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { 

  }

  getPostList() {
    return this.http.get<Post[]>(this.url);
  }

  getPostListById(id: string | number) {
    return this.http.get<Post>(`${this.url}/${id}`);
  }
}
