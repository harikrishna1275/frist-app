import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponetComponent } from './item-componet.component';

describe('ItemComponetComponent', () => {
  let component: ItemComponetComponent;
  let fixture: ComponentFixture<ItemComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
