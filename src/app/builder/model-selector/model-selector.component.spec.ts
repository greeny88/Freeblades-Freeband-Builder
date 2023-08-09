import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSelectorComponent } from './model-selector.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModelSelectorService } from './model-selector.service';

import { Models } from 'src/app/builder/model-selector/models';

describe('ModelSelectorComponent', () => {
  let component: ModelSelectorComponent;
  let fixture: ComponentFixture<ModelSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelSelectorComponent ],
      imports: [ MatDialogModule ],
      providers: [ ModelSelectorService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit id when model removed', () => {
    const testComponentId = 'test-id-1';

    spyOn(component.onModelRemoved, 'emit');
    component.componentId = testComponentId;
    component.modelRemoved();

    expect(component.onModelRemoved.emit).toHaveBeenCalledWith(testComponentId);
  });
  it('should emit id when model selected from dropdown', () => {
    const testComponentId = 'test-id-1';

    spyOn(component.onModelSelected, 'emit');
    component.componentId = testComponentId;
    component.selected = undefined;
    component.modelSelected();

    expect(component.onModelSelected.emit).toHaveBeenCalledWith({component_id: testComponentId});
  });
  it('should emit model when model passed into component', () => {
    const testComponentId = 'test-id-1';

    spyOn(component.onModelSelected, 'emit');
    component.componentId = testComponentId;
    component.selected = Models.find(model => model.displayName === 'Hinterguard');
    component.modelSelected();

    expect(component.onModelSelected.emit).toHaveBeenCalledWith(component.model);
    expect(component.model.component_id).toBe(testComponentId);
  });
  xit('should watch for changes with faction and alt leader');
});
