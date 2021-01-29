import {NgModule} from '@angular/core';
import {PianoComponent} from './components';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

const Pipes = [];

const Directives = [];

const Components = [
    ...Directives,
    ...Pipes,
    PianoComponent
];

const Modules = [
    IonicModule,
    CommonModule
];

/**
 * Contains shared modules, components, directives and pipes
 */
@NgModule({
    imports: [
        ...Modules
    ],
    declarations: [...Components],
    exports: [
        ...Modules,
        ...Components
    ]
})
export class SharedModule {}
