import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimeUiModule } from "./prime-ui/prime-ui.module";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [PrimeUiModule]
})
export class SharedModule {}