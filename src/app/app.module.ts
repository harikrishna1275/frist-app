import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponetComponent } from './item-componet/item-componet.component';
import { EmployeeComponetComponent } from './employee-componet/employee-componet.component';
import { CompanyComponent } from './company/company.component';
import { EducationComponent } from './education/education.component';
import { PersonalComponent } from './personal/personal.component';
import { FamilyComponent } from './family/family.component';
import { SalaryComponent } from './salary/salary.component';
import { ChildrenDetailsComponent } from './children-details/children-details.component';
import { WifeDetailsComponent } from './wife-details/wife-details.component';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { ToppingFilterPipe } from './pipes/topping-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponetComponent,
    EmployeeComponetComponent,
    CompanyComponent,
    EducationComponent,
    PersonalComponent,
    FamilyComponent,
    SalaryComponent,
    ChildrenDetailsComponent,
    WifeDetailsComponent,
    FlyingHeroesPipe,
    FlyingHeroesComponent,
    ToppingFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FormsModule, //To make use of Ng Module,we should import FormModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
