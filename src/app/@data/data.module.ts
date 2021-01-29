import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from '@core/import.guard';
import {HttpClientModule} from '@angular/common/http';
import {PianoService} from './services';
import {StoreModule} from '@ngrx/store';
import {pianosReducer} from '@data/store';

const Providers = [
    PianoService
];

/**
 * Contains any shared interface, service and models
 * related to DTO and data serving logic
 */
@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forRoot({pianos: pianosReducer})
    ],
})
export class DataModule {
    constructor(@Optional() @SkipSelf() parentModule: DataModule) {
        throwIfAlreadyLoaded(parentModule, 'DatModule');
    }

    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: DataModule,
            providers: [
                ...Providers
            ]
        } as ModuleWithProviders<any>;
    }
}
