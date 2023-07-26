import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasPageComponent } from './compras-page.component';

describe('ComprasPageComponent', () => {
  let component: ComprasPageComponent;
  let fixture: ComponentFixture<ComprasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasPageComponent]
    });
    fixture = TestBed.createComponent(ComprasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
