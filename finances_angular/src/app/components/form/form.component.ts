import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../services/transaction.services';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor (private transactionService: TransactionService) {}
  value = new FormControl(0)
  description = new FormControl<string>("")
  type = new FormControl<"entrada" | "saida">("entrada")

  formSubmit(event: Event){
    event.preventDefault();
    if(this.value.value !== 0 && this.description.value !== ""){
      const data = {
        value: Number(this.value.value),
        type: this.type.value as "entrada" | "saida",
        description: this.description.value as string,
      }

      this.transactionService.addTransaction(data)
      this.value.setValue(0);
      this.description.setValue("");
      this.type.setValue("entrada");
    } else{
      alert("Preencha todos os campos")
    }
  }
}
