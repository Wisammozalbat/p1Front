import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoadingController } from '@ionic/angular';
import { Response } from '../../models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url = environment.url;
  constructor( private http: HttpClient, private loadingCtrl: LoadingController) { }

  getMenu(menuid: string){
    const serverUrl = this.url;
    return this.http.get<Response>(`${serverUrl}/menu/menu/${menuid}`,  {withCredentials: true});
  }

  getMenus(){
    const serverUrl = this.url;
    return this.http.get<Response>(`${serverUrl}/menu/menu`,  {withCredentials: true});
  }

  getMenusWithoutParents(){
    const serverUrl = this.url;
    return this.http.get<Response>(`${serverUrl}/dashboard`, {withCredentials: true});
  }

  deleteMenu(menuid: string){
    const serverUrl = this.url;
    const id = menuid;
    return this.http.get<Response>(`${serverUrl}/menu/${id}/delete`,  {withCredentials: true});
  }

  getMenusByParent(menuid: string){
    const serverUrl = this.url;
    const id = menuid;
    return this.http.get<Response>(`${serverUrl}/menu/${id}`,  {withCredentials: true});
  }

  createMenu(title: string, description: string, parent: string){
    const body = {
      title: title,
      description: description,
      parent: parent
    };
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true
    };
    return this.http.post<Response>(`${serverUrl}/menu/menu`, JSON.stringify(body), httpOptions);
  }
}