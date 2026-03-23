import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

// Describe the test suite for LoginComponent
describe('LoginComponent', () => {
  let component: LoginComponent; // Component instance
  let fixture: ComponentFixture<LoginComponent>; // Test fixture to access component and DOM

  // Set up the testing module before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent], // Declare the component
      imports: [FormsModule] // Import FormsModule for form controls
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent); // Create component fixture
    component = fixture.componentInstance; // Get component instance
    fixture.detectChanges(); // Render the template and apply bindings
  });


});
 