import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.css']
})
export class BorrowersComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  authors: any;

  ngOnInit() {
    this.getAllBorrowers();
  }

  getAllBorrowers() {
    this.adminService.getAllBorrowers().subscribe(res => {
      this.authors = res;
    });
  }
}
