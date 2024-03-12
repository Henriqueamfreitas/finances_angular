import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { TransactionListComponent } from '../../components/transaction-list/transaction-list.component';
import { TotalCardComponent } from '../../components/total-card/total-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transaction-page',
  standalone: true,
  imports: [RouterLink, FormComponent, TotalCardComponent, TransactionListComponent],
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.css'
})
export class TransactionPageComponent {

}
