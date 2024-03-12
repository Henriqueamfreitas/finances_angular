import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { TotalCardComponent } from '../../components/total-card/total-card.component';
import { RouterLink } from '@angular/router';
import { TransactionService } from '../../services/transaction.services';
import { TransactionCardComponent } from '../../components/transaction-card/transaction-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormComponent, TotalCardComponent, TransactionCardComponent],
  providers: [TransactionService],
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.css'
})
export class TransactionPageComponent {
  constructor (private transactionService: TransactionService) {}

  get transactionList(){
    return this.transactionService.getTransactionList();
  }
}
