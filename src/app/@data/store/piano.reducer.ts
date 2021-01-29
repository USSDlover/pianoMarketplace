import { createReducer, on } from '@ngrx/store';
import { add } from './piano.actions';
import {IPiano} from '@data/interfaces';

export const initialState: IPiano[] = [];

const _storePianosReducer = createReducer(
  initialState,
  on(add, (state, { pianos } ) => [...state, ...pianos]),
);

export function pianosReducer(state, action): any[] {
  return _storePianosReducer(state, action);
}
