import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipCalculationService {
  calculateTip(cost: number, serviceQuality: number, roundUp: boolean): number {
    let tip = cost * serviceQuality;
    return roundUp ? Math.ceil(tip) : parseFloat(tip.toFixed(2));
  }

  calculateTotal(cost: number, tip: number): number {
    return cost + tip;
  }
}
