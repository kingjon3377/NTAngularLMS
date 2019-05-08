import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  authors: any;

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.http.get(environment.api_endpoint + environment.get_all_authors).
      subscribe(res => {
        this.authors = res;
        console.log(res);
      });
  }

}
