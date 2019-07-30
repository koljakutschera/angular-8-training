import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { DateValueAccessorModule } from "angular-date-value-accessor";

import { AdminRoutingModule } from "./admin-routing.module";

import { BookFormComponent } from "./book-form/book-form.component";

@NgModule({
  declarations: [BookFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ]
})
export class AdminModule {}
