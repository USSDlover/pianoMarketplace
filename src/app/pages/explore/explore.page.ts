import {Component, OnDestroy, OnInit} from '@angular/core';
import {PianoService} from '@data/services';
import {Subscription} from 'rxjs';
import {IPiano} from '@data/interfaces';

@Component({
    selector: 'app-explore',
    templateUrl: 'explore.page.html',
    styleUrls: ['explore.page.scss']
})
export class ExplorePage implements OnInit, OnDestroy {
    pianos: IPiano[];
    private _pianoSub: Subscription;

    constructor(
        private _pianoService: PianoService
    ) {
    }

    ngOnInit(): void {
        this._pianoSub = this._pianoService.getAll()
            .subscribe(res => {
                if (res) {
                    this.pianos = res;
                }
            });
    }

    ngOnDestroy(): void {
        if (this._pianoSub) {
            this._pianoSub.unsubscribe();
        }
    }

}
