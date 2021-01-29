import {Injectable} from '@angular/core';
import {ApiService} from '@core/services';
import {Store} from '@ngrx/store';
import {IPiano} from '@data/interfaces';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Piano} from '@data/models';

@Injectable()
export class PianoService {
    constructor(
        private _api: ApiService,
        private _store: Store<{ pianos: IPiano[] }>
    ) {
    }

    getAll(): Observable<IPiano[]> {
        // @ts-ignore
        return this._store.select<{ pianos: IPiano[] }>('pianos')
            .pipe(
                map((res) => {
                    if (res.pianos?.length > 0) {
                        return res.pianos;
                    } else {
                        return Array.from({length: Math.floor(Math.random() * 10)}, Piano.dummy);
                    }
                })
            );
    }
}
