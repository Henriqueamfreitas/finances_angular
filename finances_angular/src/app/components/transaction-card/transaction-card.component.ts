import { Component, Input } from '@angular/core';
import { ITransaction } from '../../interfaces/transaction.interfaces';
import { TransactionService } from '../../services/transaction.services';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.css'
})
export class TransactionCardComponent {
  constructor(private transactionService: TransactionService) {}

  @Input() transaction!: ITransaction

  handleDelete(){
    this.transactionService.removeTransaction(this.transaction.id);
  }
}
