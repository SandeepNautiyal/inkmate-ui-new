import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionItemComponent } from './solution-item.component';

describe('SolutionItemComponent', () => {
  let component: SolutionItemComponent;
  let fixture: ComponentFixture<SolutionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
