import {AppConfig} from './config/app.config';
import {IAppConfig} from './interfaces';
import {APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './import.guard';
import {HttpClientModule} from '@angular/common/http';
import {ApiService, StorageService} from './services';

export function initializeApp(appConfig: AppConfig): () => Promise<IAppConfig | void> {
  return () => appConfig.load();
}

const Providers = [
  ApiService,
  StorageService
];

/**
 * Contains core service, interfaces and models only
 */
@NgModule({
  imports: [HttpClientModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        AppConfig,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeApp,
          deps: [AppConfig], multi: true
        },
        ...Providers
      ]
    } as ModuleWithProviders<any>;
  }
}
