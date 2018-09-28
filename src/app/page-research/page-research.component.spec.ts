import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResearchComponent } from './page-research.component';

describe('PageResearchComponent', () => {
  let component: PageResearchComponent;
  let fixture: ComponentFixture<PageResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
