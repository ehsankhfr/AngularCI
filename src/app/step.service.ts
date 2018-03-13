import {Injectable} from '@angular/core';

@Injectable()
export class StepService {
  static MIN_STEP = 1;
  static MAX_STEP = 3;
  private static STEPS: string[];

  private _step: number;

  private static kebabCase(str: string): string {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase();
  }

  static setSteps(routes: string[] = []) {
    StepService.STEPS = routes.map(title =>
      StepService.kebabCase(title.replace('Component', ''))
    );

    StepService.MIN_STEP = 0;

    StepService.MAX_STEP = routes.length - 1;
  }

  constructor() {
    this._step = StepService.MIN_STEP;
  }

  hasNext(): boolean {
    return this._step < StepService.MAX_STEP;
  }

  next(): string {
    return this.hasNext() ?
      StepService.STEPS[++this._step] :
      StepService.STEPS[this._step];
  }

  hasPrevious(): boolean {
    return this._step > StepService.MIN_STEP;
  }

  previous(): string {
    return this.hasPrevious() ?
      StepService.STEPS[--this._step] :
      StepService.STEPS[this._step];
  }

  getSteps(): string[] {
    return StepService.STEPS;
  }

  get step(): string {
    return StepService.STEPS[this._step];
  }

  get stepId(): number {
    return this._step;
  }
}
