import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDemoComponent } from './security-demo.component';

describe('SecurityDemoComponent', () => {
  let component: SecurityDemoComponent;
  let fixture: ComponentFixture<SecurityDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
