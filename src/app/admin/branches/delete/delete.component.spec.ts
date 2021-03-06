import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: BranchDeleteComponent;
  let fixture: ComponentFixture<BranchDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BranchDeleteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
