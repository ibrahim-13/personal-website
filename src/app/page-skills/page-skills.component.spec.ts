import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSkillsComponent } from './page-skills.component';

describe('PageSkillsComponent', () => {
  let component: PageSkillsComponent;
  let fixture: ComponentFixture<PageSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
