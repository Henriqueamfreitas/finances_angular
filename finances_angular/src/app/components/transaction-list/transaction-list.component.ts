import { Component } from '@angular/core';
import { TransactionCardComponent } from '../transaction-card/transaction-card.component';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [TransactionCardComponent],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {

}
