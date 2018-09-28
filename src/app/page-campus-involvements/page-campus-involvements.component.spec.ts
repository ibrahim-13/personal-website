import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCampusInvolvementsComponent } from './page-campus-involvements.component';

describe('PageCampusInvolvementsComponent', () => {
  let component: PageCampusInvolvementsComponent;
  let fixture: ComponentFixture<PageCampusInvolvementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCampusInvolvementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCampusInvolvementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
