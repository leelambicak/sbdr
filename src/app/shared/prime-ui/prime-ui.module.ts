import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { InputTextModule } from "primeng/inputtext";
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from "primeng/dropdown";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    InputTextModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule
  ]
})
export class PrimeUiModule { }
