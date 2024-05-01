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
});
