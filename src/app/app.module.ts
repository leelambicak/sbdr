import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin.layout.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth.layout.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppLayoutModule,
        AdminLayoutModule,
        AuthLayoutModule,
        HttpClientModule,
        SharedModule,
     
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
