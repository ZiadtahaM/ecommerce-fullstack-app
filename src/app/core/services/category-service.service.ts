import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  constructor(private readonly _httpClient: HttpClient) { }

  getAllCategories(): Observable<any> {
    return this._httpClient.get(`${environments.baseUrl}/api/v1/categories`)
  }

  // getSpecificCategory(id: string): Observable<any> {
  //   return this._httpClient.get(`${environments.baseUrl}/api/v1/categories/${id}`)
  // }
}