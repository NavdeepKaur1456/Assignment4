import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipCalculationService } from '../tip-calculation.service';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.css']
})
export class OutputPageComponent implements OnInit {
  costOfService?: number;
  serviceQuality?: number;
  roundUpTip?: boolean;
  calculatedTip?: number;
  totalAmount?: number;

  constructor(private route: ActivatedRoute, private tipService: TipCalculationService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.costOfService = parseFloat(params['costOfService']);
      this.serviceQuality = parseFloat(params['serviceQuality']);
      this.roundUpTip = params['roundUpTip'] === 'true';

      if (!isNaN(this.costOfService) && !isNaN(this.serviceQuality)) {
        this.calculatedTip = this.tipService.calculateTip(this.costOfService, this.serviceQuality, this.roundUpTip);
        this.totalAmount = this.tipService.calculateTotal(this.costOfService, this.calculatedTip);
      }
    });
  }
}
