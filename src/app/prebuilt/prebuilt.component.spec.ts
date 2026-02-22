import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { PrebuiltComponent } from './prebuilt.component';

describe('PrebuiltComponent', () => {
  let component: PrebuiltComponent;
  let fixture: ComponentFixture<PrebuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ PrebuiltComponent ],
      providers: [provideExperimentalZonelessChangeDetection()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrebuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
