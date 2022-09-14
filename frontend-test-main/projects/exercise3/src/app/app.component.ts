import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  private randomNumberSubscription: Subscription = Subscription.EMPTY;

  number: Number = 0;

  constructor(private dataService: DataService) {}

  /**
   * Get current number from the dataService 
   */
  ngOnInit(): void {
    this.randomNumberSubscription = this.dataService.getNumbers().subscribe((s: Number) => {
      this.number = s;
    });
  }

  /**
   * Unsubscribe all observables
   */
  ngOnDestroy(): void {
    this.randomNumberSubscription.unsubscribe();
  }
}
