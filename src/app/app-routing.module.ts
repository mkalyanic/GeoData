import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { GetGeoDataService } from './get-geo-data.service';


const routes: Routes = [

  { path: '',component : GeolocationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
