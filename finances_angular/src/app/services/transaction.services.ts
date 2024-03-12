import { Injectable, computed, signal } from "@angular/core";
import { ITransaction, TTransaction } from "../interfaces/transaction.interfaces";

@Injectable({providedIn: 'root'})
export class TransactionService {
  readonly transactionList = signal<ITransaction[]>([]);
  readonly totalValue = computed(() => this.transactionList().reduce((accValue, transaction) => {
    if(transaction.type === "entrada"){
      return accValue + Number(transaction.value)
    } else{
      return accValue - Number(transaction.value)
    }
  }, 0))

  getTransactionList(){
    return this.transactionList()
  }

  addTransaction(data: TTransaction){
    const newTransaction = {...data, id: crypto.randomUUID()}
    this.transactionList.update((transactionList) => [...transactionList, newTransaction])
  }

  removeTransaction(removingId: string){
    this.transactionList.update((transactionList) =>
      transactionList.filter((transaction) => transaction.id !== removingId)
    )
  }
}
