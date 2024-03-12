import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.css'
})
export class TransactionCardComponent {
  @Input() value!: number;
  @Input() description!: string;
  @Input() type!: string;
}
