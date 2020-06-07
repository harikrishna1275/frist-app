import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifeDetailsComponent } from './wife-details.component';

describe('WifeDetailsComponent', () => {
  let component: WifeDetailsComponent;
  let fixture: ComponentFixture<WifeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
