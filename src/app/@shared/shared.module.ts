import {NgModule} from '@angular/core';
import {PianoComponent} from './components';

const Pipes = [];

const Directives = [];

const Components = [
    ...Directives,
    ...Pipes,
    PianoComponent
];

const Modules = [];

/**
 *
 */
@NgModule({
    declarations: [...Components],
    exports: [
        ...Modules,
        ...Components
    ]
})
export class SharedModule {}
