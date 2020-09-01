import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map,filter } from 'rxjs/operators'

const JSON_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})


export class GetGeoDataService {

  constructor( private httpClient: HttpClient ) { }
  getJsonGeoData(myid){
    console.log("hello from servce");
    return this.httpClient.get(JSON_URL)
          .pipe(map((res:any)=> {
            return res.filter(data => data.id == myid)
          }))
  }
  //

}
