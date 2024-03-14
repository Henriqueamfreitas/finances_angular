import { Component, Input } from '@angular/core';
import { ITransaction } from '../../interfaces/transaction.interfaces';
import { TransactionService } from '../../services/transaction.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.css'
})
export class TransactionCardComponent {
  constructor(private transactionService: TransactionService) { }

  @Input() transaction!: ITransaction

  valueToMoney() {
    if(this.transaction.type === "saida"){
      this.transaction.value = -this.transaction.value
    }

    return (this.transaction.value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  }

  handleDelete() {
    this.transactionService.removeTransaction(this.transaction.id);
  }

  isNegative() {
    if(this.transaction.type === "saida"){
      return true
    }
    return false
  }
}
