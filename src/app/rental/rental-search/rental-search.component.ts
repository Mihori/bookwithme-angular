import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { ActivatedRoute } from '@angular/router';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-search',
  templateUrl: './rental-search.component.html',
  styleUrls: ['./rental-search.component.scss']
})
export class RentalSearchComponent implements OnInit {

  city: string;
  rentals: Rental;

  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.city = params['city'];
        this.getRentals();
      });
  }

  private getRentals() {
    this.rentalService.getRentalsByCity(this.city).subscribe(
      (rentals: Rental) => {
        this.rentals = rentals;
      },
      (errorResponse) => {

      });
  }

}