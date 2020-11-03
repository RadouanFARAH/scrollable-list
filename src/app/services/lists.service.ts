import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ListsService implements Resolve<any>{
  url = environment.url;
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.http.get(`${this.url}`)
  };

  delete(id:Number){
    this.http.delete(`${this.url}/${id}`)
  }

}
