import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ExploreComponent } from "./explore/explore.component";
import { PlanComponent } from "./plan/plan.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AddPlanDetailsComponent } from "./add-plan-details/add-plan-details.component";
import { FormsModule, NgForm } from "@angular/forms";
import { NgbDatepicker, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ViewPlanDetailComponent } from "./view-plan-detail/view-plan-detail.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations:[AppComponent, HomeComponent,
        AboutComponent,
        ExploreComponent,
        PlanComponent,
        AddPlanDetailsComponent,
        ViewPlanDetailComponent,
        LoginComponent
    ],
    imports:[HomeComponent, 
        NgxDatatableModule,
        FormsModule,
        NgForm,
        NgbModule
    ],
    providers:[],
    bootstrap:[],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule{

}