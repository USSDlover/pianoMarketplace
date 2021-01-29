import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ExplorePage} from './explore.page';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';

import {ExplorePageRoutingModule} from './explore-routing.module';
import {SharedModule} from '@shared/shared.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        ExplorePageRoutingModule,
        SharedModule
    ],
    declarations: [ExplorePage]
})
export class ExplorePageModule {
}
