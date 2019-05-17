import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewBranchComponent implements OnInit {

  constructor(private http: HttpClient, public activeModal: NgbActiveModal) {}

  branchName: string;
  branchAddress: string;

  ngOnInit() {}

  closeModal() {
    this.activeModal.close('New Branch modal closed');
  }

  createBranch() {
    if (!this.branchName || !this.branchAddress) {
      // TODO: show error in form
      return false;
    }
    return this.http.post(environment.api_endpoint + environment.single_branch,
      new HttpParams().set('name', this.branchName).
          set('address', this.branchAddress)).subscribe((res) =>
        this.activeModal.close(res), console.log);
  }
}
