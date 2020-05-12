import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponetComponent } from './employee-componet.component';

describe('EmployeeComponetComponent', () => {
  let component: EmployeeComponetComponent;
  let fixture: ComponentFixture<EmployeeComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
