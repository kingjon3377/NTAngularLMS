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

  deleteBorrower(id) {
    this.adminService.deleteBorrower(id).subscribe(res => {
      console.log("Successfully deleted!");
      this.adminService.getAllBorrowers().subscribe(res => {
        console.log("updated Borrower Table Successfully!");
        this.authors = res;
      });
    });
  }
}
