import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupuserComponent } from './groupuser.component';

describe('GroupuserComponent', () => {
  let component: GroupuserComponent;
  let fixture: ComponentFixture<GroupuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
