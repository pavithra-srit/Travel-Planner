import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanDetailsComponent } from './edit-plan-details.component';

describe('EditPlanDetailsComponent', () => {
  let component: EditPlanDetailsComponent;
  let fixture: ComponentFixture<EditPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPlanDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
