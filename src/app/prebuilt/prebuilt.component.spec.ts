import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrebuiltComponent } from './prebuilt.component';

describe('PrebuiltComponent', () => {
  let component: PrebuiltComponent;
  let fixture: ComponentFixture<PrebuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrebuiltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrebuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
