import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth.layout.component';




@NgModule({
    declarations: [
    
        AuthLayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule

    ],
    exports: [AuthLayoutComponent]
})
export class AuthLayoutModule { }
