import { Component } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'admin-footer',
    templateUrl: './admin.footer.component.html'
})
export class AdminFooterComponent {
    constructor(public layoutService: LayoutService) { }
}
