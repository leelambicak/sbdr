import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminFooterComponent } from './admin.footer.component';
import { AdminLayoutComponent } from './admin.layout.component';
import { AdminMenuComponent } from './admin.menu.component';
import { AdminMenuitemComponent } from './admin.menuitem.component';
import { AdminSidebarComponent } from './admin.sidebar.component';
import { AdminTopBarComponent } from './admin.topbar.component';
import { AppConfigModule } from './config/config.module';



@NgModule({
    declarations: [
        AdminMenuitemComponent,
        AdminTopBarComponent,
        AdminFooterComponent,
        AdminMenuComponent,
        AdminSidebarComponent,
        AdminLayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule
    ],
    exports: [AdminLayoutComponent]
})
export class AdminLayoutModule { }
