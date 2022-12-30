import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupinfoComponent } from './add-groupinfo.component';

describe('AddGroupinfoComponent', () => {
  let component: AddGroupinfoComponent;
  let fixture: ComponentFixture<AddGroupinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroupinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGroupinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
