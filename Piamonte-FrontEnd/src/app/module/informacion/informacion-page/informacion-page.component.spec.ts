import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPageComponent } from './informacion-page.component';

describe('InformacionPageComponent', () => {
  let component: InformacionPageComponent;
  let fixture: ComponentFixture<InformacionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionPageComponent]
    });
    fixture = TestBed.createComponent(InformacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
