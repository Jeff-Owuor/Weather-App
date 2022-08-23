import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string){
      this.http.get(environment.weatherApiBaseUrl, {
        headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeader,environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
        params: new HttpParams()
        .set('/',cityName)
      })
  }
}
