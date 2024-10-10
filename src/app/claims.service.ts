// claims.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from './../environment'

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  private apiUrl = url; 

  constructor(private http: HttpClient) {}

  submitClaim(claimData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, claimData);
  }
}
