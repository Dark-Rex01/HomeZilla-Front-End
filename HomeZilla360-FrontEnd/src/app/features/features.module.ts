import { NgModule } from "@angular/core";
import { AuthModule } from "./Auth/auth.module";
import { FeatureRoutingModule } from "./features-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from "./search/search.module";
import { HomeModule } from "./home/home.module";
import { CustomerModule } from "./customerDashboard/customer.module";


@NgModule({
    declarations: [],
    imports: [
        AuthModule,
        FeatureRoutingModule,
        BrowserAnimationsModule,
        SearchModule,
        HomeModule,
        CustomerModule
    ]
})
export class FeaturesModule {}