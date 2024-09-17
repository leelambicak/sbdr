import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { ScreensRoutingModule } from './screens-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    RequestFormComponent,
    
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    RequestFormComponent
  ]
})
export class ScreensModule { }
