import {NgModule} from '@angular/core';
import {ExplorePage} from './explore.page';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';

import {ExplorePageRoutingModule} from './explore-routing.module';
import {SharedModule} from '@shared/shared.module';

@NgModule({
    imports: [
        ExploreContainerComponentModule,
        ExplorePageRoutingModule,
        SharedModule
    ],
    declarations: [ExplorePage]
})
export class ExplorePageModule {
}
