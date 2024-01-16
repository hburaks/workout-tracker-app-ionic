import {Injectable} from '@angular/core';
import {SetClass} from "../models/set-class";

@Injectable({
  providedIn: 'root'
})
export class SetClassService {

  constructor() { }
  calculate1RM(set: SetClass): number {
    const weightMultiplier = set.weightUnitTypeEnum === 'lbs' ? 2.20462 : 1;
    const oneRepMax = set.weight * (1 + 0.0333 * set.reps * weightMultiplier);
    return Math.round(oneRepMax * 100) / 100;
  }
  calculate1RMMaxSet(sets: SetClass[]): SetClass | null {
    let highest1RM = 0;
    let highestSet: SetClass | null = null;

    sets.forEach(set => {
      const oneRepMax = this.calculate1RM(set);
      if (oneRepMax > highest1RM) {
        highest1RM = oneRepMax;
        highestSet = set;
      }
    });
    return highestSet;
  }
}
