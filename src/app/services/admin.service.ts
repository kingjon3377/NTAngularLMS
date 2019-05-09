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

  deleteBorrower(id) {
    return this.http.delete(
      environment.api_endpoint +
      environment.admin_endpoint +
      environment.deleteBorrower +
      id
    );
  }

  createBorrower(body) {
    return this.http.post(
      environment.api_endpoint +
      environment.admin_endpoint +
      environment.createBorrower + "?name=" +
      body.name + "&address=" + body.address +
      "&phone=" + body.phone,
      // Second parameter is an object you want to pass to the server,
      // it does not have to be JSON stringify
      {}
    );
  }
}
