import {Injectable} from '@angular/core';

@Injectable()
export class StepService {
  static MIN_STEP = 1;
  static MAX_STEP = 3;

  private _step: number;

  constructor() {
    this._step = StepService.MIN_STEP;
  }

  hasNext() {
    return this._step < StepService.MAX_STEP;
  }

  next() {
    return this.hasNext() ? this._step++ : this._step;
  }

  hasPrevious() {
    return this._step > StepService.MIN_STEP;
  }

  previous() {
    return this.hasPrevious() ? this._step-- : this._step;
  }

  get step(): number {
    return this._step;
  }
}
