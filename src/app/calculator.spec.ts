import { Calculator } from './calculator';
//calculator spec
describe('Calculator', () => {
  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });

  it('should calculate the right tip amount', () => {
    const calculator = new Calculator(100, 0.15, false);
    expect(calculator.calculateTip()).toEqual(15);
  });

  it('should calculate the tip amount rounded up to the nearest dollar', () => {
    const calculator = new Calculator(100, 0.15, true);
    expect(calculator.calculateTip()).toEqual(15); // This is expected to be 15 because it's the nearest whole number
  });

  it('should calculate the total amount correctly', () => {
    const calculator = new Calculator(100, 0.15, false);
    expect(calculator.calculateTotal()).toEqual(115);
  });

  it('should calculate the total amount with tip rounded correctly', () => {
    const calculator = new Calculator(100, 0.18, true);
    expect(calculator.calculateTotal()).toEqual(118); // Assuming the tip is rounded to the nearest dollar
  });
});
//end
