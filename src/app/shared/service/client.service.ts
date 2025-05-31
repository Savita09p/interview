import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   BASE_URL : string =`${environment.baseUrl}`
    POSTS_URL : string =`${this.BASE_URL}`
  
  constructor() { }
}
