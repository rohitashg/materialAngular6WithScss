import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormDemoComponent } from './material-form-demo.component';

describe('MaterialFormDemoComponent', () => {
  let component: MaterialFormDemoComponent;
  let fixture: ComponentFixture<MaterialFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
