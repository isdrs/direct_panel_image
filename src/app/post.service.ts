import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    url = "https://jsonplaceholder.typicode.com/posts";
  
    constructor(private http: HttpClient) { }

    //onResponse: (posts?: IPost[], err?:any)=>void
    getPosts(){
        return this.http.get(this.url);
    }
    
    postPost(post: IPost) {
        return this.http.post(this.url, post);
    }

    putPost(post: IPost, id: number) {
        return this.http.put(this.url + "/" + id, post)
    }
}
