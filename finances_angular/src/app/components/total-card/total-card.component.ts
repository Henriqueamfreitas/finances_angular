import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-card.component.html',
  styleUrl: './total-card.component.css'
})
export class TotalCardComponent {
  constructor(private transactionService: TransactionService) { }

  total = (this.transactionService.totalValue)

  valueToMoney() {
    return Number(this.total()).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  }

  isNegative() {
    if(this.total() < 0){
      return true
    }

    return false
  }
}
