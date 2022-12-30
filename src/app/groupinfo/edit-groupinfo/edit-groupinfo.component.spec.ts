import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupinfoComponent } from './edit-groupinfo.component';

describe('EditGroupinfoComponent', () => {
  let component: EditGroupinfoComponent;
  let fixture: ComponentFixture<EditGroupinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGroupinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGroupinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
