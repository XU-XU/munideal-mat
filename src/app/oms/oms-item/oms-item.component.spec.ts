import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsItemComponent } from './oms-item.component';

describe('OmsItemComponent', () => {
  let component: OmsItemComponent;
  let fixture: ComponentFixture<OmsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
