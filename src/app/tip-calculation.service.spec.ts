import { TestBed } from '@angular/core/testing';
import { TipCalculationService } from './tip-calculation.service';

describe('TipCalculationService', () => {
  let service: TipCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the right tip amount', () => {
    expect(service.calculateTip(100, 0.15, false)).toEqual(15);
    expect(service.calculateTip(100, 0.15, true)).toEqual(15); // Should be 15 since we're rounding to the nearest dollar
  });

  it('should calculate the right total amount', () => {
    expect(service.calculateTotal(100, 15)).toEqual(115);
  });
});
