import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesValuesComponent } from './mes-values.component';

describe('MesValuesComponent', () => {
  let component: MesValuesComponent;
  let fixture: ComponentFixture<MesValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
