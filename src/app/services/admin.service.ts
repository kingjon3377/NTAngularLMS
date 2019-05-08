import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  
  getAllBorrowers() {
    return this.http.get(
      environment.api_endpoint +
      environment.admin_endpoint +
      environment.get_all_borrowers
    );
  }
}
