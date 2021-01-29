import {createAction, props} from '@ngrx/store';
import {IPiano} from '@data/interfaces';

export const add = createAction(
  '[Store Pianos] Add',
  props<{ pianos: IPiano[] }>()
);
