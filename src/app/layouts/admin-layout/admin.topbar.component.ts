import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';


@Component({
    selector: 'admin-topbar',
    templateUrl: './admin.topbar.component.html'
})
export class AdminTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    private sidebarClickListener: () => void;

    constructor(public layoutService: LayoutService) {
    }

    handleEvent() {
        this.layoutService.onMenuToggle()
        this.layoutService.toggleSidebar();
    }

}
