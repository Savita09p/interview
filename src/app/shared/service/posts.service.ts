import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost, IpostsRes } from '../model/posts';
import { UuidService } from './uuid.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  BASE_URL : string =`${environment.baseUrl}`
  POSTS_URL : string =`${this.BASE_URL}/client.json`
  constructor(
    private _http : HttpClient,
    private _uuidService : UuidService
  ) { }

  fetchAllPosts():Observable<Array<Ipost>>{
     return this._http.get<IpostsRes>(this.POSTS_URL)
                   .pipe(
                     map(data =>{
                      let postsArr : Array<Ipost> = []
                      for (const key in data){
                         postsArr.push({...data[key],id :key})
                      }
                      return postsArr
                     })
                   )
  }

  createBlogPost(post:Ipost):Observable<any>{
   return this._http.post<Ipost>(this.POSTS_URL,post)
  }
  
}
