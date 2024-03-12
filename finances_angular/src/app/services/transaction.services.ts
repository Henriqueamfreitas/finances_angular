import { Injectable, signal } from "@angular/core";
import { ITransaction, TTransaction } from "../interfaces/transaction.interfaces";

@Injectable({providedIn: 'root'})
export class TransactionService {
  readonly transactionList = signal<ITransaction[]>([]);

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
