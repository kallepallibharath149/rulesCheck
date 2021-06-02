import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunrulesComponent } from './runrules.component';

describe('RunrulesComponent', () => {
  let component: RunrulesComponent;
  let fixture: ComponentFixture<RunrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
