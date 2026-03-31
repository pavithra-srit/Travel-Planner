import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanDetailsComponent } from './add-plan-details.component';

describe('AddPlanDetailsComponent', () => {
  let component: AddPlanDetailsComponent;
  let fixture: ComponentFixture<AddPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlanDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update selectedPlaceName when placeNameEvent is called', () => {
    // Explanation: The component method placeNameEvent() is responsible for capturing place name input
    // from the template and storing it in the selectedPlaceName property.
    // This test verifies that when the method is invoked with a string value,
    // the component property is updated accordingly.

    const testPlace = 'Paris';
    component.placeNameEvent(testPlace);
    expect(component.selectedPlaceName).toBe(testPlace);
  });

  it('should emit newItemEvent with plan object when addFlagValue is true on ngOnChanges', () => {
    // Arrange: set data fields such that ngOnChanges will include a plan object
    component.placeNameEvent('Rome');
    component.tripChangeEvent(2);
    component.bestTimeChangeEvent(3);
    component.transportChangeEvent(1);
    component.durationChangeEvent('5');
    component.timeChangeEvent('Week');
    component.startDateChangeEvent(new Date('2025-01-01'));
    component.endDateChangeEvent(new Date('2026-05-07'));
    component.attractionChangeEvent('Colosseum');
    component.noteChangeEvent('Holiday');

    component.addFlagValue = true;
    spyOn(component.newItemEvent, 'emit');

    // Act: invoke ngOnChanges with a simulated SimpleChanges object for addFlagValue
    component.ngOnChanges({
      addFlagValue: {
        previousValue: false,
        currentValue: true,
        firstChange: true,
        isFirstChange: () => true
      }
    } as any);

    expect(component.newItemEvent.emit).toHaveBeenCalled();
    const emittedArg = (component.newItemEvent.emit as jasmine.Spy).calls.mostRecent().args[0];
    expect(Array.isArray(emittedArg)).toBeTrue();
    expect(emittedArg[0].place).toBe('Rome');
    expect(emittedArg[0].vacationType).toBe(2);
  });

  it('should reset data when resetFlag is true on ngOnChanges', () => {
    // Arrange: set non-empty data then trigger resetFlag change
    component.selectedPlaceName = 'Tokyo';
    component.resetFlag = true;

    component.ngOnChanges({
      resetFlag: {
        previousValue: false,
        currentValue: true,
        firstChange: true,
        isFirstChange: () => true
      }
    } as any);

    // Assert: selectedPlaceName and other fields are reset by resetData()
    expect(component.selectedPlaceName).toBe('');
    expect(component.selectedTrip).toBeNull();
    expect(component.selectedStartDate).toBeNull();
  });
});
