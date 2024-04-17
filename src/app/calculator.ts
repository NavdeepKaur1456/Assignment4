//calculator.ts
export class Calculator {
  costOfService: number;
  serviceQuality: number;
  roundUpTip: boolean;

  public constructor(
    costOfService: number = 0,
    serviceQuality: number = 0.15,
    roundUpTip: boolean = false
  ) {
    this.costOfService = costOfService;
    this.serviceQuality = serviceQuality;
    this.roundUpTip = roundUpTip;
  }

  public calculateTip(): number {
    let tip = this.costOfService * this.serviceQuality;
    return this.roundUpTip ? Math.ceil(tip) : parseFloat(tip.toFixed(2));
  }

  public calculateTotal(): number {
    let tip = this.calculateTip();
    return this.costOfService + tip;
  }
}
