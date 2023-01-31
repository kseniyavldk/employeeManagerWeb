import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupinfoComponent } from './groupinfo.component';

describe('GroupinfoComponent', () => {
  let component: GroupinfoComponent;
  let fixture: ComponentFixture<GroupinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
