import { Component } from '@angular/core';
import {  FormControl ,Validators} from '@angular/forms';
import { GetGeoDataService } from '../get-geo-data.service';
 
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent {

  constructor(private geoDataService: GetGeoDataService) { }

  tableColumns: string[] = ['name','longitude','latitude'];
  geoData

  geoID = new FormControl('',[Validators.required,  Validators.pattern("[1-9]")] );
  
  getGeoData(myid){
    this.geoDataService.getJsonGeoData(myid)
    .subscribe(val => this.geoData = val);
  }
}
