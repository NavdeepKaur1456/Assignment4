//input ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipCalculationService } from '../tip-calculation.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent {
  tipForm: FormGroup;

  constructor(private fb: FormBuilder, private tipCalculationService: TipCalculationService, private router: Router) {
    this.tipForm = this.fb.group({
      costOfService: ['', Validators.required],
      serviceQuality: ['0.15', Validators.required],
      roundUpTip: [false]
    });
  }

  calculateTip() {
    const { costOfService, serviceQuality, roundUpTip } = this.tipForm.value;
    const tip = this.tipCalculationService.calculateTip(costOfService, serviceQuality, roundUpTip);
    const total = this.tipCalculationService.calculateTotal(costOfService, tip);
    this.router.navigate(['/output'], { queryParams: { costOfService, serviceQuality, roundUpTip, tip, total } });
  }
}
