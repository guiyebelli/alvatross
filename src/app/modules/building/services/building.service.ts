import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { Observable } from 'rxjs'
import { Floor } from '../models/floor.model'

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  private apiUrl = environment.api_url
  constructor(private http: HttpClient) {}

  getFloors(): Observable<Floor[]> {
    return this.http.get<Floor[]>(this.apiUrl + 'floors', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    })
  }
}
