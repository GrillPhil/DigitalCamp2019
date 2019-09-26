import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  constructor(private http: HttpClient) { }

  getAddressFromCoordinate(lat, lon): Observable<any> {
    return this.http.get('https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox='+lat+'%2C'+lon+
                         '%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id='+environment.hereAppId+
                         '&app_code='+environment.hereAppCode);
  }
}
