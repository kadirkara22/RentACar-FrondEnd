import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Brand } from '../Models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl='https://localhost:44304/api/brands/getall';
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
      }

}
